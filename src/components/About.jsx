"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Design Experts" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  // Video state
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.duration) {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekTime = (clickX / rect.width) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-10 overflow-hidden">

      {/* TEXT CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto flex flex-col gap-6 text-center md:text-left"
      >
        <motion.p variants={itemVariants} className="text-[#C6A75E] tracking-[0.3em] text-sm">
          ABOUT OUR STUDIO
        </motion.p>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-playfair text-[#2B2B2B] leading-tight">
          Designing Timeless<br />Luxury Interiors
        </motion.h2>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-[#5E5E5E] leading-relaxed">
          At Homecraft Interiors, we believe luxury is not just about beauty — it's about creating spaces that reflect personality, comfort, and timeless elegance.
        </motion.p>

        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-[#E8DFC8] text-center"
            >
              <h3 className="text-3xl md:text-4xl font-semibold text-[#C6A75E]">{stat.number}</h3>
              <p className="text-sm md:text-base text-[#6B6B6B]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* VIDEO BELOW TEXT */}
      <motion.div
        className="relative max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden border-4 border-[#C6A75E] shadow-2xl"
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/ddashlgli/video/upload/v1774810551/WhatsApp_Video_2026-03-30_at_00.20.13_f8tbtv.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-[320px] md:h-[450px] object-cover rounded-xl"
        />

        {/* Controls */}
        <div className="absolute bottom-2 left-4 right-4 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="bg-white/80 text-[#C6A75E] px-3 py-1 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button
            onClick={toggleMute}
            className="bg-white/80 text-[#C6A75E] px-3 py-1 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            {isMuted ? "Unmute" : "Mute"}
          </button>

          {/* Timeline */}
          <div
            onClick={handleSeek}
            className="flex-1 h-2 bg-white/20 rounded cursor-pointer relative"
          >
            <div className="h-2 bg-[#C6A75E] rounded" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </motion.div>

    </section>
  );
}