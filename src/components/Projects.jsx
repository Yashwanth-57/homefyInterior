import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";

export default function Projects() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const total = projectsData.length;

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section className="py-20 md:py-28 overflow-hidden">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-[#C6A87D] uppercase tracking-[4px] text-sm mb-4">
          Our Work
        </p>

        <h2 className="text-[#111111] text-4xl md:text-6xl font-light">
          Crafted Luxury Spaces
        </h2>

        <div className="w-20 h-[2px] mx-auto bg-[#C6A87D] mt-6"></div>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex"
          animate={{
            x: `-${index * 100}%`,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          {projectsData.map((project, i) => {
            const isCenter = i === index;

            return (
              <div
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="w-full flex-shrink-0 flex justify-center cursor-pointer px-4 "
              >
                <div
                  className={`
                    bg-white rounded-[32px] overflow-hidden shadow-xl transition-all duration-700
                    ${
                      isCenter
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-40 blur-[2px]"
                    }
                  w-[90%] md:w-[90%] lg:w-[40%]  lg:h-[40%]
                  `} 
                >
                  {/* Image */}
                  <img
                    src={project.images[0]}
                    className="w-full h-[300px] md:h-[450px]  lg:h-[70%] object-cover"
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

    </section>
  );
}