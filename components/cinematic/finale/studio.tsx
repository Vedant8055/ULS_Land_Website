"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BackSide,
  Color,
  Float32BufferAttribute,
  ShaderMaterial,
  SphereGeometry,
  Vector3,
} from "three";
import { clamp01, lerpTuple } from "@/lib/story-progress";

const poolVert = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    float w = sin(p.x * 3.1 + uTime * 1.35) * 0.04 + cos(p.y * 2.5 - uTime) * 0.03;
    p.z += w;
    vWave = w;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const poolFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSheen;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vec2 c = vUv - 0.5;
    float r = length(c);
    float rings = sin(r * 78.0 - uTime * 2.1) * 0.5 + 0.5;
    float crest = sin(c.x * 46.0 + uTime * 1.6) * sin(c.y * 40.0 - uTime * 1.3);
    float sheen = smoothstep(0.5, 0.05, r) * (0.18 + rings * 0.22 + crest * 0.08);
    vec3 col = mix(uDeep, uSheen, clamp(sheen + vWave * 3.5, 0.0, 1.0));
    float alpha = smoothstep(0.52, 0.4, r);
    gl_FragColor = vec4(col, 0.92 * alpha);
  }
`;

export function LivingPool({
  radius,
  height,
  deep,
  sheen,
  still,
}: {
  radius: number;
  height: number;
  deep: string;
  sheen: string;
  still: boolean;
}) {
  const ref = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDeep: { value: new Color(deep) },
      uSheen: { value: new Color(sheen) },
    }),
    [deep, sheen],
  );

  useFrame(({ clock }) => {
    if (!ref.current || still) return;
    ref.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, height, 0]}>
      <circleGeometry args={[radius, 96]} />
      <shaderMaterial ref={ref} uniforms={uniforms} vertexShader={poolVert} fragmentShader={poolFrag} transparent />
    </mesh>
  );
}

export function SkyDome({ top, horizon }: { top: string; horizon: string }) {
  const geometry = useMemo(() => {
    const geo = new SphereGeometry(48, 36, 28);
    const position = geo.attributes.position;
    const colors = new Float32Array(position.count * 3);
    const cool = new Color(horizon);
    const high = new Color(top);
    const mix = new Color();
    for (let i = 0; i < position.count; i += 1) {
      const y = position.getY(i) / 48;
      mix.copy(cool).lerp(high, Math.min(1, Math.max(0, (y + 0.2) / 1.05)));
      colors[i * 3] = mix.r;
      colors[i * 3 + 1] = mix.g;
      colors[i * 3 + 2] = mix.b;
    }
    geo.setAttribute("color", new Float32BufferAttribute(colors, 3));
    return geo;
  }, [horizon, top]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial vertexColors side={BackSide} depthWrite={false} />
    </mesh>
  );
}

type Pose = { position: [number, number, number]; target: [number, number, number] };

export function useStudyCamera(progress: number, still: boolean, poses: Pose[]) {
  const look = useRef(new Vector3(...poses[0].target));
  const goal = useRef(new Vector3(...poses[0].position));
  const focus = useRef(new Vector3());

  useFrame((state, delta) => {
    const drift = still ? 0 : Math.sin(state.clock.elapsedTime * 0.16) * 0.07;
    const span = Math.max(1, poses.length - 1);
    const t = clamp01((still ? 0.38 : progress) + drift) * span;
    const index = Math.min(poses.length - 2, Math.max(0, Math.floor(t)));
    const blend = t - index;
    const from = poses[index];
    const to = poses[Math.min(poses.length - 1, index + 1)];
    const position = lerpTuple(from.position, to.position, blend);
    const target = lerpTuple(from.target, to.target, blend);
    const ease = 1 - Math.exp(-2.6 * delta);
    goal.current.set(position[0], position[1], position[2]);
    focus.current.set(target[0], target[1], target[2]);
    state.camera.position.lerp(goal.current, ease);
    look.current.lerp(focus.current, ease);
    state.camera.lookAt(look.current);
  });
}
