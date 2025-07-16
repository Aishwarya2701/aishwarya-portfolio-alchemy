import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

const ParticleField = ({ count = 2000 }: ParticleFieldProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      
      // Colors (purple to blue gradient)
      const t = Math.random();
      colors[i * 3] = 0.5 + t * 0.5; // R
      colors[i * 3 + 1] = 0.3 + t * 0.4; // G
      colors[i * 3 + 2] = 1; // B
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.x = time * 0.05;
    pointsRef.current.rotation.y = time * 0.075;
  });

  return (
    <Points ref={pointsRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        size={2}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default ParticleField;