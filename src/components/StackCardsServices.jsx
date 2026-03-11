import { motion } from "framer-motion";

const services = [
  "Luxury Living Room",
  "Modular Kitchen",
  "Office Interiors",
  "False Ceiling",
  "Lighting Design",
  "Wardrobe Design"
];

export default function StackCardsServices() {
  return (
    <div className="flex items-center justify-center h-[400px] relative">

      {services.map((service, i) => (
        <motion.div
          key={i}

          initial={{ y: 80, opacity: 0 }}

          animate={{
            y: [80, 0, -80],
            opacity: [0, 1, 0]
          }}

          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1.2
          }}

          className="absolute px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white shadow-2xl text-lg"
        >
          {service}
        </motion.div>
      ))}

    </div>
  );
}