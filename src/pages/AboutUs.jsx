import { motion } from "framer-motion";
import Footer from "../components/Footer";
import LuxuryPageHero from "../components/LuxuryPageHero";
import ScrollProgressBar from "../components/ScrollProgress";

export default function About() {
  return (
    <div className="bg-[var(--bg-main)] min-h-screen">

      <ScrollProgressBar />

      <LuxuryPageHero
        title="Studio At HomeCraft"
        subtitle="Design Philosophy"
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920"
      />

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1
              className="text-5xl md:text-7xl mb-6"
              style={{ fontFamily: "Playfair Display" }}
            >
              About Our
              <br />
              Luxury Studio
            </h1>

            <p className="text-lg text-[var(--text-soft)] leading-relaxed">
              We design interiors that reflect elegance,
              prestige, and timeless beauty. Every project
              is crafted with precision and passion.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>


      {/* STATS SECTION */}
      <section className="py-20 bg-[#F7F3ED]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">

          <Stat number="120+" label="Projects Completed" delay={0} />
          <Stat number="80+" label="Happy Clients" delay={0.2} />
          <Stat number="5+" label="Years Experience" delay={0.4} />
          <Stat number="15+" label="Design Experts" delay={0.6} />

        </div>
      </section>


      {/* STORY */}
      <section className="py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Story
          </h2>

          <p className="text-lg text-[var(--text-soft)] leading-relaxed">
            Founded with a passion for luxury design,
            our studio has transformed homes into
            breathtaking masterpieces. We blend modern
            innovation with timeless elegance.
          </p>
        </motion.div>
      </section>


      {/* TEAM */}
      <section className="py-24 bg-[var(--accent-cream)]">
        <div className="max-w-7xl mx-auto px-6">

          <h2
            className="text-5xl text-center mb-16"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Designers
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <TeamCard name="Ajay" role="Senior Interior Designer" delay={0} />
            <TeamCard name="Rahul Verma" role="Architect" delay={0.2} />
            <TeamCard name="Meera Kapoor" role="Creative Director" delay={0.4} />

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}



function Stat({ number, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm border border-[#eee] text-center"
    >
      <h3 className="text-4xl font-bold text-[var(--accent-gold)] mb-3">
        {number}
      </h3>

      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#B8964A]/10 text-[#B8964A] border border-[#B8964A]/30">
        {label}
      </span>
    </motion.div>
  );
}



function TeamCard({ name, role, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-500"
    >

      <div className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center
        text-3xl font-semibold text-white
        bg-gradient-to-r from-[#7f5af0] to-[#ff6ec4]
        hover:scale-110 transition-all duration-500"
      >
        {name?.charAt(0)}
      </div>

      <h3 className="text-xl font-medium">
        {name}
      </h3>

      <p className="text-[var(--text-soft)]">
        {role}
      </p>

    </motion.div>
  );
}