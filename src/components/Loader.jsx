"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, Text3D, Environment } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

function Logo3D() {
  const ref = useRef();
  const { viewport } = useThree();

  const isMobile = viewport.width < 5;

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y =
        Math.sin(state.clock.elapsedTime * 1.2) * 0.08;
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <Text3D
        ref={ref}
        font="/fonts/helvetiker_regular.typeface.json"
        size={isMobile ? 0.25 : 0.55} // 🔥 smaller on mobile
        height={0.18}
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.02}
        lineHeight={0.9} // 🔥 tighter lines
        letterSpacing={0.02}
      >
        {`Homecraft\nInteriors`} {/* 🔥 FORCE 2 LINES */}
        

        <meshStandardMaterial
          color="#f5d0fe"
          metalness={1}
          roughness={0.2}
        />
      </Text3D>
    </Center>
  );
}

export default function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setExit(true), 3500);
    const t2 = setTimeout(() => onFinish && onFinish(), 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 1.5 }}
    >

      {/* 🌈 COLORFUL GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700" />

      {/* ✨ BLUR LIGHT EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[120px] opacity-30 bottom-[-100px] right-[-100px]" />

      {/* 🎬 3D CANVAS */}
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* 🌍 reflections */}
        <Environment preset="sunset" />

        <Logo3D />
      </Canvas>

      {/* ✨ SUBTITLE */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-white/80 tracking-[6px] text-xs md:text-sm uppercase"
        >
          Luxury • Interiors • Design
        </motion.p>
      </div>
    </motion.div>
  );
}