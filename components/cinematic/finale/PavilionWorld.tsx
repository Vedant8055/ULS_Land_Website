"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Group } from "three";
import { LivingPool, SkyDome, useStudyCamera } from "./studio";

const POSES = [
  { position: [13.5, 6.8, 14.5] as [number, number, number], target: [0, 1.6, 0] as [number, number, number] },
  { position: [7.4, 4.1, 8.6] as [number, number, number], target: [0, 1.8, 0] as [number, number, number] },
  { position: [2.8, 2.5, 5.6] as [number, number, number], target: [0, 1.5, 0] as [number, number, number] },
];

const COUNT = 8;

function Pier({ position, yaw }: { position: [number, number, number]; yaw: number }) {
  return (
    <group position={position} rotation={[0, yaw, 0]}>
      <mesh position={[0, 0.22, 0]} castShadow>
        <boxGeometry args={[0.62, 0.36, 0.62]} />
        <meshStandardMaterial color="#c5a059" metalness={0.55} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.95, 0]} castShadow>
        <boxGeometry args={[0.36, 3.05, 0.36]} />
        <meshPhysicalMaterial color="#f6efe4" roughness={0.34} clearcoat={0.32} clearcoatRoughness={0.28} />
      </mesh>
      <mesh position={[0, 3.28, 0.18]} castShadow>
        <boxGeometry args={[0.18, 0.22, 0.42]} />
        <meshStandardMaterial color="#f3ebdf" roughness={0.4} />
      </mesh>
      <mesh position={[0, 3.58, 0]} castShadow>
        <boxGeometry args={[0.58, 0.16, 0.58]} />
        <meshStandardMaterial color="#c5a059" metalness={0.68} roughness={0.24} />
      </mesh>
    </group>
  );
}

function Lantern() {
  return (
    <group>
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 0.85, 6]} />
        <meshStandardMaterial color="#8a7048" metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.13, 16, 12]} />
        <meshStandardMaterial color="#ffe6c2" emissive="#ff8a2a" emissiveIntensity={2.4} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.16, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.025, 12]} />
        <meshStandardMaterial color="#c5a059" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0, -0.16, 0]}>
        <cylinderGeometry args={[0.16, 0.14, 0.025, 12]} />
        <meshStandardMaterial color="#c5a059" metalness={0.7} roughness={0.25} />
      </mesh>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <mesh key={index} position={[Math.cos((index / 6) * Math.PI * 2) * 0.145, 0, Math.sin((index / 6) * Math.PI * 2) * 0.145]}>
          <boxGeometry args={[0.015, 0.32, 0.015]} />
          <meshStandardMaterial color="#e8c98a" metalness={0.75} roughness={0.22} />
        </mesh>
      ))}
      <pointLight color="#ffb15a" intensity={2.4} distance={5.5} decay={2} />
    </group>
  );
}

