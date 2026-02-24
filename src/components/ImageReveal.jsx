import { motion } from "framer-motion";

export default function ImageReveal({ src }) {

  return (

    <motion.div

      initial={{ scale: 1.2, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}

      transition={{ duration: 1.2 }}

      viewport={{ once: true }}

      className="overflow-hidden rounded-3xl"
    >

      <img src={src} className="w-full h-full object-cover" />

    </motion.div>

  );

}