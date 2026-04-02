"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useRef } from "react";

export default function LuxuryPageHero({ title, subtitle, image }) {
  const ref = useRef(null);

  /* Scroll Parallax */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const smoothY = useSpring(bgY, { stiffness: 80, damping: 20 });

  /* Mouse light tracking */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-[70vh] mt-15 w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.img
        src={image}
        style={{ y: smoothY, scale: bgScale }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Softer cinematic overlay (FIXED) */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Dynamic mouse glow */}
      <motion.div
        className="pointer-events-none absolute w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: [-50, -600],
              x: [0, Math.random() * 120 - 60],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
            }}
            className="absolute w-[3px] h-[3px] bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Subtitle */}
       <motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    text-white      /* 🔥 strong luxury gold */
    text-base md:text-lg   /* 🔥 bigger = stronger */
    font-semibold          /* 🔥 bold but classy */
    tracking-[0.35em]      /* 🔥 perfect spacing */
    uppercase              /* 🔥 premium style */
    mb-6
  "
>

          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative text-[65px] md:text-[50px] leading-[1.05] font-semibold"
          style={{ fontFamily: "Playfair Display" }}
        >
          <span className="text-white drop-shadow-[0_20px_80px_rgba(0,0,0,0.9)]">
            {title}
          </span>

          {/* Gold shimmer */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30 blur-xl animate-[shine_6s_linear_infinite]" />
        </motion.h1>

        {/* Glass luxury panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-10 mx-auto max-w-xl bg-white/60 backdrop-blur-2xl border border-[yellow] rounded-2xl px-10 py-6 text-black/100 shadow-[0_20px_100px_rgba(0,0,0,0.6)]"
        >
          Crafted for elite lifestyles and timeless interiors.
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-10 flex flex-col items-center text-white/60"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-[2px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />

        <span className="text-xs tracking-[0.35em] mt-2">SCROLL</span>
      </motion.div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}