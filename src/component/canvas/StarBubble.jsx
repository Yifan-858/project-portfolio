import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const StarBubble = () => {
  const starBubble = useLoader(GLTFLoader, "/StarBubble.gltf");
  return (
    <>
      <pointLight intensity={20} color="red" />
      <pointLight intensity={50} position={[5, 5, 5]} color="#0093fd" />
      <rectAreaLight
        intensity={10}
        color="#ff4949"
        width={20}
        height={30}
        position={[10, 5, 0]}
      />
      <rectAreaLight
        intensity={15}
        color="#0093fd"
        width={20}
        height={30}
        position={[0, 0, 10]}
      />
      <primitive object={starBubble.scene} scale={6} />
    </>
  );
};

export const StarBubbleCanvas = () => {
  return (
    <div className="star-bubble">
      <Canvas
        camera={{ fov: 3, near: 0.1, far: 1000, position: [100, 200, 300] }}
      >
        <Suspense fallback={null}>
          <StarBubble />
          <OrbitControls
            autoRotate
            autoRotateSpeed={1}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
