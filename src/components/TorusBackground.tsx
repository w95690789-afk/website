"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function Torus() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh}>
        <torusGeometry args={[8, 2.5, 32, 100]} />
        <MeshDistortMaterial
          color="#2DD4BF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function TorusBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-clinical-white pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }} gl={{ antialias: true }} dpr={[1, 2]}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0F766E" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#2DD4BF" />
        <Torus />
      </Canvas>
    </div>
  );
}
