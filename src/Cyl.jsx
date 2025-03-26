/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

const Cyl = () => {
  let tex = useTexture("./SiyaRam1.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, 60, true]} transparent />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent />
        <EffectComposer>
          <Bloom
            intensity={5.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            mipmapBlur
          />
        </EffectComposer>
      </mesh>
    </group>
  );
};

export default Cyl;
