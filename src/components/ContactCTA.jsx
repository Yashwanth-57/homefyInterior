import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";


import {
  MessageCircle,
  PencilRuler,
  Factory,
  Truck,
  CheckCircle,
} from "lucide-react";


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

export default function ProcessAndContactCTA() {
  const navigate = useNavigate();
  const [startTyping, setStartTyping] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      desc: "Discuss your vision & get a tailored estimate.",
    },
    {
      icon: PencilRuler,
      title: "Design & Approval",
      desc: "We create refined drawings and approve every detail with you.",
    },
    {
      icon: Factory,
      title: "Production",
      desc: "High-quality production in our own factories ensuring precision.",
    },
    {
      icon: Truck,
      title: "Delivery & Installation",
      desc: "Seamless material delivery and professional installation.",
    },
    {
      icon: CheckCircle,
      title: "Project Completion",
      desc: "Perfect handover, completed on time to your satisfaction.",
    },
  ];

  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      {/* 🔥 PROCESS HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          if (hasMounted.current) setStartTyping(true);
        }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
    <p className="section-label">
  OUR PROCESS
</p>

{/* 
        <h2 className=" md:text-6xl font-bold text-[#3A2F25]">
          From Concept to Completion in Just 45 Days
        </h2> */}
      {/* //  className="text-4xl md:text-5xl font-bold text-[#3A2F25] mb-6 */}
              <h2 className="section-title ">
From Vision to Reality in Just 45 Days
        </h2>
      </motion.div>

      {/* 🔥 PROCESS STEPS */}
      <div className="flex flex-col md:flex-row gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex-1 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#C6A75E] bg-[#F5EFE6]">
                  <Icon className="text-[#8B6B2E]" size={32} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#3A2F25]">
                {step.title}
              </h3>

              <p className="mt-2 text-[#2A241D]">
                <TypingText text={step.desc} start={startTyping} />
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 CONTACT CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-28 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#3A2F25] mb-6">
          Ready to Start Your Project?
        </h2>

        <p className="text-lg text-[#2A241D] mb-8">
          Let’s bring your vision to life with our expert team.
        </p>

        <motion.button
          onClick={() => navigate("/consultation")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 rounded-full bg-[#C6A75E] text-[#3A2F25] text-lg font-semibold"
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}