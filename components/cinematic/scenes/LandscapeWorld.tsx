"use client";

import { useMemo } from "react";
import { CatmullRomCurve3, Vector3 } from "three";
import type { ScrollBeat } from "@/data/scrollStory";

function Hill({
  position,
  scale,
  color,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <sphereGeometry args={[1, 24, 16]} />
      <meshStandardMaterial color={color} roughness={0.92} metalness={0.02} />
    </mesh>
  );
}

function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.07, 0.7, 6]} />
        <meshStandardMaterial color="#4a3728" roughness={1} />
      </mesh>
      <mesh position={[0, 0.85, 0]} castShadow>
        <icosahedronGeometry args={[0.42, 0]} />
        <meshStandardMaterial color="#3d5342" roughness={0.88} />
      </mesh>
      <mesh position={[0.12, 1.05, -0.08]} castShadow>
        <icosahedronGeometry args={[0.28, 0]} />
        <meshStandardMaterial color="#506851" roughness={0.9} />
      </mesh>
    </group>
  );
}

function House({
  position,
  rotation = 0,
  solar = false,
  glow = false,
}: {
  position: [number, number, number];
  rotation?: number;
  solar?: boolean;
  glow?: boolean;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.28, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 0.48, 0.72]} />
        <meshStandardMaterial color="#8d8374" roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.62, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[0.72, 0.32, 4]} />
        <meshStandardMaterial color="#6b5344" roughness={0.8} />
      </mesh>
      {solar ? (
        <mesh position={[0.12, 0.7, 0.05]} rotation={[-0.55, 0.2, 0]}>
          <boxGeometry args={[0.42, 0.02, 0.28]} />
          <meshStandardMaterial
            color="#1c2830"
            roughness={0.25}
            metalness={0.45}
            emissive={glow ? "#c5a059" : "#000000"}
            emissiveIntensity={glow ? 0.55 : 0}
          />
        </mesh>
      ) : null}
      <mesh position={[0.35, 0.02, 0.42]} receiveShadow>
        <boxGeometry args={[0.55, 0.04, 0.4]} />
        <meshStandardMaterial color="#6f7d5a" roughness={1} />
      </mesh>
    </group>
  );
}

export function LandscapeWorld({ beat }: { beat?: ScrollBeat["system"] }) {
  const trees = useMemo(() => {
    const spots: Array<[number, number, number, number]> = [];
    let seed = 17;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed % 1000) / 1000;
    };
    for (let i = 0; i < 46; i += 1) {
      const x = -8 + rand() * 7.2;
      const z = -7 + rand() * 9;
      if (Math.hypot(x - 2, z - 1) < 1.6) continue;
      spots.push([x, 0.15 + rand() * 0.2, z, 0.7 + rand() * 0.7]);
    }
    return spots;
  }, []);

  const water = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(-6.4, 0.08, -4.2),
        new Vector3(-2.8, 0.06, -1.1),
        new Vector3(0.2, 0.05, 1.4),
        new Vector3(2.6, 0.05, 3.8),
        new Vector3(5.4, 0.04, 5.2),
      ]),
    [],
  );

  const rain = beat === "water";
  const glow = beat === "energy";
  const soil = beat === "waste";
  const food = beat === "food";
  const forest = beat === "nature";

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[22, 48]} />
        <meshStandardMaterial color="#7d8a68" roughness={1} />
      </mesh>
      <Hill position={[-6.5, -0.4, -5.2]} scale={[6.2, 2.4, 5.1]} color="#66745a" />
      <Hill position={[7.2, -0.6, -3.4]} scale={[5.4, 2.1, 4.6]} color="#5d6b52" />
      <Hill position={[-1.2, -1.1, -8.4]} scale={[9, 3.2, 6]} color="#4f5d46" />
      <Hill position={[4.8, -0.2, 7.6]} scale={[4.2, 1.4, 3.6]} color="#73815f" />

      <mesh position={[0.2, 0.07, 2.1]} receiveShadow>
        <boxGeometry args={[1.1, 0.05, 10]} />
        <meshStandardMaterial color="#cfc6b2" roughness={0.95} />
      </mesh>
      <mesh position={[2.4, 0.07, 1.2]} rotation={[0, 0.6, 0]} receiveShadow>
        <boxGeometry args={[0.7, 0.04, 5.4]} />
        <meshStandardMaterial color="#d4cbb6" roughness={0.95} />
      </mesh>

      <mesh>
        <tubeGeometry args={[water, 48, rain ? 0.18 : 0.12, 8, false]} />
        <meshStandardMaterial
          color={rain ? "#6d8ea3" : "#7f9aa8"}
          roughness={0.28}
          metalness={0.12}
          transparent
          opacity={0.86}
        />
      </mesh>

      {trees.map((item, index) => (
        <Tree key={index} position={[item[0], item[1], item[2]]} scale={item[3] * (forest ? 1.12 : 1)} />
      ))}

      <House position={[2.1, 0.16, 1.05]} rotation={-0.4} solar glow={glow} />
      <House position={[3.4, 0.16, 2.35]} rotation={0.2} solar glow={glow} />
      <House position={[1.15, 0.16, 2.5]} rotation={0.55} />
      <House position={[4.2, 0.14, 0.35]} rotation={-0.15} solar glow={glow} />

      <mesh position={[-1.35, food ? 0.18 : 0.12, 2.15]} receiveShadow>
        <boxGeometry args={[1.6, 0.08, 1.1]} />
        <meshStandardMaterial color={food ? "#6d7a3f" : "#5f6b48"} roughness={1} />
      </mesh>
      {food
        ? [0, 1, 2].map((row) => (
            <mesh key={row} position={[-1.7 + row * 0.35, 0.24, 2.15]}>
              <boxGeometry args={[0.22, 0.16, 0.7]} />
              <meshStandardMaterial color="#7f8f4c" />
            </mesh>
          ))
        : null}

      {soil ? (
        <group position={[1.35, 0.2, 0.55]}>
          <mesh>
            <boxGeometry args={[0.55, 0.28, 0.4]} />
            <meshStandardMaterial color="#c8b89a" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.42, 0.12, 0.28]} />
            <meshStandardMaterial color="#5b4636" />
          </mesh>
        </group>
      ) : null}

      {rain
        ? Array.from({ length: 28 }, (_, i) => (
            <mesh key={i} position={[-4 + (i % 7) * 1.2, 3.2 - (i % 5) * 0.45, -2 + Math.floor(i / 7) * 1.6]}>
              <boxGeometry args={[0.015, 0.38, 0.015]} />
              <meshBasicMaterial color="#c5d4dc" transparent opacity={0.45} />
            </mesh>
          ))
        : null}
    </group>
  );
}
