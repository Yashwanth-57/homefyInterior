import { motion } from "framer-motion";

export default function MenuOverlay({ open, setOpen }) {

  if (!open) return null;

  return (

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="fixed inset-0 bg-black z-[998] flex flex-col items-center justify-center gap-10 text-white text-4xl"

    >

      <a href="#" onClick={() => setOpen(false)}>Home</a>
      <a href="#" onClick={() => setOpen(false)}>Projects</a>
      <a href="#" onClick={() => setOpen(false)}>Contact</a>

    </motion.div>

  );

}