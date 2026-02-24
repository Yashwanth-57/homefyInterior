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

export default function Hero() {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <motion.img

        src="https://images.unsplash.com/photo-1618220179428-22790b461013"

        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}

        transition={{ duration: 2 }}

        className="
          absolute w-full h-full object-cover
          brightness-[0.4]
        "
      />



      {/* Gradient Overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black via-black/40 to-transparent
      "></div>



      {/* Content */}
      <div className="
        relative z-10
        h-full
        max-w-7xl mx-auto
        px-6
        flex flex-col
        justify-center
      ">


        {/* Tag */}
        <motion.p

          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.3 }}

          className="
            text-yellow-400
            tracking-[0.3em]
            text-sm
            mb-4
          "
        >
          LUXURY INTERIOR DESIGN
        </motion.p>



        {/* Heading */}
        <motion.h1

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.5 }}

          style={{ fontFamily: "Playfair Display" }}

          className="
            text-white
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-light
            leading-tight
            max-w-4xl
          "
        >
          Transform Your Space Into A Masterpiece
        </motion.h1>



        {/* Description */}
        <motion.p

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.7 }}

          className="
            text-white/70
            mt-6
            max-w-xl
            text-sm
            md:text-lg
          "
        >
          We create timeless interiors combining elegance, comfort,
          and modern luxury tailored perfectly for your lifestyle.
        </motion.p>



        {/* Buttons */}
        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: 0.9 }}

          className="flex flex-wrap gap-4 mt-8"
        >

          {/* Primary Button */}
          <motion.button

            whileHover={{
              scale: 1.05,
              backgroundColor: "#FFD700",
              color: "#000"
            }}

            whileTap={{ scale: 0.95 }}

            className="
              px-8 py-4
              border border-yellow-400
              text-yellow-400
              font-medium
              tracking-wider
              transition
            "
          >
            View Projects
          </motion.button>



          {/* Secondary Button */}
          <motion.button

            whileHover={{
              scale: 1.05,
              borderColor: "#FFD700",
              color: "#FFD700"
            }}

            whileTap={{ scale: 0.95 }}

            className="
              px-8 py-4
              border border-white/30
              text-white
              tracking-wider
              transition
            "
          >
            Contact Us
          </motion.button>

        </motion.div>


      </div>


      {/* Scroll Indicator */}
      <motion.div

        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}

        className="
          absolute bottom-8 left-1/2
          transform -translate-x-1/2
          text-white/60
        "
      >
        ↓
      </motion.div>


    </section>
  );
}