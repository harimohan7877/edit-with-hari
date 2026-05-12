"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text3D, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

interface FloatingTextProps {
  text: string;
  position?: [number, number, number];
}

export default function FloatingText({ text, position = [0, 0, 0] }: FloatingTextProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Center position={position}>
      <group ref={meshRef}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
        >
          {text}
          <meshStandardMaterial color="#00F5FF" metalness={0.8} roughness={0.2} />
        </Text3D>
      </group>
    </Center>
  );
}