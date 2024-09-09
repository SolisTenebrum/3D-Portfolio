import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile, orbitRef, returnToInitialPosition }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useFrame(() => {
    if (orbitRef.current && returnToInitialPosition) {
      const currentRotationY = orbitRef.current.getAzimuthalAngle();
      const targetRotationY = 1.35;
      const delta = 0.05;

      if (Math.abs(currentRotationY - targetRotationY) > 0.001) {
        const newRotationY =
          currentRotationY + (targetRotationY - currentRotationY) * delta;
        orbitRef.current.setAzimuthalAngle(newRotationY);
        orbitRef.current.update();
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={3} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.008, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [returnToInitialPosition, setReturnToInitialPosition] = useState(false);
  const orbitRef = useRef();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleInteractionStart = () => {
    setReturnToInitialPosition(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleInteractionEnd = () => {
    timeoutRef.current = setTimeout(() => {
      setReturnToInitialPosition(true);
    }, 1000);
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="scrollCanvas"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={orbitRef}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.1}
          onStart={handleInteractionStart}
          onEnd={handleInteractionEnd}
        />
        <Computers
          isMobile={isMobile}
          orbitRef={orbitRef}
          returnToInitialPosition={returnToInitialPosition}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
