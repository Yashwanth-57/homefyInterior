// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const slides = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920",
//     title: "Luxury Redefined",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920",
//     title: "Elegance in Every Detail",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1920",
//     title: "Designed for Living",
//   },
// ];

// export default function Hero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="h-screen w-full overflow-hidden relative">

//       <AnimatePresence mode="wait">
//         <motion.img
//           key={slides[index].image}
//           src={slides[index].image}
//           initial={{ scale: 1.3, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 2 }}
//           className="absolute w-full h-full object-cover"
//         />
//       </AnimatePresence>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Text */}
//     <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">

//   {/* Title */}
//   <motion.h1
//     key={slides[index].title}
//     initial={{ opacity: 0, y: 100 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -100 }}
//     transition={{ duration: 1.5 }}
//     className="text-white text-7xl text-center"
//     style={{ fontFamily: "Playfair Display" }}
//   >
//     {slides[index].title}
//   </motion.h1>

//   {/* Button */}
//   <motion.button
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 1.8 }}
//     whileHover={{ scale: 1.1 }}
//     whileTap={{ scale: 0.95 }}
//     className="px-8 py-4 bg-[var(--accent)] text-black font-medium tracking-wide"
//   >
//     Explore Projects
//   </motion.button>

// </div>
//     </section>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const slides = [
//   {
//     img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
//   },
// ];

// export default function Hero() {

//   const [index, setIndex] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);

//   }, []);

//   return (

//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">

//       {/* Background slideshow */}
//       <AnimatePresence>

//         <motion.img
//           key={index}
//           src={slides[index].img}

//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 0.5, scale: 1 }}
//           exit={{ opacity: 0 }}

//           transition={{ duration: 2 }}

//           className="absolute inset-0 w-full h-full object-cover"
//         />

//       </AnimatePresence>

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl">

//         {/* Brand */}
//         <motion.p

//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}

//           transition={{ duration: 1 }}

//           className="text-[var(--accent-primary)] tracking-[0.4em] text-sm mb-6"
//         >
//           HOMECRAFT INTERIORS
//         </motion.p>

//         {/* Main Title */}
//         <motion.h1

//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}

//           transition={{ duration: 1.2 }}

//           className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-6"
//         >

//           <span className="bg-gradient-to-r from-[#D4AF37] to-[#E8D8A8] bg-clip-text text-transparent">
//             Designing Luxury
//           </span>

//           <br />

//           Spaces That Inspire

//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p

//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}

//           transition={{ delay: 0.5, duration: 1 }}

//           className="text-[var(--text-secondary)] text-lg md:text-xl mb-10"
//         >
//           Experience luxury and comfort in every corner of your space
//         </motion.p>

//         {/* Buttons */}
//         <motion.div

//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}

//           transition={{ delay: 0.8, duration: 1 }}

//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >

//           {/* Primary */}
//           <button className="
//             bg-[var(--accent-primary)]
//             text-black
//             px-8 py-4
//             rounded-full
//             hover:scale-105
//             transition duration-300
//           ">
//             View Projects
//           </button>

//           {/* Secondary */}
//           <button className="
//             border border-[var(--border-primary)]
//             px-8 py-4
//             rounded-full
//             hover:bg-white hover:text-black
//             transition duration-300
//           ">
//             Book Consultation
//           </button>

//         </motion.div>

//       </div>

//     </section>

//   );

// }
import {
  motion,
  useMotionValue,
  useTransform
} from "framer-motion";

import {
  useEffect,
  useState
} from "react";

import { useNavigate } from "react-router-dom";

export default function UltraPremiumHero() {

  const navigate = useNavigate();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [-500, 500], [-30, 30]);
  const bgY = useTransform(mouseY, [-500, 500], [-30, 30]);

  const textX = useTransform(mouseX, [-500, 500], [-15, 15]);
  const textY = useTransform(mouseY, [-500, 500], [-15, 15]);

  const luxuryWords = [
    "Masterpiece",
    "Luxury",
    "Elegance",
    "Perfection",
    "Dream Space"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {

    const mouseMove = (e) => {

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);

    };

    window.addEventListener("mousemove", mouseMove);

    const interval = setInterval(() => {

      setWordIndex(prev =>
        prev === luxuryWords.length - 1 ? 0 : prev + 1
      );

    }, 2500);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      clearInterval(interval);
    };

  }, []);

  return (

    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Video Background */}
      <motion.video

        autoPlay
        muted
        loop
        playsInline

        style={{
          x: bgX,
          y: bgY
        }}

        className="
          absolute
          w-[110%]
          h-[110%]
          object-cover
          brightness-[0.45]
        "
      >
        <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </motion.video>


      {/* Luxury Gradient */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-black
        via-black/40
        to-black
      " />


      {/* Golden Glow */}
      <motion.div

        animate={{
          opacity: [0.15, 0.35, 0.15]
        }}

        transition={{
          duration: 4,
          repeat: Infinity
        }}

        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.2),transparent_60%)]
        "
      />


      {/* Content */}
      <motion.div

        style={{
          x: textX,
          y: textY
        }}

        className="
          relative z-10
          h-full
          max-w-7xl
          mx-auto
          px-6
          flex flex-col
          justify-center
        "
      >

        {/* Tag */}
        <motion.p

          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}

          className="
            text-yellow-400
            tracking-[0.4em]
            text-xs sm:text-sm
            mb-4
          "
        >
          PREMIUM INTERIOR DESIGN
        </motion.p>


        {/* Heading */}
        <motion.h1

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          style={{ fontFamily: "Playfair Display" }}

          className="
            text-white
            text-4xl
            sm:text-6xl
            md:text-7xl
            font-light
            leading-tight
          "
        >
          Transform Your Space Into

          <span className="block text-yellow-400 h-[80px]">

            <motion.span

              key={wordIndex}

              initial={{
                opacity: 0,
                y: 40
              }}

              animate={{
                opacity: 1,
                y: 0
              }}

              exit={{
                opacity: 0,
                y: -40
              }}

              transition={{
                duration: 0.6
              }}

            >
              {luxuryWords[wordIndex]}
            </motion.span>

          </span>

        </motion.h1>


        {/* Description */}
        <motion.p

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          className="
            text-white/70
            mt-6
            max-w-xl
            text-sm md:text-lg
          "
        >
          Where architecture meets emotion. We craft interiors
          that define prestige, elegance, and timeless beauty.
        </motion.p>


        {/* Buttons */}
        <div className="flex gap-4 mt-8 flex-wrap">

          <MagneticButton
            text="View Projects"
            onClick={() => navigate("/projects")}
          />

          <MagneticButton
            text="Cost Calculator"
            onClick={() => navigate("/calculator")}
            secondary
          />

        </div>

      </motion.div>


      {/* Scroll Indicator */}
      <motion.div

        animate={{ y: [0, 12, 0] }}

        transition={{
          repeat: Infinity,
          duration: 1.5
        }}

        className="
          absolute bottom-6
          left-1/2
          -translate-x-1/2
          text-white/60
          text-xl
        "
      >
        ↓
      </motion.div>

    </section>

  );
}



/* Magnetic Button Component */

function MagneticButton({ text, onClick, secondary }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);

  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (

    <motion.button

      style={{ x, y }}

      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}

      whileTap={{ scale: 0.95 }}

      className={`
        px-8 py-4
        tracking-wider
        transition
        border
        ${secondary
          ? "border-white/30 text-white"
          : "border-yellow-400 text-yellow-400"
        }
      `}
    >
      {text}
    </motion.button>

  );

}