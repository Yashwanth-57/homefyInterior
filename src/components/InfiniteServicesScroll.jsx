import { motion } from "framer-motion";

const services = [
  "Luxury Living Rooms",
  "Modular Kitchens",
  "Bedroom Interiors",
  "Wardrobes",
  "False Ceiling",
  "Lighting Design",
  "TV Units",
  "Office Interiors",
  "Dining Interiors",
  "Home Renovation",
];

export default function ServiceUniverse() {

  const items = [...services, ...services];

  return (
    <div className="w-full overflow-hidden py-3 sm:py-4">
      <motion.div
        className="flex gap-3 sm:gap-4 md:gap-6 w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items.map((service, i) => (
          <span
            key={i}
            className="
              px-3 sm:px-4 md:px-5
              py-1 sm:py-1.5
              text-[10px] sm:text-xs md:text-sm
              whitespace-nowrap
              text-[#3a3a3a]          /* soft dark text */
              rounded-full
bg-gradient-to-r from-[#e0f7ff] via-[#d8fff0] to-[#fff5e6]              border border-[#d4af37]/30      /* soft gold border */
              backdrop-blur-md
              shadow-[0_0_8px_rgba(212,175,55,0.2)]
              hover:shadow-[0_0_15px_rgba(212,175,55,0.35)]
              hover:scale-105
              transition-all duration-300
            "
          >
            {service}
          </span>
        ))}
      </motion.div>
    </div>
  );
}