import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, MeshWobbleMaterial } from '@react-three/drei';

function FloatingIsland({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[1, 1.2, 0.5, 6]} />
      <MeshWobbleMaterial color="#4CAF50" factor={0.4} speed={2} />
    </mesh>
  );
}

function Ocean() {
  const oceanRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    oceanRef.current.position.y = Math.sin(t / 2) * 0.05;
  });

  return (
    <mesh ref={oceanRef} position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 32, 32]} />
      <MeshWobbleMaterial color="#2196F3" factor={0.1} speed={1} />
    </mesh>
  );
}

function Cloud({ position }) {
  const cloudRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    cloudRef.current.position.x = position[0] + Math.sin(t + position[1]) * 0.5;
  });

  return (
    <group ref={cloudRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh position={[-0.3, 0, 0]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}


function TravelScene() {
  return (
    <div style={{ width: '99vw', height: '100vh', position:'sticky', top: 0, left: 0 }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Ocean />
        <FloatingIsland position={[-1.5, 0, 0]} rotation={[0, Math.PI / 6, 0]} />
        <FloatingIsland position={[1.5, 0.5, -1]} rotation={[0, -Math.PI / 4, 0]} />
        <Cloud position={[-2, 2, 0]} />
        <Cloud position={[2, 2.5, -1]} />
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.5}
          color="#FF9800"
          anchorX="center"
          anchorY="middle"
        >
          Adventure Awaits
        </Text>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default TravelScene;
