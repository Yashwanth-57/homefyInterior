import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MessageCircle, PencilRuler, Factory, Truck, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

/* 🔥 Typing Effect */
function TypingText({ text, start, delay = 25 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, delay);

    return () => clearInterval(interval);
  }, [start, text, delay]);

  return <span>{displayed}</span>;
}

export default function ProcessCTA() {
  const navigate = useNavigate();
  const [startTyping, setStartTyping] = useState(false);
  const hasMounted = useRef(false); // 👈 important

  const steps = [
    { icon: MessageCircle, title: "Initial Consultation", desc: "Discuss your vision & get a tailored estimate." },
    { icon: PencilRuler, title: "Design & Approval", desc: "We create refined drawings and approve every detail with you." },
    { icon: Factory, title: "Production", desc: "High-quality production in our own factories ensuring precision." },
    { icon: Truck, title: "Delivery & Installation", desc: "Seamless material delivery and professional installation." },
    { icon: CheckCircle, title: "Project Completion", desc: "Perfect handover, completed on time to your satisfaction." },
  ];

  useEffect(() => {
    hasMounted.current = true; // after first render
  }, []);

  return (
    <section className="py-32 relative max-w-7xl mx-auto px-6">

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          if (hasMounted.current) {
            setStartTyping(true); // 👈 only after mount
          }
        }}
        transition={{ duration: 1 }}
        className="text-center mb-28"
      >
        <p className="text-[#C6A75E] tracking-widest text-sm md:text-base mb-3 font-medium">
          OUR PROCESS
        </p>

        <h2 className="text-6xl md:text-7xl font-playfair font-bold text-[#3A2F25] leading-tight">
          From Concept to Completion <br className="hidden md:block" /> in Just 45 Days
        </h2>
      </motion.div>

      {/* 🔥 Steps */}
      <div className="relative">

        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#C6A75E]/20 -translate-x-1/2"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative w-full md:w-1/5 flex flex-col items-center text-center group"
              >

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#C6A75E] bg-[#F5EFE6] shadow-lg"
                >
                  <Icon className="text-[#8B6B2E]" size={40} />
                </motion.div>

                <div className="mt-6">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#3A2F25]">
                    {step.title}
                  </h3>

                  <p className="text-[#2A241D] text-base md:text-lg mt-2 font-medium">
                    <TypingText text={step.desc} start={startTyping} />
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <div className="md:hidden w-full h-1 bg-[#C6A75E]/20 mt-6 rounded-full"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔥 CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 flex justify-center"
      >
        <motion.button
          onClick={() => navigate("/consultation")}
          whileHover={{ scale: 1.05 }}
          className="px-20 py-6 rounded-full bg-[#C6A75E] text-[#3A2F25] text-2xl font-bold"
        >
          Get Started Today
        </motion.button>
      </motion.div>

    </section>
  );
}