import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, orbitRef, returnToInitialPosition }) => {
  const [decal] = useTexture([imgUrl]);

  useFrame(() => {
    if (orbitRef.current && returnToInitialPosition) {
      const currentRotationY = orbitRef.current.getAzimuthalAngle();
      const targetRotationY = 0;
      const delta = 0.05;

      if (Math.abs(currentRotationY - targetRotationY) > 0.001) {
        const newRotationY =
          currentRotationY + (targetRotationY - currentRotationY) * delta;
        orbitRef.current.setAzimuthalAngle(newRotationY);
        orbitRef.current.update();
      }

      const currentRotationX = orbitRef.current.getPolarAngle();
      const targetRotationX = Math.PI / 2;
      const deltaX = 0.05;

      if (Math.abs(currentRotationX - targetRotationX) > 0.001) {
        const newRotationX =
          currentRotationX + (targetRotationX - currentRotationX) * deltaX;
        orbitRef.current.setPolarAngle(newRotationX);
        orbitRef.current.update();
      }
    }
  });

  return (
    <Float
      speed={3}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[-0.2, 0.2]}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const orbitRef = useRef();
  const timeoutRef = useRef(null);
  const [returnToInitialPosition, setReturnToInitialPosition] = useState(false);

  const handleInteractionStart = () => {
    setReturnToInitialPosition(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    timeoutRef.current = setTimeout(() => {
      setReturnToInitialPosition(true);
    }, 500);
  };

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={orbitRef}
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.1}
          onStart={handleInteractionStart}
          onEnd={handleInteractionEnd}
        />
        <Ball
          imgUrl={icon}
          orbitRef={orbitRef}
          returnToInitialPosition={returnToInitialPosition}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
