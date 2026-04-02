import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";

export default function Projects() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const total = projectsData.length;

  // Infinite loop data
  const extendedData = [
    projectsData[total - 1],
    ...projectsData,
    projectsData[0],
  ];

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Loop reset
  useEffect(() => {
    if (index === total + 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(1);
      }, 1000);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setIndex(total);
      }, 1000);
    }
  }, [index, total]);

  useEffect(() => {
    if (!isAnimating) {
      setTimeout(() => setIsAnimating(true), 50);
    }
  }, [isAnimating]);

  return (
    <section className="py-20 md:py-28 overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="luxury-sub  text-[#C6A87D] uppercase tracking-[4px] text-sm mb-4">
          Our Work
        </p>

        <h2 className="text-[#111111] text-4xl md:text-6xl font-light">
          Crafted Luxury Spaces
        </h2>

        <div className="w-20 h-[2px] mx-auto bg-[#C6A87D] mt-6"></div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden py-6 md:py-1">

        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          initial={false}
          transition={{
            duration: isAnimating ? 1 : 0,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          {extendedData.map((project, i) => {
            const isCenter = i === index;

            return (
              <div
                key={i}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="w-full flex-shrink-0 flex justify-center cursor-pointer px-4"
              >
                <div
                  className={`
                    bg-white rounded-[32px] overflow-hidden shadow-xl transition-all duration-700
                    ${
                      isCenter
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40 blur-[2px]"
                    }

                    w-[95%] sm:w-[90%] md:w-[75%] lg:w-[50%] xl:w-[40%]
                  `}
                >
                  {/* Image */}
                  <img
                    src={project.images[0]}
                    className="
                      w-full 
                      h-[260px] sm:h-[320px] md:h-[420px] lg:h-[300px]
                      object-cover
                    "
                  />

                  {/* Content */}
                  <div className="p-6 md:p-8 text-center">
                    <p className="text-[#C6A87D] text-sm mb-2">
                      {project.category}
                    </p>

                    <h3 className="text-[#111111] text-xl md:text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    <div className="w-12 h-[2px] bg-[#C6A87D] mx-auto"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-8 md:mt-12 px-4">

        {/* PREV */}
        <button
          onClick={() => setIndex((prev) => prev - 1)}
          className="
            px-4 sm:px-5 md:px-8 
            py-2 sm:py-2.5 md:py-3
            text-[10px] sm:text-xs md:text-sm
            tracking-widest
            rounded-full
            bg-black text-white border border-black
            
            hover:bg-white hover:text-black
            
            transition-all duration-500
            shadow-md md:shadow-lg hover:shadow-xl
          "
        >
          ← PREV
        </button>

        {/* NEXT */}
        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="
            px-4 sm:px-5 md:px-8 
            py-2 sm:py-2.5 md:py-3
            text-[10px] sm:text-xs md:text-sm
            tracking-widest
            rounded-full
            bg-black text-white border border-black
            
            hover:bg-white hover:text-black
            
            transition-all duration-500
            shadow-md md:shadow-lg hover:shadow-xl
          "
        >
          NEXT →
        </button>

      </div>

    </section>
  );
}