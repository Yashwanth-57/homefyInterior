"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Html } from "@react-three/drei";

import {
  FaCouch,
  FaBed,
  FaLightbulb,
  FaChair,
  FaHome,
  FaBath,
  FaThLarge,
  FaDoorOpen,
} from "react-icons/fa";

/* =========================
   ICONS + COLORS
========================= */

const icons = [
  FaCouch,
  FaBed,
  FaLightbulb,
  FaChair,
  FaHome,
  FaBath,
  FaThLarge,
  FaDoorOpen,
];

// 🔥 premium soft color palette (luxury feel)
const ICON_COLOR = "rgba(90, 79, 69, 0.18)"; // soft luxury brown transparent

/* =========================
   FLOATING ICON
========================= */

function FloatingIcon({ config, scrollY, Icon }) {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;

    const y = config.baseY + scrollY.current * 5;

    ref.current.position.set(config.baseX, y, config.baseZ);

    ref.current.rotation.y =
      Math.sin(scrollY.current * 0.08 + config.baseX) * 0.12;

    ref.current.visible = y > -100 && y < 100;
  });

  return (
    <group ref={ref}>
      <Html center>
        <div
          style={{
            fontSize: config.size,
            color: config.color,
            opacity: 0.9,
          }}
        >
          <Icon />
        </div>
      </Html>
    </group>
  );
}

/* =========================
   FULLSCREEN GRID (FIXED PERFECTLY)
========================= */

function IconsLayout({ scrollY }) {
  const { viewport } = useThree();

  const configs = useMemo(() => {
    // 🔥 FULL WIDTH (no side gaps)
    const cols = Math.max(5, Math.floor(viewport.width / 2.5));
    const gapX = viewport.width / cols;

    // 🔥 MORE SPACE BETWEEN ROWS
    const gapY = 8.5;

    // 🔥 fill more than screen height
    const rows = Math.ceil((viewport.height * 2.5) / gapY);

    const total = cols * rows;

    return Array.from( { length: total }).map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      return {
        baseX: col * gapX - viewport.width / 2 + gapX / 2,
        baseY: -row * gapY,
        baseZ: -5,

        icon: icons[i % icons.length],

        // 🔥 BIGGER ICONS
        size: Math.max(32, gapX * 5),

        // 🔥 DIFFERENT COLORS
        color:ICON_COLOR,
      };
    });
  }, [viewport]);

  return (
    <group>
      {configs.map((c, i) => (
        <FloatingIcon
          key={i}
          config={c}
          scrollY={scrollY}
          Icon={c.icon}
        />
      ))}
    </group>
  );
}

/* =========================
   CAMERA
========================= */

function CameraDolly({ scrollY }) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.y +=
      (Math.sin(scrollY.current * 0.05) * 0.2 - camera.position.y) *
      0.05;

    camera.position.z = 10;
  });

  return null;
}

/* =========================
   MAIN
========================= */

export default function InteriorIconsScene({ scrollY }) {
  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* 🎨 luxury background */}
        <color attach="background" args={["#f3e1c2"]} />

        {/* lighting */}
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 5, 10]} intensity={1} />

        {/* icons */}
        <IconsLayout scrollY={scrollY} />

        {/* camera */}
        <CameraDolly scrollY={scrollY} />
      </Canvas>
    </div>
  );
}