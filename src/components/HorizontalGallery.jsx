import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ImageReveal from "./ImageReveal";

const images = [
  "https://images.unsplash.com/photo-1618220179428-22790b461013",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
];

export default function HorizontalGallery() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // smooth start/end
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={ref} className="h-[250vh] md:h-[200vh] bg-black relative">
      {/* Sticky horizontal scroll container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 px-10 md:px-20">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] rounded-3xl shadow-xl hover:shadow-2xl cursor-pointer"
            >
              {/* ImageReveal handles smooth fade-in */}
              <ImageReveal src={img} className="rounded-3xl" />

              {/* Golden Glow Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/10 opacity-0 hover:opacity-70 transition duration-500"></div>

              {/* Title Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-5 left-5 text-white z-20"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                  Project {i + 1}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional Call-To-Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-white text-lg md:text-xl">
          Scroll to explore more premium projects!
        </p>
      </motion.div>
    </section>
  );
}