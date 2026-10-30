"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, ShaderMaterial } from "three";
import { SkyDome, useStudyCamera } from "./studio";

const POSES = [
  { position: [0.2, 6.4, 19.2] as [number, number, number], target: [0, 3.15, 0] as [number, number, number] },
  { position: [8.4, 5.1, 14.2] as [number, number, number], target: [0, 3, 0.2] as [number, number, number] },
  { position: [0.3, 2.9, 11.4] as [number, number, number], target: [0, 2.6, 1.2] as [number, number, number] },
];

const waterVert = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    vUv = uv;
    vec3 p = position;
    float w = sin(p.x * 1.8 + uTime) * 0.025 + cos(p.y * 2.4 - uTime * 0.8) * 0.02;
    p.z += w;
    vWave = w;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const waterFrag = /* glsl */ `
  uniform float uTime;
  uniform vec3 uDeep;
  uniform vec3 uSheen;
  varying vec2 vUv;
  varying float vWave;
  void main() {
    float rings = sin(vUv.x * 26.0 + uTime) * sin(vUv.y * 16.0 - uTime);
    vec3 col = mix(uDeep, uSheen, 0.16 + rings * 0.07 + vWave * 2.0);
    gl_FragColor = vec4(col, 0.92);
  }
`;

function Stone({ color = "#f4eee4" }: { color?: string }) {
  return <meshPhysicalMaterial color={color} roughness={0.42} metalness={0.03} clearcoat={0.28} clearcoatRoughness={0.4} />;
}

function RoofTile() {
  return <meshStandardMaterial color="#7d4336" roughness={0.78} />;
}

function Glass() {
  return (
    <meshPhysicalMaterial
      color="#24343a"
      roughness={0.08}
      metalness={0.18}
      transparent
      opacity={0.7}
      emissive="#c98448"
      emissiveIntensity={0.18}
    />
  );
}

function HipRoof({
  width,
  depth,
  rise,
  position,
}: {
  width: number;
  depth: number;
  rise: number;
  position: [number, number, number];
}) {
  return (
    <mesh position={[position[0], position[1] + rise / 2, position[2]]} rotation={[0, Math.PI / 4, 0]} scale={[width / Math.SQRT2, rise, depth / Math.SQRT2]} castShadow>
      <coneGeometry args={[1, 1, 4]} />
      <RoofTile />
    </mesh>
  );
}

function GardenTree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.14, 0.22, 3.4, 8]} />
        <meshStandardMaterial color="#4a3428" roughness={0.92} />
      </mesh>
      <mesh position={[0, 3.7, 0]} castShadow>
        <sphereGeometry args={[1.45, 18, 14]} />
        <meshStandardMaterial color="#2c5538" roughness={0.86} />
      </mesh>
      <mesh position={[0.85, 4.15, 0.35]} castShadow>
        <sphereGeometry args={[0.95, 16, 12]} />
        <meshStandardMaterial color="#3c6a46" roughness={0.84} />
      </mesh>
      <mesh position={[-0.75, 3.95, -0.25]} castShadow>
        <sphereGeometry args={[0.85, 16, 12]} />
        <meshStandardMaterial color="#234833" roughness={0.88} />
      </mesh>
    </group>
  );
}

function Palm({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 2.4, 0]} castShadow>
        <cylinderGeometry args={[0.09, 0.14, 4.8, 8]} />
        <meshStandardMaterial color="#5c4030" roughness={0.9} />
      </mesh>
      {Array.from({ length: 8 }, (_, leaf) => (
        <mesh key={leaf} position={[0, 4.9, 0]} rotation={[1.2, (leaf / 8) * Math.PI * 2, 0]} castShadow>
          <coneGeometry args={[0.14, 1.9, 5]} />
          <meshStandardMaterial color="#2a5a3c" roughness={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function TallWindow({ position, width, height }: { position: [number, number, number]; width: number; height: number }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[width, height, 0.06]} />
        <Glass />
      </mesh>
      <mesh position={[0, 0, 0.045]}>
        <boxGeometry args={[0.035, height, 0.04]} />
        <meshStandardMaterial color="#5c4a32" metalness={0.45} roughness={0.35} />
      </mesh>
    </group>
  );
}

function ArchDoor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[-0.42, 0.7, 0]}>
        <boxGeometry args={[0.1, 1.4, 0.12]} />
        <meshStandardMaterial color="#5c4a32" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0.42, 0.7, 0]}>
        <boxGeometry args={[0.1, 1.4, 0.12]} />
        <meshStandardMaterial color="#5c4a32" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, 1.4, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.42, 0.05, 8, 18, Math.PI]} />
        <meshStandardMaterial color="#5c4a32" metalness={0.4} roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.75, -0.02]}>
        <planeGeometry args={[0.72, 1.5]} />
        <Glass />
      </mesh>
    </group>
  );
}

function Column({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.1, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.22, 0.16, 12]} />
        <Stone color="#cbbba6" />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.14, 2.7, 14]} />
        <Stone />
      </mesh>
      <mesh position={[0, 2.95, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.16, 0.14, 12]} />
        <meshStandardMaterial color="#c6a15b" metalness={0.55} roughness={0.32} />
      </mesh>
    </group>
  );
}

