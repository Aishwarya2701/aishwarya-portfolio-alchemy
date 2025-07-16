import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingCubesProps {
  count?: number;
}

const FloatingCubes = ({ count = 50 }: FloatingCubesProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  const tempObject = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 100,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: Math.random() * 0.5 + 0.5,
        rotationSpeed: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
        ],
      });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      const { position, rotation, scale, rotationSpeed } = particle;
      
      // Update rotation
      rotation[0] += rotationSpeed[0];
      rotation[1] += rotationSpeed[1];
      rotation[2] += rotationSpeed[2];
      
      // Create floating motion
      const time = state.clock.getElapsedTime();
      const floatY = Math.sin(time + i * 0.1) * 2;
      
      tempObject.position.set(position[0], position[1] + floatY, position[2]);
      tempObject.rotation.set(rotation[0], rotation[1], rotation[2]);
      tempObject.scale.setScalar(scale);
      tempObject.updateMatrix();
      
      meshRef.current!.setMatrixAt(i, tempObject.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        transparent
        opacity={0.6}
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </instancedMesh>
  );
};

export default FloatingCubes;