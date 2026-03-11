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
              text-white
              rounded-full
              bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20
              border border-purple-400/30
              backdrop-blur-lg
              hover:from-pink-500
              hover:via-purple-500
              hover:to-indigo-500
              hover:text-white
              hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]
              transition-all
              duration-300
            "
          >
            {service}
          </span>
        ))}
      </motion.div>

    </div>
  );
}