export function LuxuryVillaWorld({ progress, still }: { progress: number; still: boolean }) {
  useStudyCamera(progress, still, POSES);
  const water = useRef<ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uDeep: { value: new Color("#0c3038") },
      uSheen: { value: new Color("#d7efe8") },
    }),
    [],
  );

  useFrame(({ clock }) => {
    if (!water.current || still) return;
    water.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <group>
      <SkyDome top="#b7cbe2" horizon="#f6e4c8" />
      <fog attach="fog" args={["#f3eadc", 26, 52]} />
      <hemisphereLight args={["#f7f1e6", "#6d7a58", 0.55]} />
      <ambientLight intensity={0.22} color="#fff8ee" />
      <directionalLight
        position={[8, 18, 12]}
        intensity={1.7}
        color="#fff0d4"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={48}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={18}
        shadow-camera-bottom={-18}
      />
      <pointLight position={[0, 2.4, 3.2]} color="#ffc48a" intensity={0.7} distance={8} decay={2} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[32, 64]} />
        <meshStandardMaterial color="#6f7d5e" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 1]} receiveShadow>
        <circleGeometry args={[14, 48]} />
        <meshStandardMaterial color="#e4dccb" roughness={0.78} />
      </mesh>

      <mesh position={[0, 0.22, 0.2]} receiveShadow>
        <boxGeometry args={[16.5, 0.4, 9]} />
        <Stone color="#cfc3b0" />
      </mesh>

      <mesh position={[0, 2.55, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[5.6, 4.3, 5.1]} />
        <Stone />
      </mesh>
      {[-5.15, 5.15].map((x) => (
        <mesh key={x} position={[x, 2.05, -0.15]} castShadow receiveShadow>
          <boxGeometry args={[4.3, 3.3, 4.4]} />
          <Stone color="#f7f1e6" />
        </mesh>
      ))}

      <HipRoof width={6.5} depth={5.9} rise={1.7} position={[0, 4.7, -0.2]} />
      <HipRoof width={4.9} depth={5} rise={1.15} position={[-5.15, 3.7, -0.15]} />
      <HipRoof width={4.9} depth={5} rise={1.15} position={[5.15, 3.7, -0.15]} />

      {[-1.15, 1.15].map((x) => (
        <Column key={x} position={[x, 0.42, 3.15]} />
      ))}
      <mesh position={[0, 3.5, 3.15]} castShadow>
        <boxGeometry args={[3.3, 0.16, 0.7]} />
        <Stone color="#e7dccb" />
      </mesh>
      <HipRoof width={3.5} depth={1.3} rise={0.7} position={[0, 3.58, 3.15]} />

      <ArchDoor position={[0, 0.5, 2.4]} />
      {[-1.55, 1.55].map((x) => (
        <TallWindow key={`c-${x}`} position={[x, 1.55, 2.38]} width={0.7} height={1.7} />
      ))}
      {[-1.35, 0, 1.35].map((x) => (
        <TallWindow key={`u-${x}`} position={[x, 3.55, 2.38]} width={0.85} height={1.45} />
      ))}
      <mesh position={[0, 2.75, 2.55]} receiveShadow>
        <boxGeometry args={[3.6, 0.08, 0.7]} />
        <Stone color="#e7dccb" />
      </mesh>

      {[-5.15, 5.15].map((x) => (
        <group key={x}>
          <TallWindow position={[x - 0.7, 1.45, 2.08]} width={0.75} height={1.55} />
          <TallWindow position={[x + 0.7, 1.45, 2.08]} width={0.75} height={1.55} />
          <TallWindow position={[x - 0.55, 3.05, 2.08]} width={0.85} height={1.15} />
          <TallWindow position={[x + 0.55, 3.05, 2.08]} width={0.85} height={1.15} />
        </group>
      ))}

      {Array.from({ length: 4 }, (_, step) => (
        <mesh key={step} position={[0, 0.28 + step * 0.08, 4.15 - step * 0.28]} receiveShadow>
          <boxGeometry args={[2.6, 0.08, 0.4]} />
          <Stone color="#e8dfd0" />
        </mesh>
      ))}

      <mesh position={[0, 0.08, 6.3]} receiveShadow>
        <boxGeometry args={[6.4, 0.1, 2.2]} />
        <Stone color="#b7aa96" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.16, 6.3]}>
        <planeGeometry args={[5.6, 1.6, 20, 8]} />
        <shaderMaterial ref={water} uniforms={uniforms} vertexShader={waterVert} fragmentShader={waterFrag} transparent />
      </mesh>

      <GardenTree position={[-9.1, 0, 1.2]} scale={1.15} />
      <GardenTree position={[-8.2, 0, -2.4]} scale={0.85} />
      <Palm position={[-10.2, 0, 3.6]} />
      <GardenTree position={[9.1, 0, 1.2]} scale={1.15} />
      <GardenTree position={[8.2, 0, -2.4]} scale={0.85} />
      <Palm position={[10.2, 0, 3.6]} />
    </group>
  );
}
