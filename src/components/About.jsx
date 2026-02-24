import { motion } from "framer-motion";

export default function About() {

  return (
    <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12 items-center">

      <motion.img
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
        className="w-full h-[500px] object-cover"
      />

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <h2 className="text-4xl mb-6"
            style={{ fontFamily: "Playfair Display" }}>
          We Create Luxury Interiors
        </h2>

        <p className="text-[var(--text-secondary)] leading-relaxed">
          We specialize in creating elegant, functional, and timeless interior 
          spaces that reflect personality and luxury.
        </p>

      </motion.div>

    </section>
  );
}