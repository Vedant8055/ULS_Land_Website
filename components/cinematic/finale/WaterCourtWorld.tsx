"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedMesh, Object3D } from "three";
import { LivingPool, SkyDome, useStudyCamera } from "./studio";

const POSES = [
  { position: [12.5, 13.5, 14.5] as [number, number, number], target: [0, -3.6, 0] as [number, number, number] },
  { position: [7.5, 7.2, 9] as [number, number, number], target: [0, -1.6, 0] as [number, number, number] },
  { position: [3.2, 4.2, 5.4] as [number, number, number], target: [0, -0.8, 0] as [number, number, number] },
];

const RAIN = 520;
const PIERS = 16;
const COURSES = 7;

function Pier({ position, yaw }: { position: [number, number, number]; yaw: number }) {
  return (
    <group position={position} rotation={[0, yaw, 0]}>
      <mesh position={[0, 1.28, 0]} castShadow>
        <boxGeometry args={[0.52, 0.22, 0.52]} />
        <meshStandardMaterial color="#b7a58c" roughness={0.7} />
      </mesh>
      <mesh position={[0, 2.72, 0]} castShadow>
        <boxGeometry args={[0.32, 2.65, 0.32]} />
        <meshPhysicalMaterial color="#f4ecdf" roughness={0.36} clearcoat={0.28} clearcoatRoughness={0.32} />
      </mesh>
      <mesh position={[0, 3.72, 0.16]} castShadow>
        <boxGeometry args={[0.16, 0.16, 0.34]} />
        <meshStandardMaterial color="#efe6d6" roughness={0.45} />
      </mesh>
      <mesh position={[0, 4.12, 0]} castShadow>
        <boxGeometry args={[0.5, 0.14, 0.5]} />
        <meshStandardMaterial color="#c5a059" metalness={0.68} roughness={0.24} />
      </mesh>
      <mesh position={[0, 4.28, 0]}>
        <boxGeometry args={[0.62, 0.08, 0.62]} />
        <meshStandardMaterial color="#efe6d6" roughness={0.4} />
      </mesh>
    </group>
  );
}

