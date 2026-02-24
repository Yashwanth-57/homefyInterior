import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {

  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, 2200);

    return () => clearTimeout(timer);

  }, []);

  if (!visible) return null;

  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
    >

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-4xl md:text-6xl"
        style={{ fontFamily: "Playfair Display" }}
      >
        Homecraft Interiors
      </motion.h1>

    </motion.div>

  );

}