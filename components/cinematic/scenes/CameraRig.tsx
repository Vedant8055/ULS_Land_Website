"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Vector3, type DirectionalLight } from "three";
import type { CameraState, LightState } from "@/data/scrollStory";

const pos = new Vector3();
const look = new Vector3();
const goalPos = new Vector3();
const goalLook = new Vector3();

export function CameraRig({
  camera,
  override,
}: {
  camera: CameraState;
  override: CameraState | null;
}) {
  const goal = override ?? camera;

  useFrame((state, delta) => {
    const t = 1 - Math.exp(-3.4 * delta);
    goalPos.set(...goal.position);
    goalLook.set(...goal.target);
    pos.copy(state.camera.position).lerp(goalPos, t);
    look.lerp(goalLook, t);
    state.camera.position.copy(pos);
    state.camera.lookAt(look);
    const perspective = state.camera as PerspectiveCamera;
    perspective.fov += (goal.fov - perspective.fov) * t;
    perspective.updateProjectionMatrix();
  });

  return null;
}

export function Daylight({ light, energy = false }: { light: LightState; energy?: boolean }) {
  const dir = useRef<DirectionalLight>(null);
  useFrame(() => {
    const phi = (1 - light.sunElevation) * Math.PI * 0.42;
    const theta = light.sunAzimuth * Math.PI * 1.35;
    const r = 22;
    const x = Math.sin(theta) * Math.cos(phi) * r;
    const y = Math.max(2.4, Math.sin(phi) * r);
    const z = Math.cos(theta) * Math.cos(phi) * r;
    dir.current?.position.set(x, y, z);
  });

  const sunColor = energy ? "#f3d7a0" : `rgb(${220 + light.warmth * 30}, ${200 + light.warmth * 20}, ${170})`;

  return (
    <>
      <hemisphereLight args={["#d9e4d6", "#3d312a", 0.55 + (1 - light.overcast) * 0.25]} />
      <ambientLight intensity={0.18 + light.overcast * 0.2} color="#e8e2d4" />
      <directionalLight
        ref={dir}
        intensity={light.intensity * (1.05 - light.overcast * 0.55)}
        color={sunColor}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={40}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
      />
      <fog attach="fog" args={["#c9d2c4", 16 + light.overcast * 6, 46]} />
    </>
  );
}
