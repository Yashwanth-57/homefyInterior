"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

import SmoothScroll from "../components/SmoothScroll";
import PageTransition from "../components/PageTransactions";
import FAQSection from "../components/FAQuestions";
import HeroAnnouncement from "../components/HomeAnnoncemnet";
import ScrollProgressBar from "../components/ScrollProgress";

import Background3D from "../components/Background3D";

import { useRef, useEffect } from "react";

export default function Home() {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY / window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      {/* 🔥 LUXURY 3D BACKGROUND */}
   {/* 🔥 BACKGROUND LIMITED AREA */}
  <Background3D scrollY={scrollY} />


      <ScrollProgressBar />

      <PageTransition>
        <HeroAnnouncement />
        <Navbar />

        {/* 🔥 MAIN CONTENT */}
        <main className="relative z-10 text-white">

          {/* HERO */}
          <section id="home" className="relative z-10 bg-transparent">
            <Hero />
          </section>

          {/* ABOUT */}
          <section id="about" className="relative z-10 bg-transparent">
            <About />
          </section>

          {/* PROJECTS */}
          <section id="projects" className="relative z-10 bg-transparent">
            <Projects />
          </section>

          {/* CONTACT */}
          <section id="contact" className="relative z-10 bg-transparent">
            <ContactCTA />
          </section>

        </main>

     

        {/* 🔥 FOOTER (OUTSIDE BACKGROUND) */}
        <div className="relative z-20 bg-[#F7F3ED] text-black pt-24">
          
          {/* 🔥 SMOOTH TRANSITION */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-[#F7F3ED] to-transparent pointer-events-none" />

          <FAQSection />
          <Footer />
        </div>

        
      </PageTransition>
    </SmoothScroll>
  );
}