import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoomModal from "../RoomModal";

const rooms = [
  {
    id: 1,
    name: "Luxury Living Room",
    model: "/models/livingroom.glb",
    hotspots: [
      { position: [1, 0, -1], label: "Sofa" },
      { position: [-1, 0, 1], label: "TV Unit" },
    ],
  },
  {
    id: 2,
    name: "Modern Kitchen",
    model: "/models/kitchen.glb",
    hotspots: [
      { position: [0, 0, -1.5], label: "Fridge" },
      { position: [1, 0, 0], label: "Cabinet" },
    ],
  },
];

function Room({ modelPath, hotspots, onHotspotClick }) {
  const gltf = useGLTF(modelPath);
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
      {hotspots.map((hot, i) => (
        <mesh
          key={i}
          position={hot.position}
          onClick={() => onHotspotClick(hot.label)}
        >
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color="yellow" />
          <Html distanceFactor={10}>
            <div className="bg-black text-white px-2 rounded cursor-pointer text-sm">
              {hot.label}
            </div>
          </Html>
        </mesh>
      ))}
    </>
  );
}

export default function RoomGallery() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [hotspotDetail, setHotspotDetail] = useState(null);

  return (
    <section className="h-screen w-full bg-black relative">
      {/* Room Selector */}
      <div className="absolute top-4 left-4 z-10 flex gap-4">
        {rooms.map((room) => (
          <button
            key={room.id}
            className="px-4 py-2 rounded bg-yellow-500 font-semibold text-black hover:scale-105 transition"
            onClick={() => setSelectedRoom(room)}
          >
            {room.name}
          </button>
        ))}
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        {selectedRoom && (
          <Room
            modelPath={selectedRoom.model}
            hotspots={selectedRoom.hotspots}
            onHotspotClick={(label) => setHotspotDetail({ room: selectedRoom, label })}
          />
        )}
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>

      {/* Hotspot Modal */}
      <AnimatePresence>
        {hotspotDetail && (
          <RoomModal
            hotspotDetail={hotspotDetail}
            onClose={() => setHotspotDetail(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}