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

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PremiumHero() {

  const navigate = useNavigate();

  return (

    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ATMOSPHERE BASE */}
      <div className="absolute inset-0 bg-[#0f0f0f]/20" />

      {/* LUXURY GOLD CENTER LIGHT */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),transparent_65%)]
      " />

      {/* EDGE DEPTH VIGNETTE */}
      <div className="
        absolute inset-0
        bg-[radial-gradient(circle,transparent_40%,rgba(15,15,15,0.55)_100%)]
      " />

      {/* SOFT TOP LIGHT */}
      <div className="
        absolute inset-0
        bg-gradient-to-b
        from-white/5
        via-transparent
        to-transparent
      " />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* SMALL LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-[#D4AF37]
            tracking-[0.5em]
            text-sm
            mb-6
            font-light
          "
        >
          LUXURY INTERIOR DESIGN STUDIO
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            text-white
            text-[60px]
            md:text-[95px]
            leading-[1.05]
            font-playfair
          "
        >
          Crafting Timeless
          <br />
          Luxury Spaces
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            text-white/80
            mt-8
            text-lg
            max-w-xl
            mx-auto
            font-light
          "
        >
          Where elegance meets precision. We design interiors that elevate lifestyle and redefine luxury living.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-6 mt-12 flex-wrap"
        >

          {/* GOLD BUTTON */}
          <button
            onClick={() => navigate("/projects")}
            className="
              px-12 py-4
              bg-[#D4AF37]
              text-black
              hover:scale-105
              transition-all duration-300
              shadow-[0_10px_40px_rgba(212,175,55,0.35)]
              hover:shadow-[0_20px_60px_rgba(212,175,55,0.5)]
            "
          >
            View Projects
          </button>

          {/* GLASS BUTTON */}
          <button
            onClick={() => navigate("/consultation")}
            className="
              px-12 py-4
              text-white
              border border-white/30
              backdrop-blur-md
              hover:bg-white
              hover:text-black
              transition-all duration-300
            "
          >
            Book Consultation
          </button>

        </motion.div>

      </div>

    </section>

  );

}