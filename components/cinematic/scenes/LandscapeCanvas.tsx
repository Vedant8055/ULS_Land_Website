"use client";

import { Canvas } from "@react-three/fiber";
import type { CameraState, LightState } from "@/data/scrollStory";
import { CameraRig, Daylight } from "./CameraRig";
import { LandscapeWorld } from "./LandscapeWorld";

export function LandscapeCanvas({
  camera,
  light,
  override,
  system,
}: {
  camera: CameraState;
  light: LightState;
  override: CameraState | null;
  system?: "overview" | "energy" | "water" | "waste" | "food" | "nature";
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      camera={{ fov: 36, near: 0.15, far: 80, position: camera.position }}
      shadows
      onCreated={({ gl }) => {
        gl.setClearColor("#c5cebf", 1);
      }}
    >
      <Daylight light={light} energy={system === "energy"} />
      <LandscapeWorld beat={system} />
      <CameraRig camera={camera} override={override} />
    </Canvas>
  );
}
