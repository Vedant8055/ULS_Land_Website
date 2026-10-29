#!/usr/bin/env python3
"""Self-contained ambient landscape video for the Masrul concept prototype.

This is procedural ORIGINAL digital landscape artwork (not site drone footage).
No generative image or external image assets are used in this film.
Produces hero-ambient.mp4 (H.264, silent, loopable) and hero-poster.jpg.
"""
import sys, subprocess, math
from pathlib import Path
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent
W,H = 1536,864
OW,OH=1280,720
FPS=24
DURATION=15
FRAMES=FPS*DURATION
rng=np.random.default_rng(239144)


def fbm(w,h,scales,weights=None,seed=11):
    rd=np.random.default_rng(seed)
    if weights is None: weights=[1]*len(scales)
    acc=np.zeros((h,w),np.float32)
    sumw=0.
    for scale,weight in zip(scales,weights):
        grid_w=max(3,int(round(w/scale)))
        grid_h=max(3,int(round(h/scale)))
        grid=rd.standard_normal((grid_h,grid_w)).astype('float32')
        norm=cv2.resize(grid,(w,h),interpolation=cv2.INTER_CUBIC)
        acc += weight*norm
        sumw += weight
    acc /= max(sumw,1.e-5)
    return acc

# Canvas coordinates; intentional 128 px crop bleed for long slow camera drift.
y,x=np.mgrid[:H,:W].astype('float32')
ny=y/H
nx=x/W

# Natural, understated clouded dawn light.
sky_a=np.array([85,112,119],np.float32)
sky_b=np.array([204,198,166],np.float32)
sky_c=np.array([225,206,168],np.float32)
sky_t=np.clip(ny/0.58,0,1)
sky=sky_a[None,None,:]*(1-sky_t[...,None])+sky_b[None,None,:]*sky_t[...,None]
low_t=np.clip((ny-.36)/.38,0,1)
sky=sky*(1-low_t[...,None]*.24)+sky_c*low_t[...,None]*.24
sky_grain=fbm(W,H,[410,180,60,17],[.3,.2,.25,.25],seed=2)
sky+=(sky_grain[...,None]*5.2)
# Warm diffused glow through high clouds: not an exaggerated golden orb.
sun=np.exp(-(((x-W*.73)/(W*.24))**2+((y-H*.33)/(H*.35))**2)*2.4)
sky+=sun[...,None]*np.array([27,21,9],np.float32)

# soft cloudbank trails above ridge line
cloud_field=fbm(W,H,[410,170,60],[.6,.3,.1],seed=14)
cloud_cov=np.clip((cloud_field-.07)*.68,0,.20) * np.exp(-((ny-.34)/.30)**2)
sky=sky*(1-cloud_cov[...,None])+np.array([222,217,201],np.float32)*cloud_cov[...,None]

scene=sky.copy()
basecolors=[(120,139,133),(91,118,109),(75,107,88),(59,89,71),(39,69,54)]
ridges=[(337,83,114),(403,101,182),(480,114,248),(554,123,308),(626,148,394)]
# natural dark hillscapes, fine foliage textures, winding contours
base_noise=fbm(W,H,[280,125,52,18,5],[.21,.23,.26,.18,.12],seed=38)
patch_noise=fbm(W,H,[340,155,48],[.50,.28,.22],seed=124)
stripe_noise=fbm(W,H,[200,78,20,7],[.3,.25,.25,.2],seed=88)
for i,(baseline, amplitude, sd) in enumerate(ridges):
    rd=np.random.default_rng(sd)
    ridge_grain=rd.normal(0,1,20).astype('float32')
    ridge_grain=cv2.resize(ridge_grain[None,:],(W,1),interpolation=cv2.INTER_CUBIC)[0]
    xx=np.arange(W)/W
    # vary crest length and heights; different valleys and saddles.
    yy=(baseline+amplitude*.21*np.sin(xx*8.8+i*.8)
        +amplitude*.19*np.sin(xx*17.7+1.15*i)
        +amplitude*.14*np.cos(xx*4.9+0.7*i)
        +amplitude*.09*np.sin(xx*32.2+2.0*i)
        +amplitude*.17*ridge_grain).astype('float32')
    mask=(y>=yy[None,:])
    bottom_dist=np.clip((y-yy[None,:])/220,0,1)
    slope=np.clip(np.gradient(yy).astype('float32'),-4,4)
    relief=(.38*base_noise+.23*patch_noise+.18*stripe_noise+.08*np.sin(x*.04+y*.013)+.05*np.cos(x*.024-y*.016))
    shadow=np.clip(relief*1.4+.06*slope[None,:],-.6,.6)
    col=np.array(basecolors[i],np.float32)[None,None,:]
    # forest topography: green mixed with rough basalt-like rock on steeper slopes.
    tex=(shadow*44+bottom_dist*5)
    terrain=col+tex[...,None]*np.array([.67,1.0,.73],np.float32)
    # small natural dots of woodland/foliage across nearer slopes
    if i>=2:
        canopy=np.maximum(fbm(W,H,[34,12,4],[.25,.42,.33],seed=500+i)-.02,0)*22
        terrain[...,1]+=canopy
        terrain[...,0]-=canopy*.21
    # surface haze gets denser for distant ridgelines
    depth_haze=[.23,.17,.08,.04,.0][i]
    terrain=terrain*(1-depth_haze)+np.array([187,189,169])*depth_haze
    scene[mask]=terrain[mask]

