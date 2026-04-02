import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePopup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("homePopupShown");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const alreadyShown = localStorage.getItem("homePopupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("homePopupShown", "true");
      }, 1000);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          {/* POPUP */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-[90%] max-w-lg bg-[#F7F3ED] rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.25)] overflow-hidden"
          >

            {/* CLOSE */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md text-[#333] hover:rotate-90 hover:scale-110 transition"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                alt="interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-7 text-center">

              <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-3">
                Transform Your Home Into a Luxury Space ✨
              </h2>

              <p className="text-[15px] text-[#555] mb-6 leading-relaxed">
                Get a personalized interior design plan crafted by experts{" "}
                <span className="font-bold text-[#B8964A]">
                  in just 60 seconds
                </span>.  
                From idea to inspiration — your luxury home journey begins instantly.
              </p>

              {/* 🔥 BUTTON WITH BLAST EFFECT */}
             <motion.button
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  whileHover={{
    scale: 1.12,
    boxShadow: "0px 0px 35px rgba(184,150,74,0.9)",
  }}
  whileTap={{ scale: 0.9 }}
  onClick={() => navigate("/consultation")}
  className="
    relative
    w-full
    py-3
    rounded-full
    text-white
    font-bold
    tracking-wide
    bg-[#B8964A]
    overflow-hidden
  "
>
  {/* 🔥 CONTINUOUS PULSE GLOW */}
  <motion.span
    className="absolute inset-0 rounded-full"
    animate={{
      boxShadow: [
        "0 0 0px rgba(184,150,74,0.0)",
        "0 0 25px rgba(184,150,74,0.6)",
        "0 0 0px rgba(184,150,74,0.0)"
      ]
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  {/* 💥 RIPPLE BLAST ON CLICK */}
  <motion.span
    className="absolute inset-0 bg-white/30 rounded-full"
    initial={{ scale: 0, opacity: 0 }}
    whileTap={{ scale: 3.5, opacity: 0 }}
    transition={{ duration: 0.6 }}
  />

  {/* ⚡ SHIMMER LIGHT PASS */}
  <motion.span
    className="absolute top-0 left-[-100%] w-full h-full bg-white/20"
    animate={{ left: ["-100%", "120%"] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear"
    }}
  />

  {/* TEXT */}
  <span className="relative z-10">
    Get Free Design Consultation
  </span>
</motion.button>

              {/* 🔥 CRAZY TRUST LINE */}
           <motion.p
  className="text-xs mt-5 flex justify-center gap-3 flex-wrap font-bold"
>
  {[
    { text: "100% FREE", color: "#E53935" },
    { text: "NO COMMITMENT", color: "#1E88E5" },
    { text: "INSTANT RESPONSE", color: "#43A047" }
  ].map((item, i) => (
    <motion.span
      key={i}
      animate={{
        opacity: [1, 0.5, 1], // 🔥 smooth blink
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
        delay: i * 0.3
      }}
      style={{ color: item.color }}
      className="relative px-1"
    >

      {/* ✨ SPARKLE EFFECT */}
      <motion.span
        className="absolute inset-0 bg-white/30 rounded"
        animate={{
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.4
        }}
      />

      {/* TEXT */}
      <span className="relative z-10">
        {item.text}
      </span>

    </motion.span>
  ))}
</motion.p>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}