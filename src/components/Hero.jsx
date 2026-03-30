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
"use client";

"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ServiceUniverse from "./InfiniteServicesScroll";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

/* =========================
   IMAGE SLIDER
========================= */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function PremiumHero() {
  const navigate = useNavigate();

  /* =========================
     TYPING EFFECT
  ========================= */
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Where elegance meets precision.",
        "We design interiors that elevate lifestyle.",
        "Luxury that defines your living."
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const interiorImages = [
    "https://res.cloudinary.com/ddashlgli/image/upload/v1773103060/WhatsApp_Image_2026-03-07_at_21.55.10_1_mvheca.jpg",
    "https://res.cloudinary.com/ddashlgli/image/upload/v1773103049/WhatsApp_Image_2026-03-07_at_21.55.12_2_agefcs.jpg",
    "https://res.cloudinary.com/ddashlgli/image/upload/v1773103022/WhatsApp_Image_2026-03-07_at_21.55.03_rmwfgv.jpg",
  ];

  const exteriorImages = [
    "https://res.cloudinary.com/ddashlgli/image/upload/v1774810365/WhatsApp_Image_2026-03-30_at_00.20.06_1_npcgx6.jpg",
    "https://res.cloudinary.com/ddashlgli/image/upload/v1774810365/WhatsApp_Image_2026-03-30_at_00.20.03_tchsi7.jpg",
    "https://res.cloudinary.com/ddashlgli/image/upload/v1774810364/WhatsApp_Image_2026-03-30_at_00.20.06_vxjgxu.jpg",
  ];

  return (
    <section className="relative w-full flex flex-col items-start justify-start pt-24 pb-12 min-h-[100dvh]">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0 opacity = 10"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0f0f0f]/70 backdrop-blur-[1.3px] z-0" />

      {/* CONTENT */}
      <div className="relative z-10 text-center mb-10 md:mb-24 max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">

        {/* SMALL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full text-center font-bold uppercase text-lg sm:text-xl md:text-2xl tracking-widest mb-8 -mt-10"
        >
          {"@HomeCraft Interiors".split("").map((letter, idx) => (
            <span
              key={idx}
              style={{ color: ["#ff6ec4", "#7873f5", "#42e695", "#f9d423", "#ff4e50", "#1fddff"][idx % 6] }}
              className="inline-block"
            >
              {letter}
            </span>
          ))}
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[32px] sm:text-[42px] md:text-[60px] lg:text-[95px] leading-[1.1] font-playfair text-white"
        >
          Crafting Timeless
          <br />
          Luxury Spaces
        </motion.h1>

        {/* TYPING DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-[90%] sm:max-w-lg md:max-w-xl mx-auto font-light px-4 sm:px-2 text-white"
        >
          <span ref={el} />
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12"
        >
          <button
            onClick={() => navigate("/projects")}
            className="px-8 md:px-12 py-3 md:py-4 text-sm md:text-base rounded-full text-white font-semibold bg-[#7f5af0] hover:bg-[#6246ea] transition-all duration-500 hover:scale-105 shadow-[0_10px_25px_rgba(127,90,240,0.4)] hover:shadow-[0_15px_40px_rgba(98,70,234,0.6)]"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/consultation")}
            className="px-8 md:px-12 py-3 md:py-4 text-sm md:text-base rounded-full text-white font-semibold bg-[#e63946] hover:bg-[#c1121f] transition-all duration-500 hover:scale-105 shadow-[0_10px_25px_rgba(230,57,70,0.4)] hover:shadow-[0_15px_40px_rgba(193,18,31,0.6)]"
          >
            Book Consultation
          </button>
        </motion.div>
   {/* SERVICE UNIVERSE */}
        <div className="m-8 md:mt-10">
          <ServiceUniverse />
        </div>
        {/* ===== NEW SECTION (ADDED) ===== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 px-4">

          {/* INTERIOR */}
          <div
            onClick={() => navigate("/interior")}
            className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <ImageSlider images={interiorImages} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
            <div className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-semibold">
              Interior Design View
              
            </div>
            <div className="absolute inset-0 border border-white/30 rounded-2xl group-hover:border-white transition duration-500"></div>
          </div>

          {/* EXTERIOR */}
          <div
            onClick={() => navigate("/exterior")}
            className="relative h-[220px] md:h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
          >
            <ImageSlider images={exteriorImages} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />
            <div className="absolute bottom-4 left-4 text-white text-lg md:text-xl font-semibold">
              Exterior Design View
           
            </div>
            <div className="absolute inset-0 border border-white/30 rounded-2xl group-hover:border-white transition duration-500"></div>
          </div>

        </div>

     

      </div>
    </section>
  );
}