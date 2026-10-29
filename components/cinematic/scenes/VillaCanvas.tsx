"use client";

import { Canvas } from "@react-three/fiber";
import type { CameraState, LightState } from "@/data/scrollStory";
import { CameraRig, Daylight } from "./CameraRig";
import { VillaWorld, type VillaFinish, type VillaLandscape } from "./VillaWorld";

export function VillaCanvas({
  camera,
  light,
  finish,
  landscape,
  roofLift,
}: {
  camera: CameraState;
  light: LightState;
  finish: VillaFinish;
  landscape: VillaLandscape;
  roofLift: number;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      camera={{ fov: 32, near: 0.15, far: 50, position: camera.position }}
      shadows
      onCreated={({ gl }) => {
        gl.setClearColor("#d5d2c6", 1);
      }}
    >
      <Daylight light={light} />
      <VillaWorld finish={finish} landscape={landscape} roofLift={roofLift} />
      <CameraRig camera={camera} override={null} />
    </Canvas>
  );
}
