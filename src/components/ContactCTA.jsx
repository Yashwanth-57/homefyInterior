import { motion } from "framer-motion";

export default function ContactCTA() {

  return (
    <section className="py-32 bg-black text-center">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-white text-5xl mb-8"
        style={{ fontFamily: "Playfair Display" }}
      >
        Let's Design Your Dream Space
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-10 py-4 bg-[var(--accent)] text-black"
      >
        Contact Us
      </motion.button>

    </section>
  );
}