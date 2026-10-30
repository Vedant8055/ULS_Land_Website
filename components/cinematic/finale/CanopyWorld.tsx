"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { Color, DoubleSide, Float32BufferAttribute, Group, InstancedMesh, Object3D, PlaneGeometry } from "three";
import { SkyDome, useStudyCamera } from "./studio";

const POSES = [
  { position: [0.15, 1.35, 7.6] as [number, number, number], target: [0, 3.7, -2.2] as [number, number, number] },
  { position: [0.7, 2.3, 2.6] as [number, number, number], target: [0, 3.3, -7] as [number, number, number] },
  { position: [-0.35, 4.1, -0.8] as [number, number, number], target: [0.15, 2.5, -8] as [number, number, number] },
];

type Spot = { x: number; z: number; h: number; crown: number; hue: number; lean: number };

function seeded(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value % 1000) / 1000;
  };
}

export function CanopyWorld({ progress, still }: { progress: number; still: boolean }) {
  useStudyCamera(progress, still, POSES);
  const trunks = useRef<InstancedMesh>(null);
  const crowns = useRef<InstancedMesh>(null);
  const lobes = useRef<InstancedMesh>(null);
  const shade = useRef<InstancedMesh>(null);
  const shafts = useRef<Group>(null);

  const ground = useMemo(() => {
    const geo = new PlaneGeometry(36, 40, 56, 56);
    geo.rotateX(-Math.PI / 2);
    const position = geo.attributes.position;
    const colors = new Float32Array(position.count * 3);
    const soil = new Color("#1c2a20");
    const pathTone = new Color("#cbb89a");
    const moss = new Color("#314832");
    const tint = new Color();
    for (let i = 0; i < position.count; i += 1) {
      const x = position.getX(i);
      const z = position.getZ(i);
      const height = Math.sin(x * 0.22) * 0.28 + Math.cos(z * 0.18) * 0.34;
      const path = Math.abs(x) < 1.55 && z < 10 && z > -14;
      position.setY(i, path ? 0.03 : Math.max(0.04, height));
      tint.copy(path ? pathTone : soil).lerp(moss, path ? 0.08 : 0.4 + Math.max(0, height) * 0.15);
      colors[i * 3] = tint.r;
      colors[i * 3 + 1] = tint.g;
      colors[i * 3 + 2] = tint.b;
    }
    geo.setAttribute("color", new Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  }, []);

  const trees = useMemo(() => {
    const rand = seeded(41);
    const spots: Spot[] = [];
    for (let i = 0; i < 46; i += 1) {
      const side = i % 2 === 0 ? -1 : 1;
      const x = side * (2.6 + rand() * 9.5);
      const z = 8 - rand() * 22;
      spots.push({
        x,
        z,
        h: 3.6 + rand() * 3.4,
        crown: 1.35 + rand() * 1.15,
        hue: rand(),
        lean: (rand() - 0.5) * 0.5,
      });
    }
    return spots;
  }, []);

  useLayoutEffect(() => {
    const dummy = new Object3D();
    const leaf = new Color();
    const deep = new Color();
    trees.forEach((tree, index) => {
      dummy.position.set(tree.x, tree.h * 0.5, tree.z);
      dummy.scale.set(0.85 + tree.hue * 0.45, tree.h, 0.85 + (1 - tree.hue) * 0.4);
      dummy.rotation.set(0, tree.hue * 3, 0);
      dummy.updateMatrix();
      trunks.current?.setMatrixAt(index, dummy.matrix);

      dummy.position.set(tree.x, tree.h + tree.crown * 0.35, tree.z);
      dummy.scale.set(tree.crown * 1.15, tree.crown * 0.72, tree.crown);
      dummy.rotation.set(0, tree.hue, 0);
      dummy.updateMatrix();
      crowns.current?.setMatrixAt(index, dummy.matrix);

      dummy.position.set(tree.x + tree.lean, tree.h + tree.crown * 0.85, tree.z - 0.35);
      dummy.scale.set(tree.crown * 0.72, tree.crown * 0.48, tree.crown * 0.66);
      dummy.updateMatrix();
      lobes.current?.setMatrixAt(index, dummy.matrix);

      dummy.position.set(tree.x - tree.lean * 0.4, tree.h + tree.crown * 0.05, tree.z + 0.25);
      dummy.scale.set(tree.crown * 0.95, tree.crown * 0.38, tree.crown * 0.85);
      dummy.updateMatrix();
      shade.current?.setMatrixAt(index, dummy.matrix);

      leaf.set("#163222").lerp(new Color("#5d8a48"), tree.hue * 0.85);
      crowns.current?.setColorAt(index, leaf);
      leaf.offsetHSL(0.01, 0.04, 0.06);
      lobes.current?.setColorAt(index, leaf);
      deep.set("#0e2418").lerp(new Color("#243c22"), tree.hue);
      shade.current?.setColorAt(index, deep);
    });
    [trunks, crowns, lobes, shade].forEach((ref) => {
      if (!ref.current) return;
      ref.current.instanceMatrix.needsUpdate = true;
      if (ref.current.instanceColor) ref.current.instanceColor.needsUpdate = true;
    });
  }, [trees]);

  useFrame(({ clock }) => {
    if (!shafts.current || still) return;
    shafts.current.children.forEach((child, index) => {
      const material = (child as { material?: { opacity?: number } }).material;
      if (material && typeof material.opacity === "number") {
        material.opacity = 0.13 + Math.sin(clock.elapsedTime * 0.45 + index * 0.7) * 0.035;
      }
    });
  });

  return (
    <group>
      <SkyDome top="#7f98b8" horizon="#f3d7a2" />
      <fog attach="fog" args={["#c9ad82", 9, 26]} />
      <hemisphereLight args={["#f8e6c4", "#142018", 0.32]} />
      <ambientLight intensity={0.06} color="#f4e4c4" />
      <directionalLight
        position={[14, 20, 6]}
        intensity={2.15}
        color="#ffd59a"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={46}
        shadow-camera-left={-18}
        shadow-camera-right={18}
        shadow-camera-top={18}
        shadow-camera-bottom={-18}
      />

      <mesh geometry={ground} receiveShadow>
        <meshStandardMaterial vertexColors roughness={0.92} />
      </mesh>

      <instancedMesh ref={trunks} args={[undefined, undefined, trees.length]} castShadow>
        <cylinderGeometry args={[0.16, 0.28, 1, 8]} />
        <meshStandardMaterial color="#3a291e" roughness={0.94} />
      </instancedMesh>
      <instancedMesh ref={crowns} args={[undefined, undefined, trees.length]} castShadow>
        <sphereGeometry args={[1, 12, 10]} />
        <meshStandardMaterial roughness={0.78} />
      </instancedMesh>
      <instancedMesh ref={lobes} args={[undefined, undefined, trees.length]} castShadow>
        <sphereGeometry args={[1, 10, 8]} />
        <meshStandardMaterial roughness={0.76} />
      </instancedMesh>
      <instancedMesh ref={shade} args={[undefined, undefined, trees.length]}>
        <sphereGeometry args={[1, 10, 8]} />
        <meshStandardMaterial roughness={0.9} />
      </instancedMesh>

      {Array.from({ length: 18 }, (_, index) => {
        const z = 6.4 - index * 1.15;
        const x = Math.sin(index * 0.7) * 0.22;
        const wide = index % 3 === 0;
        return (
          <mesh key={index} position={[x, 0.07, z]} receiveShadow>
            <boxGeometry args={[wide ? 1.35 : 0.95, 0.07, wide ? 0.72 : 0.48]} />
            <meshStandardMaterial color={index % 2 ? "#e4d8c4" : "#c9b79a"} roughness={0.55} />
          </mesh>
        );
      })}

      <group position={[0, 0, 2.15]}>
        <mesh position={[-1.55, 0.22, 0]}>
          <boxGeometry args={[0.7, 0.36, 0.7]} />
          <meshStandardMaterial color="#b7a88e" roughness={0.58} />
        </mesh>
        <mesh position={[1.55, 0.22, 0]}>
          <boxGeometry args={[0.7, 0.36, 0.7]} />
          <meshStandardMaterial color="#b7a88e" roughness={0.58} />
        </mesh>
        <mesh position={[-1.55, 2.15, 0]} castShadow>
          <boxGeometry args={[0.32, 3.5, 0.32]} />
          <meshStandardMaterial color="#4e3424" roughness={0.8} />
        </mesh>
        <mesh position={[1.55, 2.15, 0]} castShadow>
          <boxGeometry args={[0.32, 3.5, 0.32]} />
          <meshStandardMaterial color="#4e3424" roughness={0.8} />
        </mesh>
        <mesh position={[0, 3.85, 0]} castShadow>
          <boxGeometry args={[4.15, 0.28, 0.48]} />
          <meshStandardMaterial color="#3d2a1e" roughness={0.72} />
        </mesh>
        <mesh position={[0, 4.08, 0]}>
          <boxGeometry args={[3.7, 0.07, 0.18]} />
          <meshStandardMaterial color="#c5a059" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 3.55, 0]}>
          <boxGeometry args={[3.4, 0.1, 0.22]} />
          <meshStandardMaterial color="#5c4030" roughness={0.75} />
        </mesh>
      </group>

      {Array.from({ length: 4 }, (_, index) => {
        const z = 0.4 - index * 2.4;
        return (
          <group key={index} position={[0, 0, z]}>
            <mesh position={[-1.45, 2.3, 0]} castShadow>
              <boxGeometry args={[0.16, 4.2, 0.16]} />
              <meshStandardMaterial color="#4a3326" roughness={0.82} />
            </mesh>
            <mesh position={[1.45, 2.3, 0]} castShadow>
              <boxGeometry args={[0.16, 4.2, 0.16]} />
              <meshStandardMaterial color="#4a3326" roughness={0.82} />
            </mesh>
            <mesh position={[0, 4.35, 0]} castShadow>
              <boxGeometry args={[3.15, 0.1, 0.16]} />
              <meshStandardMaterial color="#3d2a1e" roughness={0.74} />
            </mesh>
          </group>
        );
      })}
      <mesh position={[0, 4.42, -2.2]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.12, 9.6, 0.1]} />
        <meshStandardMaterial color="#3d2a1e" roughness={0.74} />
      </mesh>

      <group ref={shafts}>
        {[
          [0.2, 7.2, 1.2, 0.22],
          [-1.4, 7.6, -1.6, -0.08],
          [1.8, 7.1, -3.4, 0.16],
          [-0.3, 7.8, -5.5, 0.05],
          [2.4, 6.8, 3.2, 0.28],
        ].map(([x, y, z, tilt], index) => (
          <mesh key={index} position={[x, y, z]} rotation={[tilt, 0.15, 0.08]}>
            <coneGeometry args={[1.15, 12, 12, 1, true]} />
            <meshBasicMaterial color="#ffe7b8" transparent opacity={0.14} depthWrite={false} side={DoubleSide} />
          </mesh>
        ))}
      </group>

      {still ? null : (
        <Sparkles count={48} scale={[8, 4, 18]} position={[0, 2.4, -2]} size={2} speed={0.22} color="#f8e7c4" opacity={0.45} />
      )}
    </group>
  );
}
