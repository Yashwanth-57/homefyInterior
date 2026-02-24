import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function HotspotModel({ label }) {
  const gltf = useGLTF("/models/sampleitem.glb"); // Replace with real hotspot models
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function RoomModal({ hotspotDetail, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="bg-black w-full max-w-3xl h-[70vh] rounded-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-20"
        >
          ✕
        </button>

        <div className="absolute top-4 left-4 z-20 text-white font-semibold text-xl">
          {hotspotDetail.label} in {hotspotDetail.room.name}
        </div>

        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight position={[5, 5, 5]} angle={0.3} />
          <HotspotModel label={hotspotDetail.label} />
          <OrbitControls />
        </Canvas>
      </motion.div>
    </motion.div>
  );
}