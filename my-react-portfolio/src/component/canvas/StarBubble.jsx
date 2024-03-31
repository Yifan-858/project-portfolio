import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const StarBubble = () => {
  const starBubble = useLoader(
    GLTFLoader,
    "../../../public/3d-models/StarBubble.gltf"
  );
  return (
    <>
      <primitive object={starBubble.scene} scale={5} />
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
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
