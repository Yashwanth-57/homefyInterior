import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      top-0
      left-0
      right-0
      h-[3px]
      origin-left
      z-[100]
      bg-gradient-to-r
      from-purple-500
      via-pink-500
      to-orange-500
      "
      style={{ scaleX: scrollYProgress }}
    />
  );
}