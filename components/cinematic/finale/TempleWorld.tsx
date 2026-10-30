"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide, Group } from "three";
import { SkyDome, useStudyCamera } from "./studio";

const POSES = [
  { position: [0.4, 6.6, 20.5] as [number, number, number], target: [0, 5.6, -1.2] as [number, number, number] },
  { position: [8.2, 5.8, 15.5] as [number, number, number], target: [0, 6.4, -1.4] as [number, number, number] },
  { position: [1.4, 3.4, 11.2] as [number, number, number], target: [0, 3.6, 0.2] as [number, number, number] },
];

function Marble({ color = "#f4f0e8", rough = 0.32 }: { color?: string; rough?: number }) {
  return <meshPhysicalMaterial color={color} roughness={rough} metalness={0.02} clearcoat={0.45} clearcoatRoughness={0.35} />;
}

function Sandstone() {
  return <meshStandardMaterial color="#c48978" roughness={0.72} />;
}

function Gold() {
  return <meshStandardMaterial color="#c6a15b" metalness={0.72} roughness={0.28} />;
}

function Shikhara({
  base,
  height,
  position,
}: {
  base: number;
  height: number;
  position: [number, number, number];
}) {
  const courses = 16;
  return (
    <group position={position}>
      {Array.from({ length: courses }, (_, index) => {
        const t = index / courses;
        const curve = Math.pow(1 - t, 1.28);
        const radius = base * (0.16 + curve * 0.84);
        const course = height / courses;
        const y = t * height + course * 0.5;
        return (
          <group key={index} position={[0, y, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[radius * 0.94, radius, course * 0.82, 20]} />
              <Marble />
            </mesh>
            <mesh position={[0, course * 0.42, 0]}>
              <cylinderGeometry args={[radius * 1.06, radius * 1.06, 0.045, 20]} />
              <Marble color="#ebe4d8" rough={0.4} />
            </mesh>
          </group>
        );
      })}
      <mesh position={[0, height + 0.08, 0]} castShadow>
        <cylinderGeometry args={[base * 0.28, base * 0.34, 0.16, 20]} />
        <Marble color="#e7dfd2" />
      </mesh>
      <mesh position={[0, height + 0.28, 0]} castShadow>
        <sphereGeometry args={[base * 0.16, 18, 14]} />
        <Gold />
      </mesh>
      <mesh position={[0, height + 0.5, 0]} castShadow>
        <sphereGeometry args={[base * 0.1, 16, 12]} />
        <Gold />
      </mesh>
      <mesh position={[0, height + 0.7, 0]} castShadow>
        <coneGeometry args={[base * 0.05, 0.28, 12]} />
        <Gold />
      </mesh>
    </group>
  );
}

function Arch({ span, rise }: { span: number; rise: number }) {
  return (
    <group>
      <mesh position={[-span / 2, rise * 0.46, 0]} castShadow>
        <boxGeometry args={[0.16, rise, 0.28]} />
        <Marble />
      </mesh>
      <mesh position={[span / 2, rise * 0.46, 0]} castShadow>
        <boxGeometry args={[0.16, rise, 0.28]} />
        <Marble />
      </mesh>
      <mesh position={[0, rise, 0]} rotation={[0, 0, Math.PI]} castShadow>
        <torusGeometry args={[span / 2, 0.075, 10, 24, Math.PI]} />
        <Marble />
      </mesh>
      <mesh position={[0, rise * 0.46, -0.08]}>
        <planeGeometry args={[span * 0.86, rise * 0.92]} />
        <meshStandardMaterial color="#241910" roughness={0.9} />
      </mesh>
    </group>
  );
}

function Pillar({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.08, 0]} castShadow>
        <boxGeometry args={[0.32, 0.12, 0.32]} />
        <Sandstone />
      </mesh>
      <mesh position={[0, 1.25, 0]} castShadow>
        <cylinderGeometry args={[0.075, 0.095, 2.15, 14]} />
        <Marble />
      </mesh>
      <mesh position={[0, 2.38, 0]} castShadow>
        <boxGeometry args={[0.28, 0.1, 0.28]} />
        <Gold />
      </mesh>
    </group>
  );
}

