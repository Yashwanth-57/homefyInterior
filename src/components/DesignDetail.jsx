import { useNavigate, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { interiorData, exteriorData } from "../data/interiorExteriorData";
import Footer from "./Footer";

export default function DesignDetails() {
  const { type } = useParams();
  const data = type === "interior" ? interiorData : exteriorData;

  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scale, setScale] = useState(1);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <div
        ref={ref}
        className="relative min-h-screen overflow-hidden px-6 py-24 bg-[#0f172a] text-white"
      >
        {/* BG IMAGE */}
        <motion.img
          src={data.bg}
          style={{ y: yBg }}
          className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10 pointer-events-none"
        />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" />

        {/* 🔥 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl text-center mb-16 font-bold text-white bg-clip-text text-transparent"
        >
          {data.title}
        </motion.h1>

        {/* GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
          >
            <p className="mb-6 text-lg text-gray-300">
              {data.description}
            </p>

            <Section title="✨ Features" items={data.features} />
            <Section title="🧱 Materials" items={data.materials} />
            <Section title="⚙️ Process" items={data.process} numbered />
          </motion.div>

          {/* RIGHT IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            {data.images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                onClick={() => {
                  setActiveIndex(i);
                  setScale(1);
                }}
                whileHover={{ scale: 1.08 }}
                className="rounded-xl object-cover h-44 md:h-60 w-full cursor-pointer shadow-md hover:shadow-pink-500/30 transition"
              />
            ))}
          </div>
        </div>

        {/* WHY */}
        <div className="max-w-4xl mx-auto text-center mt-24">
          <h2 className="text-4xl mb-6 font-bold text-red-200">
            Why Choose Us
          </h2>
          <p className="text-gray-300">{data.extra}</p>
        </div>

        {/* PRICING / WHATSAPP */}
        <div className="max-w-5xl mx-auto mt-24 text-center">
          <h2 className="text-4xl mb-10 font-bold text-red-200">
            Estimated Pricing
          </h2>

          {data.pricing ? (
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(data.pricing).map(([key, value], i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-xl bg-white/10 border border-white/20 backdrop-blur-lg shadow hover:shadow-purple-500/30"
                >
                  <h3 className="text-lg capitalize mb-2 text-gray-400">
                    {key}
                  </h3>
                  <p className="text-2xl font-semibold text-white/80">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <p className="text-gray-300">
                Get accurate estimate on WhatsApp 👇
              </p>

              <a
                href="https://wa.me/919876543210?text=Hi%20I%20want%20an%20estimate"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                💬 Get Estimate on WhatsApp
              </a>
            </div>
          )}
        </div>

        <MagneticButton text=" Book Consultation" />

        {/* GALLERY */}
        {activeIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <motion.img
              key={activeIndex}
              src={data.images[activeIndex]}
              className="max-h-[70vh] rounded-xl shadow-2xl"
              style={{ scale }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onWheel={(e) => {
                e.deltaY < 0
                  ? setScale((s) => Math.min(s + 0.1, 2))
                  : setScale((s) => Math.max(s - 0.1, 1));
              }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

/* SECTION */
function Section({ title, items, numbered }) {
  return (
    <>
      <h3 className="text-xl mt-6 mb-3 font-semibold text-purple-300">
        {title}
      </h3>
      <ul className="space-y-1 text-gray-300">
        {items.map((item, i) => (
          <motion.li key={i} whileHover={{ x: 5, color: "#f472b6" }}>
            {numbered ? `${i + 1}. ` : "• "} {item}
          </motion.li>
        ))}
      </ul>
    </>
  );
}

/* BUTTON */
function MagneticButton({ text }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-20">
      <button
        onClick={() => navigate("/consultation")}
        className="
          relative z-50
          px-12 py-4
          rounded-full
          bg-[gold]/40
          text-balck
          font-semibold
          text-lg
          border border-white/20
          
          transition-all duration-300
          hover:bg-[#1c1c1c]
          active:scale-95
        "
      >
        {text}
      </button>
    </div>
  );
}