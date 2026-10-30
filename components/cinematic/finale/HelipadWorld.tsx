"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, MeshBasicMaterial, Vector3 } from "three";
import { SkyDome } from "./studio";

const look = new Vector3(0, 1.4, 0);

function landingState(cycle: number) {
  if (cycle < 0.48) {
    const t = cycle / 0.48;
    const eased = t * t * (3 - 2 * t);
    return {
      position: [-11 + eased * 11, 7.4 - eased * 6.58, 6.5 - eased * 6.5] as [number, number, number],
      tilt: 0.16 * (1 - eased),
      rotor: 26,
      downwash: eased > 0.55 ? (eased - 0.55) / 0.45 : 0,
    };
  }
  if (cycle < 0.74) {
    return { position: [0, 0.82, 0] as [number, number, number], tilt: 0, rotor: 22 - ((cycle - 0.48) / 0.26) * 14, downwash: 0.2 };
  }
  const t = (cycle - 0.74) / 0.26;
  const eased = t * t;
  return {
    position: [eased * 9, 0.82 + eased * 6.4, -eased * 5] as [number, number, number],
    tilt: 0.14 * t,
    rotor: 12 + t * 16,
    downwash: t < 0.35 ? 0.35 : 0,
  };
}

export function HelipadWorld({ progress, still }: { progress: number; still: boolean }) {
  const craft = useRef<Group>(null);
  const mainRotor = useRef<Group>(null);
  const tailRotor = useRef<Group>(null);
  const wash = useRef<Group>(null);
  const rotorDisc = useRef<MeshBasicMaterial>(null);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    const cycle = still ? 0.62 : (time % 11) / 11;
    const flight = landingState(cycle);
    if (craft.current) {
      craft.current.position.set(flight.position[0], flight.position[1], flight.position[2]);
      craft.current.rotation.x = flight.tilt * 0.6;
      craft.current.rotation.z = -flight.tilt;
    }
    if (mainRotor.current && !still) mainRotor.current.rotation.y += delta * flight.rotor;
    if (tailRotor.current && !still) tailRotor.current.rotation.x += delta * flight.rotor * 1.6;
    if (rotorDisc.current) rotorDisc.current.opacity = still ? 0.04 : Math.min(0.22, flight.rotor * 0.008);
    if (wash.current) {
      wash.current.visible = flight.downwash > 0.05 && !still;
      wash.current.scale.setScalar(0.6 + flight.downwash * 1.8);
      const material = (wash.current.children[0] as { material?: { opacity?: number } }).material;
      if (material && typeof material.opacity === "number") material.opacity = 0.08 + flight.downwash * 0.12;
    }

    const angle = still ? 0.85 : time * 0.1 + progress * 0.35;
    state.camera.position.set(Math.sin(angle) * 9.4, 3.6, Math.cos(angle) * 9.4);
    state.camera.lookAt(look);
  });

  return (
    <group>
      <SkyDome top="#9ec0dc" horizon="#f2e3c8" />
      <fog attach="fog" args={["#d5e2ea", 18, 40]} />
      <hemisphereLight args={["#e7f2f8", "#6d6458", 0.55]} />
      <ambientLight intensity={0.2} color="#f4f7f8" />
      <directionalLight position={[10, 16, 6]} intensity={1.45} color="#fff4e0" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[26, 48]} />
        <meshStandardMaterial color="#8d947c" roughness={1} />
      </mesh>
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <cylinderGeometry args={[4.3, 4.3, 0.16, 64]} />
        <meshStandardMaterial color="#c5c8c4" roughness={0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.17, 0]}>
        <ringGeometry args={[3.55, 3.85, 64]} />
        <meshBasicMaterial color="#f4f1ea" />
      </mesh>
      <mesh position={[-0.38, 0.18, 0]}>
        <boxGeometry args={[0.22, 0.04, 1.5]} />
        <meshBasicMaterial color="#f7f4ee" />
      </mesh>
      <mesh position={[0.38, 0.18, 0]}>
        <boxGeometry args={[0.22, 0.04, 1.5]} />
        <meshBasicMaterial color="#f7f4ee" />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[1.15, 0.04, 0.22]} />
        <meshBasicMaterial color="#f7f4ee" />
      </mesh>

      {Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 4.05, 0.22, Math.sin(angle) * 4.05]}>
            <boxGeometry args={[0.16, 0.08, 0.16]} />
            <meshStandardMaterial color="#f2d27a" emissive="#ffbf4a" emissiveIntensity={1.4} />
          </mesh>
        );
      })}

      <group ref={wash} position={[0, 0.22, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.2, 2.4, 32]} />
          <meshBasicMaterial color="#f4f7f4" transparent opacity={0.12} depthWrite={false} />
        </mesh>
      </group>

      <group ref={craft} position={[0, 0.82, 0]}>
        <mesh position={[0.28, -0.08, 0]} scale={[1.05, 0.32, 0.5]} castShadow>
          <sphereGeometry args={[0.62, 24, 16]} />
          <meshStandardMaterial color="#2c3034" metalness={0.45} roughness={0.32} />
        </mesh>
        <mesh position={[0.22, 0.04, 0]} scale={[1.12, 0.5, 0.56]} castShadow>
          <sphereGeometry args={[0.62, 28, 20]} />
          <meshPhysicalMaterial color="#f6f3ec" roughness={0.2} metalness={0.28} clearcoat={0.7} clearcoatRoughness={0.16} />
        </mesh>
        <mesh position={[1.02, -0.02, 0]} scale={[0.5, 0.34, 0.4]} castShadow>
          <sphereGeometry args={[0.48, 20, 16]} />
          <meshPhysicalMaterial color="#f6f3ec" roughness={0.2} metalness={0.28} clearcoat={0.65} clearcoatRoughness={0.18} />
        </mesh>
        <mesh position={[0.78, 0.14, 0]} scale={[0.58, 0.34, 0.48]}>
          <sphereGeometry args={[0.46, 22, 16]} />
          <meshPhysicalMaterial color="#102830" roughness={0.04} metalness={0.2} transparent opacity={0.5} />
        </mesh>
        {[-0.15, 0.22, 0.52].map((x) =>
          [0.3, -0.3].map((z) => (
            <mesh key={`${x}-${z}`} position={[x, 0.08, z]} scale={[0.16, 0.11, 0.05]}>
              <sphereGeometry args={[0.55, 12, 10]} />
              <meshPhysicalMaterial color="#102830" roughness={0.05} metalness={0.15} transparent opacity={0.55} />
            </mesh>
          )),
        )}
        {[-0.28, 0.28].map((z) => (
          <mesh key={z} position={[0.35, -0.02, z]}>
            <boxGeometry args={[1.15, 0.02, 0.015]} />
            <meshStandardMaterial color="#c5a059" metalness={0.72} roughness={0.22} />
          </mesh>
        ))}

        <mesh position={[-0.95, 0.06, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.04, 0.12, 1.45, 14]} />
          <meshPhysicalMaterial color="#f4f1ea" roughness={0.28} metalness={0.3} clearcoat={0.4} />
        </mesh>
        <mesh position={[-1.72, 0.28, 0]} rotation={[0, 0, 0.35]} scale={[0.22, 0.55, 0.38]} castShadow>
          <sphereGeometry args={[0.55, 16, 12]} />
          <meshStandardMaterial color="#2c3034" metalness={0.4} roughness={0.35} />
        </mesh>
        <mesh position={[-1.62, 0.12, 0]} castShadow>
          <boxGeometry args={[0.42, 0.025, 0.85]} />
          <meshStandardMaterial color="#2c3034" metalness={0.45} roughness={0.3} />
        </mesh>
        <mesh position={[-1.78, 0.22, 0]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.16, 0.028, 10, 24]} />
          <meshStandardMaterial color="#c5a059" metalness={0.65} roughness={0.28} />
        </mesh>
        <group ref={tailRotor} position={[-1.78, 0.22, 0]}>
          {[0, 1, 2, 3, 4].map((blade) => (
            <mesh key={blade} rotation={[(blade / 5) * Math.PI * 2, 0, 0]}>
              <boxGeometry args={[0.012, 0.26, 0.035]} />
              <meshStandardMaterial color="#1c1f22" metalness={0.4} roughness={0.3} />
            </mesh>
          ))}
        </group>

        <mesh position={[0.55, -0.42, 0]} rotation={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.025, 0.025, 0.42, 8]} />
          <meshStandardMaterial color="#3a3e42" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.15, -0.28, 0.28]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.38, 8]} />
          <meshStandardMaterial color="#3a3e42" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.15, -0.28, -0.28]} rotation={[-0.5, 0, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.38, 8]} />
          <meshStandardMaterial color="#3a3e42" metalness={0.5} roughness={0.3} />
        </mesh>
        {[
          [0.62, -0.58, 0],
          [0.05, -0.55, 0.34],
          [0.05, -0.55, -0.34],
        ].map(([x, y, z]) => (
          <group key={`${x}-${z}`} position={[x, y, z]}>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.075, 0.075, 0.05, 14]} />
              <meshStandardMaterial color="#1a1c1e" roughness={0.55} />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.03, 0.03, 0.06, 10]} />
              <meshStandardMaterial color="#c5a059" metalness={0.7} roughness={0.25} />
            </mesh>
          </group>
        ))}

        <mesh position={[0.15, 0.38, 0]} scale={[0.55, 0.22, 0.38]} castShadow>
          <sphereGeometry args={[0.45, 16, 12]} />
          <meshStandardMaterial color="#2a2e32" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.12, 0.52, 0]}>
          <cylinderGeometry args={[0.045, 0.06, 0.22, 12]} />
          <meshStandardMaterial color="#1e2226" metalness={0.55} roughness={0.28} />
        </mesh>
        <group ref={mainRotor} position={[0.12, 0.66, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.13, 0.07, 16]} />
            <meshStandardMaterial color="#c5a059" metalness={0.7} roughness={0.25} />
          </mesh>
          {Array.from({ length: 5 }, (_, blade) => (
            <mesh key={blade} rotation={[0, (blade / 5) * Math.PI * 2, 0]}>
              <mesh position={[1.15, 0.02, 0]} rotation={[0, 0, 0.06]} castShadow>
                <boxGeometry args={[2.2, 0.012, 0.08]} />
                <meshStandardMaterial color="#1a1e22" metalness={0.35} roughness={0.28} />
              </mesh>
            </mesh>
          ))}
        </group>
        <mesh position={[0.12, 0.64, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[2.15, 40]} />
          <meshBasicMaterial ref={rotorDisc} color="#e7eef2" transparent opacity={0.08} depthWrite={false} />
        </mesh>

        <mesh position={[1.22, 0.02, 0.22]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#39c172" emissive="#39c172" emissiveIntensity={1.4} />
        </mesh>
        <mesh position={[1.22, 0.02, -0.22]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial color="#d24a3a" emissive="#d24a3a" emissiveIntensity={1.4} />
        </mesh>
        <mesh position={[-1.9, 0.42, 0]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color="#f4f4f4" emissive="#ffffff" emissiveIntensity={1.2} />
        </mesh>
      </group>
    </group>
  );
}
