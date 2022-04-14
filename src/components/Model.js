import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Scene = ({
  model,
  acceleration = 0.0002,
  maxSpeed = 0.005,
  friction = 0.0001,
  rotation = false,
}) => {
  const meshRef = useRef();

  const { scene } = useGLTF(model);

  var velocity = acceleration ? 0 : maxSpeed;

  useFrame((state, delta) => {
    velocity += acceleration - friction;
    velocity > maxSpeed && (velocity = maxSpeed);
    velocity <= 0 && (velocity = 0);
    rotation && (meshRef.current.rotation.y += velocity);
  });

  return (
    <>
      <OrbitControls enablePan={false} enableZoom={true} />
      <ambientLight color="#555" />
      <mesh ref={meshRef}>
        <pointLight
          position={[10, 5, 20]}
          intensity={0.5}
          distance={100}
          decay={2}
        />
        <primitive object={scene} />
      </mesh>
    </>
  );
};

const Model = ({ style, camera, model, rotation = false }) => {
  const [acceleration, setAcceleration] = useState(0.0002);
  return (
    <div
      className="user-select-none grab"
      style={style}
      onMouseEnter={(e) => {
        setAcceleration(0);
      }}
      onMouseLeave={(e) => {
        setAcceleration(0.0002);
      }}
    >
      <Canvas camera={camera}>
        <Suspense fallback={null}>
          <Scene
            model={model}
            acceleration={acceleration}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Model;
