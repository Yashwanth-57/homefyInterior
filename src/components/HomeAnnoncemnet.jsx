import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeroAnnouncement() {

  const navigate = useNavigate();
  const [paused, setPaused] = useState(false);

  const content = (
    <div className="flex items-center gap-6 shrink-0 pr-12">
      <span className="text-[#C6A75E] font-semibold text-sm md:text-base">
        ✦ NEW SERVICE
      </span>

      <span className="text-sm md:text-lg opacity-90">
        Smart Home Automation — Lighting • Locks • Security • Voice Control
      </span>

      <button
        onClick={() => navigate("/solutions")}
        className="
          px-4 md:px-6
          py-2
          text-sm md:text-base
          bg-[#C6A75E]
          text-black
          font-semibold
          rounded-lg
          hover:scale-105
          hover:shadow-lg
          hover:shadow-[#C6A75E]/40
          transition
        "
      >
        Explore Solutions
      </button>
    </div>
  );

  return (
    <div className="mt-15 p-2 relative w-full overflow-hidden border-y border-[#C6A75E]/30 bg-gradient-to-r from-black via-[#0a0a0a] to-black">

      {/* glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent blur-xl"></div>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: paused ? undefined : ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear"
          }}
        >

          {/* duplicated content for seamless loop */}
          <div className="flex items-center gap-12 px-6 text-white">
            {content}
            {content}
            {content}
          </div>

          <div className="flex items-center gap-12 px-6 text-white">
            {content}
            {content}
            {content}
          </div>

        </motion.div>

      </div>

    </div>
  );
}