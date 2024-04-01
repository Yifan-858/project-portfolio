import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";

const SkillBalls = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={0.1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export const SkillBallsCanvas = ({ icon }) => {
  return (
    <div className="skill-balls">
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        <OrbitControls enableZoom={false} />
        <SkillBalls imgUrl={icon} />
      </Canvas>
    </div>
  );
};
