import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingCubes from './FloatingCubes';
import ParticleField from './ParticleField';

const Background3D = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          
          {/* 3D Elements */}
          <ParticleField count={1500} />
          <FloatingCubes count={30} />
          
          {/* Environment */}
          <Environment preset="night" />
          
          {/* Controls (very subtle, mainly for drift) */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;