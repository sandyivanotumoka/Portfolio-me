import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Cube() {
  return (
    <Float speed={2} rotationIntensity={1.4} floatIntensity={1.6}>
      <mesh>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.6} />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-[260px] sm:h-[320px] md:h-[420px] relative">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />

        <Cube />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