export function TempleWorld({ progress, still }: { progress: number; still: boolean }) {
  useStudyCamera(progress, still, POSES);
  const flag = useRef<Group>(null);
  const lamps = useRef<Group>(null);

  useFrame(({ clock }) => {
    const time = clock.elapsedTime;
    if (flag.current && !still) flag.current.rotation.y = Math.sin(time * 0.9) * 0.22;
    if (!lamps.current || still) return;
    lamps.current.children.forEach((child, index) => {
      const light = child.children.find((node) => node.type === "PointLight") as { intensity: number } | undefined;
      if (light) light.intensity = 0.35 + Math.sin(time * 2.2 + index) * 0.08;
    });
  });

  const frontPillars: Array<[number, number, number]> = [
    [-2.7, 1.15, 3.15],
    [-0.9, 1.15, 3.15],
    [0.9, 1.15, 3.15],
    [2.7, 1.15, 3.15],
    [-2.7, 1.15, 1.85],
    [-0.9, 1.15, 1.85],
    [0.9, 1.15, 1.85],
    [2.7, 1.15, 1.85],
  ];

  return (
    <group>
      <SkyDome top="#c5d4e6" horizon="#f7f2e8" />
      <fog attach="fog" args={["#f3efe6", 24, 52]} />
      <hemisphereLight args={["#f4f7fb", "#c4a090", 0.55]} />
      <ambientLight intensity={0.22} color="#fff8ee" />
      <directionalLight
        position={[6, 22, 16]}
        intensity={1.85}
        color="#fff3e2"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
      />
      <directionalLight position={[-10, 8, 6]} intensity={0.35} color="#d9e4f2" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[30, 64]} />
        <meshStandardMaterial color="#e6dfd4" roughness={0.92} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 5.2]}>
        <ringGeometry args={[2.4, 2.7, 48]} />
        <meshStandardMaterial color="#c9b7a4" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.55, -0.5]} receiveShadow castShadow>
        <boxGeometry args={[12.4, 1.1, 9.2]} />
        <Sandstone />
      </mesh>
      <mesh position={[0, 1.12, -0.5]}>
        <boxGeometry args={[12.6, 0.08, 9.4]} />
        <meshStandardMaterial color="#f7f3ec" roughness={0.45} />
      </mesh>

      {Array.from({ length: 8 }, (_, index) => (
        <mesh key={index} position={[0, 0.08 + index * 0.13, 5.15 - index * 0.38]} receiveShadow castShadow>
          <boxGeometry args={[9.4 - index * 0.18, 0.13, 0.46]} />
          <meshStandardMaterial color={index % 2 ? "#f3ece3" : "#e7d5cc"} roughness={0.62} />
        </mesh>
      ))}

      <mesh position={[0, 2.35, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[7.4, 2.35, 3.3]} />
        <Marble />
      </mesh>
      <mesh position={[0, 3.62, 0.85]} castShadow>
        <boxGeometry args={[8.2, 0.2, 5.6]} />
        <Marble color="#efe8dc" />
      </mesh>
      <mesh position={[0, 3.48, 3.55]}>
        <boxGeometry args={[6.6, 0.08, 0.12]} />
        <Gold />
      </mesh>

      {frontPillars.map((position) => (
        <Pillar key={position.join("-")} position={position} />
      ))}

      <group position={[-1.7, 1.15, 1.52]}>
        <Arch span={0.95} rise={1.7} />
      </group>
      <group position={[0, 1.15, 1.52]}>
        <Arch span={1.25} rise={2.05} />
      </group>
      <group position={[1.7, 1.15, 1.52]}>
        <Arch span={0.95} rise={1.7} />
      </group>
      <pointLight position={[0, 2.1, 1.6]} color="#ffc98a" intensity={0.9} distance={6} decay={2} />

      <mesh position={[0, 2.7, -2.15]} castShadow receiveShadow>
        <boxGeometry args={[4.4, 3.1, 3.5]} />
        <Marble />
      </mesh>
      <Shikhara base={1.85} height={7.4} position={[0, 4.3, -2.15]} />

      {[-3.35, 3.35].map((x) => (
        <group key={x}>
          <mesh position={[x, 2.15, -1.7]} castShadow>
            <boxGeometry args={[2.15, 2.05, 2.2]} />
            <Marble />
          </mesh>
          <Shikhara base={0.82} height={3.6} position={[x, 3.25, -1.7]} />
        </group>
      ))}

      {[-4.55, 4.55].map((x) => (
        <group key={x} position={[x, 1.15, 1.15]}>
          <mesh position={[-0.45, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.07, 1.4, 10]} />
            <Marble />
          </mesh>
          <mesh position={[0.45, 0.7, 0]} castShadow>
            <cylinderGeometry args={[0.06, 0.07, 1.4, 10]} />
            <Marble />
          </mesh>
          <mesh position={[0, 1.55, 0]} castShadow scale={[1, 0.72, 1]}>
            <sphereGeometry args={[0.62, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <Marble />
          </mesh>
          <mesh position={[0, 2.05, 0]}>
            <sphereGeometry args={[0.08, 12, 10]} />
            <Gold />
          </mesh>
        </group>
      ))}

      <group ref={flag} position={[0, 12.55, -2.15]}>
        <mesh>
          <cylinderGeometry args={[0.015, 0.015, 0.7, 6]} />
          <meshStandardMaterial color="#8d7344" metalness={0.4} roughness={0.4} />
        </mesh>
        <mesh position={[0.28, 0.22, 0]}>
          <planeGeometry args={[0.55, 0.32]} />
          <meshStandardMaterial color="#e06a22" side={DoubleSide} />
        </mesh>
      </group>

      <group ref={lamps}>
        {[-3.6, -2.4, -1.2, 1.2, 2.4, 3.6].map((x) => (
          <group key={x} position={[x, 1.22, 3.55]}>
            <mesh>
              <cylinderGeometry args={[0.07, 0.09, 0.06, 12]} />
              <meshStandardMaterial color="#b8893e" emissive="#ff9d45" emissiveIntensity={0.45} metalness={0.5} roughness={0.35} />
            </mesh>
            <pointLight color="#ffb15a" intensity={0.35} distance={1.8} decay={2} />
          </group>
        ))}
      </group>
    </group>
  );
}