function Flight({ yaw }: { yaw: number }) {
  return (
    <group rotation={[0, yaw, 0]}>
      {Array.from({ length: 8 }, (_, index) => (
        <mesh key={index} position={[0, 1.02 - index * 0.3, 5.55 - index * 0.58]} castShadow receiveShadow>
          <boxGeometry args={[1.85, 0.16, 0.7]} />
          <meshPhysicalMaterial
            color={index > 4 ? "#6f675e" : index % 2 ? "#e6d9c4" : "#d4c3a8"}
            roughness={index > 4 ? 0.28 : 0.52}
            clearcoat={index > 4 ? 0.4 : 0.08}
            clearcoatRoughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export function WaterCourtWorld({ progress, still }: { progress: number; still: boolean }) {
  useStudyCamera(progress, still, POSES);
  const rain = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const drops = useMemo(() => {
    const data = new Float32Array(RAIN * 3);
    for (let i = 0; i < RAIN; i += 1) {
      data[i * 3] = (Math.random() - 0.5) * 16;
      data[i * 3 + 1] = Math.random() * 11;
      data[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return data;
  }, []);

  useFrame(({ clock }) => {
    const mesh = rain.current;
    if (!mesh || still) return;
    const time = clock.elapsedTime;
    for (let i = 0; i < RAIN; i += 1) {
      const y = ((drops[i * 3 + 1] - time * 5.4) % 11 + 11) % 11;
      dummy.position.set(drops[i * 3], y, drops[i * 3 + 2]);
      dummy.rotation.set(0.12, 0, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  const pierAngles = Array.from({ length: PIERS }, (_, index) => (index / PIERS) * Math.PI * 2);

  return (
    <group>
      <SkyDome top="#8ea4ae" horizon="#e4d3b8" />
      <fog attach="fog" args={["#c9d2cc", 16, 40]} />
      <hemisphereLight args={["#e7f0ea", "#4a4034", 0.42]} />
      <ambientLight intensity={0.12} color="#eef3ef" />
      <directionalLight
        position={[8, 16, 6]}
        intensity={1.25}
        color="#f6f1e6"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={40}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={14}
        shadow-camera-bottom={-14}
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.35, 0]} receiveShadow>
        <circleGeometry args={[30, 64]} />
        <meshStandardMaterial color="#5e675c" roughness={1} />
      </mesh>
      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2 + Math.PI / 8;
        return (
          <mesh key={`plinth-${angle}`} position={[Math.cos(angle) * 12.15, -0.55, Math.sin(angle) * 12.15]} rotation={[0, Math.PI / 2 - angle, 0]}>
            <boxGeometry args={[9.5, 3.5, 0.55]} />
            <meshStandardMaterial color="#c4b08e" roughness={0.76} />
          </mesh>
        );
      })}
      <mesh position={[0, 1.18, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 8]} receiveShadow>
        <ringGeometry args={[7.05, 12.35, 8]} />
        <meshStandardMaterial color="#e4d5bb" roughness={0.58} side={2} />
      </mesh>

      {Array.from({ length: COURSES }, (_, index) => {
        const radius = 6.5 - index * 0.66;
        const next = index === COURSES - 1 ? 1.7 : 6.5 - (index + 1) * 0.66;
        const y = 0.92 - index * 0.42;
        const wet = index > 3;
        const color = ["#efe4d2", "#e2d3bb", "#cbbba0", "#8f8174", "#5c554e", "#3a342f", "#1c1916"][index];
        return (
          <group key={index}>
            <mesh position={[0, y, 0]} receiveShadow castShadow>
              <cylinderGeometry args={[radius, radius, 0.4, 8, 1, true]} />
              <meshPhysicalMaterial
                color={color}
                roughness={wet ? 0.22 : 0.5}
                metalness={wet ? 0.08 : 0.02}
                clearcoat={wet ? 0.55 : 0.06}
                clearcoatRoughness={0.2}
                side={2}
              />
            </mesh>
            <mesh position={[0, y + 0.2, 0]} rotation={[-Math.PI / 2, 0, Math.PI / 8]} receiveShadow>
              <ringGeometry args={[next, radius - 0.02, 8]} />
              <meshPhysicalMaterial
                color={color}
                roughness={wet ? 0.18 : 0.48}
                clearcoat={wet ? 0.7 : 0.12}
                clearcoatRoughness={0.16}
                side={2}
              />
            </mesh>
          </group>
        );
      })}

      {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((yaw) => (
        <Flight key={yaw} yaw={yaw} />
      ))}

      <LivingPool radius={2.05} height={-1.55} deep="#04141a" sheen="#d5efe6" still={still} />

      {[
        [-0.42, 0.28],
        [0.55, -0.18],
        [0.05, 0.62],
        [-0.7, -0.35],
      ].map(([x, z], index) => (
        <mesh key={index} position={[x, -1.48, z]} rotation={[-Math.PI / 2, 0, index]}>
          <circleGeometry args={[0.22 + (index % 3) * 0.05, 14]} />
          <meshStandardMaterial color="#163c2c" roughness={0.55} />
        </mesh>
      ))}

      {pierAngles.map((angle, index) => (
        <Pier
          key={angle}
          yaw={-angle}
          position={[Math.cos(angle) * 9.35, 0, Math.sin(angle) * 9.35]}
        />
      ))}
      <mesh position={[0, 4.36, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9.35, 0.07, 10, 80]} />
        <meshStandardMaterial color="#4a3828" roughness={0.55} />
      </mesh>
      <mesh position={[0, 4.48, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[9.35, 0.035, 8, 80]} />
        <meshStandardMaterial color="#c5a059" metalness={0.62} roughness={0.28} />
      </mesh>

      <mesh position={[0, 1.28, 7.6]} receiveShadow>
        <boxGeometry args={[2.4, 0.1, 3.4]} />
        <meshPhysicalMaterial color="#ddd2c0" roughness={0.32} clearcoat={0.22} />
      </mesh>

      {[
        [-16, 0.55, -12, 9, 1.8, 6],
        [15, 0.35, -11, 8, 1.4, 5],
      ].map(([x, y, z, sx, sy, sz], index) => (
        <mesh key={index} position={[x, y, z]} scale={[sx, sy, sz]}>
          <sphereGeometry args={[1, 20, 14]} />
          <meshStandardMaterial color="#7a8776" roughness={1} />
        </mesh>
      ))}

      {still ? null : (
        <instancedMesh ref={rain} args={[undefined, undefined, RAIN]}>
          <boxGeometry args={[0.012, 0.72, 0.012]} />
          <meshBasicMaterial color="#f4f8f8" transparent opacity={0.45} />
        </instancedMesh>
      )}
    </group>
  );
}
