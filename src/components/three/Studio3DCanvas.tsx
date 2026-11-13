"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingStudioPrism() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
          emissive="#367BFF"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Studio3DCanvas() {
  return (
    <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-[#090812] to-[#111326]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          color="#F13DBB"
        />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#35C8F5" />
        <FloatingStudioPrism />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
