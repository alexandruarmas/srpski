import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function PlaceholderBurger() {
  const modelRef = useRef<THREE.Group>(null);
  
  // Add subtle rotation animation
  useFrame(({ clock }) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  
  return (
    <group ref={modelRef}>
      {/* Bottom bun */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.5, 32]} />
        <meshStandardMaterial color="#F4A460" />
      </mesh>
      
      {/* Patty */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.8, 1.8, 0.5, 32]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Cheese */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[1.9, 1.9, 0.1, 32]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      
      {/* Lettuce */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.9, 1.9, 0.2, 32]} />
        <meshStandardMaterial color="#00FF00" />
      </mesh>
      
      {/* Top bun */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[2.2, 1.8, 1, 32]} />
        <meshStandardMaterial color="#F4A460" />
      </mesh>
      
      {/* Sesame seeds */}
      <group position={[0, 1.5, 0]}>
        <mesh position={[0.8, 0, 0.6]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
        <mesh position={[-0.7, 0, 0.7]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
        <mesh position={[0.3, 0, 0.9]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
        <mesh position={[-0.3, 0, -0.9]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
        <mesh position={[0.9, 0, -0.4]}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#FFF8DC" />
        </mesh>
      </group>
    </group>
  );
}

function BurgerModelScene() {
  const { camera } = useThree();
  
  useEffect(() => {
    // Position camera to properly view the model
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  return <PlaceholderBurger />;
}

export default function BurgerModel() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle mounting to prevent hydration errors with Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className="h-[600px] w-full flex items-center justify-center">Loading 3D Model...</div>;
  }
  
  return (
    <div className="h-[600px] w-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <BurgerModelScene />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          rotateSpeed={0.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

// Don't preload the model - let the component handle loading
// useGLTF.preload('/models/burger.glb'); 