export function PavilionWorld({ progress, still }: { progress: number; still: boolean }) {
  useStudyCamera(progress, still, POSES);
  const lanterns = useRef<Group>(null);
  const angles = Array.from({ length: COUNT }, (_, index) => (index / COUNT) * Math.PI * 2 - Math.PI / 2);

  useFrame(({ clock }) => {
    if (!lanterns.current || still) return;
    const time = clock.elapsedTime;
    lanterns.current.children.forEach((child, index) => {
      child.rotation.z = Math.sin(time * 0.65 + index * 0.8) * 0.04;
    });
  });

  return (
    <group>
      <SkyDome top="#10141c" horizon="#d26432" />
      <fog attach="fog" args={["#1a1410", 12, 32]} />
      <hemisphereLight args={["#e7a06a", "#100c0a", 0.2]} />
      <ambientLight intensity={0.04} color="#241810" />
      <directionalLight position={[-12, 14, -8]} intensity={0.85} color="#c5d4e4" />
      <mesh position={[-6.5, 9.5, -14]}>
        <sphereGeometry args={[0.55, 20, 16]} />
        <meshBasicMaterial color="#f4e6c8" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[24, 48]} />
        <meshStandardMaterial color="#14110e" roughness={1} />
      </mesh>
      <mesh position={[0, 0.18, 0]} receiveShadow>
        <cylinderGeometry args={[7.2, 7.45, 0.32, 8]} />
        <meshStandardMaterial color="#3a322b" roughness={0.62} />
      </mesh>
      <mesh position={[0, 0.38, 0]} receiveShadow>
        <cylinderGeometry args={[5.6, 5.6, 0.08, 8]} />
        <meshPhysicalMaterial color="#2a241e" roughness={0.28} metalness={0.14} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, 0.46, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[4.15, 4.28, 48]} />
        <meshStandardMaterial color="#c5a059" metalness={0.6} roughness={0.32} />
      </mesh>

      {Array.from({ length: 4 }, (_, index) => (
        <mesh key={index} position={[0, 0.08 + index * 0.08, 6.1 - index * 0.55]} receiveShadow>
          <boxGeometry args={[3.4 - index * 0.15, 0.08, 0.62]} />
          <meshStandardMaterial color={index % 2 ? "#4a4036" : "#3a322b"} roughness={0.6} />
        </mesh>
      ))}

      <LivingPool radius={2.15} height={0.42} deep="#061016" sheen="#f0d2a4" still={still} />

      {angles.map((angle) => (
        <Pier
          key={angle}
          yaw={-angle}
          position={[Math.cos(angle) * 4.15, 0, Math.sin(angle) * 4.15]}
        />
      ))}

      <mesh position={[0, 3.72, 0]} castShadow>
        <cylinderGeometry args={[4.55, 4.7, 0.2, 8]} />
        <meshStandardMaterial color="#2a221c" roughness={0.5} />
      </mesh>
      <mesh position={[0, 3.86, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.35, 0.05, 8, 48]} />
        <meshStandardMaterial color="#c5a059" metalness={0.65} roughness={0.26} />
      </mesh>
      <mesh position={[0, 4.15, 0]} scale={[1, 0.52, 1]} castShadow>
        <sphereGeometry args={[3.55, 32, 18, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#3d322a" roughness={0.46} metalness={0.06} />
      </mesh>
      {angles.map((angle) => (
        <mesh key={`rib-${angle}`} position={[Math.cos(angle) * 1.15, 4.85, Math.sin(angle) * 1.15]} rotation={[0.55, -angle, 0]}>
          <boxGeometry args={[0.045, 2.3, 0.045]} />
          <meshStandardMaterial color="#c5a059" metalness={0.55} roughness={0.32} />
        </mesh>
      ))}
      <mesh position={[0, 6.05, 0]}>
        <sphereGeometry args={[0.16, 16, 12]} />
        <meshStandardMaterial color="#e8c98a" metalness={0.75} roughness={0.2} />
      </mesh>
      <mesh position={[0, 6.28, 0]}>
        <sphereGeometry args={[0.1, 14, 12]} />
        <meshStandardMaterial color="#e8c98a" metalness={0.75} roughness={0.2} />
      </mesh>
      <mesh position={[0, 6.52, 0]}>
        <coneGeometry args={[0.045, 0.32, 10]} />
        <meshStandardMaterial color="#e8c98a" metalness={0.7} roughness={0.22} />
      </mesh>

      <group ref={lanterns}>
        {angles.filter((_, index) => index % 2 === 0).map((angle) => (
          <group key={angle} position={[Math.cos(angle) * 2.35, 2.85, Math.sin(angle) * 2.35]}>
            <Lantern />
          </group>
        ))}
      </group>

      {still ? null : (
        <Sparkles count={40} scale={[10, 3.2, 10]} position={[0, 1.6, 0]} size={2.4} speed={0.18} color="#f6d7a2" opacity={0.7} />
      )}
    </group>
  );
}
