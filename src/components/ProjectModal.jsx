import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Lock scroll
    return () => {
      document.body.style.overflow = "auto"; // Unlock scroll
    };
  }, []);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-4 sm:px-10"
          onClick={onClose}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-6xl bg-[#111] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal
          >
            {/* Left: Image */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-72 sm:h-96 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 pointer-events-none"></div>
            </motion.div>

            {/* Right: Info + Stats */}
            <motion.div
              className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                  {project.title}
                </h2>
                <span className="text-yellow-400 font-semibold uppercase text-sm tracking-wide">
                  {project.category}
                </span>
              </div>

              {/* Visual stats / features */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-yellow-500/20 transition">
                  <span className="text-white font-bold text-lg">2500 sq.ft</span>
                  <span className="text-white/70 text-sm mt-1">Size</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-yellow-500/20 transition">
                  <span className="text-white font-bold text-lg">5</span>
                  <span className="text-white/70 text-sm mt-1">Rooms</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-yellow-500/20 transition">
                  <span className="text-white font-bold text-lg">Modern</span>
                  <span className="text-white/70 text-sm mt-1">Style</span>
                </div>
                <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center justify-center text-center hover:bg-yellow-500/20 transition">
                  <span className="text-white font-bold text-lg">Hyderabad</span>
                  <span className="text-white/70 text-sm mt-1">Location</span>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-yellow-400 rounded-full font-semibold text-black hover:shadow-lg hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}