# Actual natural atmosphere in the valley, blurred haze with spatial bands.
fog=fbm(W,H,[450,180,70,29],[.34,.27,.22,.17],seed=770)
fog_field=np.clip((fog+.10)*.65,0,1)
fog_low=(np.exp(-((ny-.57)/.105)**2)+.52*np.exp(-((ny-.69)/.07)**2))
fog_alpha=np.clip(fog_field*fog_low*.52,0,.52)
scene=scene*(1-fog_alpha[...,None])+np.array([217,219,196],np.float32)*fog_alpha[...,None]
# Softer narrow valley mist aligned on the horizontal ridges.
for cy,width,alpha in ((395,43,.19),(524,28,.14)):
    band=np.exp(-((y-cy)/width)**2)*alpha
    scene=scene*(1-band[...,None])+np.array([215,220,204],np.float32)*band[...,None]

# Atmosphere + film color grading.
scene=scene*.96+np.array([2,5,0],np.float32)
# Subtle dark vignette to retain contrast on white text overlay at hero bottom.
xr=(x-W*.5)/(W*.65); yr=(y-H*.5)/(H*.72)
vig=1-.19*np.clip((xr*xr+yr*yr),0,1)
scene *= vig[...,None]
scene=np.uint8(np.clip(scene,0,255))

# Prebuilt moving fog texture in full frame.
foghi=fbm(W,H,[490,270,125,48],[.4,.3,.2,.1],seed=903)
foghi=cv2.GaussianBlur(foghi,(0,0),sigmaX=13)
fog_lo=np.clip((foghi+.02)*.36,0,.32)
# keep hazy horizon while retaining photograph-style fine detail
fog_lo*=.62*np.exp(-((ny-.52)/.17)**2)+.38*np.exp(-((ny-.68)/.13)**2)
fog_lo=np.clip(fog_lo,0,.19).astype('float32')

out_video=ROOT/'hero-ambient.mp4'
poster=ROOT/'hero-poster.jpg'
cmd=['ffmpeg','-hide_banner','-loglevel','error','-y',
     '-f','rawvideo','-vcodec','rawvideo','-pix_fmt','rgb24','-s',f'{OW}x{OH}',
     '-r',str(FPS),'-i','-', '-an', '-c:v','libx264','-preset','medium',
     '-crf','22','-pix_fmt','yuv420p','-movflags','+faststart',str(out_video)]
proc=subprocess.Popen(cmd,stdin=subprocess.PIPE,stderr=subprocess.PIPE)

# Store a still at the intended camera centre for fallback / poster and reduced motion.
xoff=(W-OW)/2
yoff=(H-OH)/2
still=scene[int(yoff):int(yoff)+OH,int(xoff):int(xoff)+OW]
Image.fromarray(still).save(poster,quality=90,optimize=True,subsampling=0)
for f in range(FRAMES):
    t=f/FPS
    cycle=2*math.pi*f/FRAMES
    # Subtle slow breathing camera motion, smoothly returning to the first frame.
    dx=math.sin(cycle)*40+10*(1-math.cos(cycle))
    dy=math.sin(cycle+0.7)*15-9*math.sin(.5*cycle)**2
    scale=1.024+.016*(1-math.cos(cycle))/2
    # use affine transform to produce smooth stabilized camera movements.
    camera=np.array([[scale,0,-scale*(xoff+dx)+((OW-OW*scale)/2)],
                     [0,scale,-scale*(yoff+dy)+((OH-OH*scale)/2)]],np.float32)
    frame=cv2.warpAffine(scene,camera,(OW,OH),flags=cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT_101)
    # cloud motion in independent direction (wind), subtly looping.
    fogdx=math.sin(cycle+0.9)*64-50*math.sin(cycle*.5)**2
    fogdy=math.sin(cycle+2.3)*16
    fog_camera=np.array([[1,0,-xoff-dx+fogdx],[0,1,-yoff-dy+fogdy]],np.float32)
    a=cv2.warpAffine(fog_lo,fog_camera,(OW,OH),flags=cv2.INTER_LINEAR,borderMode=cv2.BORDER_REFLECT_101)
    a=a[...,None]
    frame=(frame.astype('float32')*(1-a)+np.array([224,229,206],np.float32)*a)
    # Dynamic ambient warmth, faint and non-distracting.
    light=math.sin(cycle-0.35)*.012
    frame=frame*(1+light)
    # Very slight organic film texture (no random high-frequency grain to keep file small).
    frame=np.uint8(np.clip(frame,0,255))
    proc.stdin.write(frame.tobytes())
    if (f+1) % 96 == 0: print(f'Encoded {f+1}/{FRAMES} frames',flush=True)
proc.stdin.close()
err=proc.stderr.read().decode('utf-8','replace')
rc=proc.wait()
if rc: raise RuntimeError(f'ffmpeg failed: {err[-2000:]}')
print('Created',out_video,'size',out_video.stat().st_size)
print('Created',poster,'size',poster.stat().st_size)
