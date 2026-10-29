"use client";

export type VillaFinish = "basalt" | "terracotta" | "timber" | "lime";
export type VillaLight = "dawn" | "noon" | "dusk";
export type VillaLandscape = "native" | "court" | "roof";

const walls: Record<VillaFinish, string> = {
  basalt: "#3f3a35",
  terracotta: "#a35a38",
  timber: "#8a6238",
  lime: "#e4dccb",
};

const roofs: Record<VillaFinish, string> = {
  basalt: "#2b2723",
  terracotta: "#8a4b32",
  timber: "#5c3d24",
  lime: "#9a8d78",
};

export function VillaWorld({
  finish,
  landscape,
  roofLift,
}: {
  finish: VillaFinish;
  landscape: VillaLandscape;
  roofLift: number;
}) {
  const wall = walls[finish];
  const roof = roofs[finish];
  const lift = roofLift * 1.35;

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <circleGeometry args={[12, 40]} />
        <meshStandardMaterial color="#6f7a5c" roughness={1} />
      </mesh>

      <mesh position={[0, 0.04, 0.15]} receiveShadow>
        <boxGeometry args={[3.4, 0.08, 3.6]} />
        <meshStandardMaterial color={landscape === "court" ? "#6d7a48" : "#5d6848"} roughness={1} />
      </mesh>
      <mesh position={[0, 0.08, 0.1]} receiveShadow>
        <cylinderGeometry args={[0.85, 0.85, 0.06, 24]} />
        <meshStandardMaterial color="#4f5d3d" />
      </mesh>
      {landscape !== "roof" ? (
        <mesh position={[0.15, 0.55, 0.05]} castShadow>
          <icosahedronGeometry args={[0.38, 0]} />
          <meshStandardMaterial color="#3d5342" roughness={0.9} />
        </mesh>
      ) : null}

      <mesh position={[0, 0.7, -1.15]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.4, 0.42]} />
        <meshStandardMaterial color={wall} roughness={0.86} />
      </mesh>
      <mesh position={[-1.4, 0.7, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 1.4, 2.6]} />
        <meshStandardMaterial color={wall} roughness={0.86} />
      </mesh>
      <mesh position={[1.4, 0.7, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[0.42, 1.4, 2.6]} />
        <meshStandardMaterial color={wall} roughness={0.86} />
      </mesh>
      <mesh position={[0, 0.55, 1.45]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 1.1, 0.28]} />
        <meshStandardMaterial color={wall} roughness={0.82} />
      </mesh>

      <mesh position={[0, 0.85, -1.15]} castShadow>
        <boxGeometry args={[1.1, 0.7, 0.06]} />
        <meshStandardMaterial color="#1c2420" roughness={0.3} metalness={0.15} transparent opacity={0.55} />
      </mesh>

      <mesh position={[0, 1.55 + lift, 0]} castShadow>
        <boxGeometry args={[3.8, 0.12, 3.5]} />
        <meshStandardMaterial color={roof} roughness={0.78} transparent opacity={0.35 + (1 - roofLift) * 0.65} />
      </mesh>
      <mesh position={[-0.1, 1.48 + lift, -0.1]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.4, 0.04, 1.1]} />
        <meshStandardMaterial color="#243038" roughness={0.25} metalness={0.4} />
      </mesh>
      {landscape === "roof" ? (
        <mesh position={[0.9, 1.66 + lift, 0.6]}>
          <boxGeometry args={[0.8, 0.08, 0.8]} />
          <meshStandardMaterial color="#5b6844" />
        </mesh>
      ) : null}

      <mesh position={[0, 0.72, 0.2]}>
        <boxGeometry args={[0.04, 1.1, 1.8]} />
        <meshStandardMaterial color="#c5a059" transparent opacity={0.18} />
      </mesh>

      {[
        [-2.6, -1.4],
        [2.8, -1.1],
        [-2.2, 1.8],
        [2.4, 1.6],
      ].map(([x, z], i) => (
        <group key={i} position={[x, 0.1, z]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.06, 0.08, 0.7, 6]} />
            <meshStandardMaterial color="#4a3728" />
          </mesh>
          <mesh position={[0, 0.65, 0]} castShadow>
            <icosahedronGeometry args={[0.45, 0]} />
            <meshStandardMaterial color="#3d5342" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
