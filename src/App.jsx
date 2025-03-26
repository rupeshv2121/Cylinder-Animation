import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cyl from "./Cyl";
import "./style.css";
function App() {
  return (
    <>
      <Canvas flat camera={{ fov: 30 }}>
        <OrbitControls />
        <ambientLight />
        <Cyl />
      </Canvas>
    </>
  );
}

export default App;
