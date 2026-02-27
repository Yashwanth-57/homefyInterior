import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function About() {

  return (

    <div className="bg-[var(--bg-main)] min-h-screen">

      

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
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

            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}

            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400"

            className="rounded-2xl shadow-xl"

          />

        </div>

      </section>



      {/* STATS SECTION */}
      <section className="py-20 bg-[var(--bg-soft)]">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10">

          <Stat number="120+" label="Projects Completed" />
          <Stat number="80+" label="Happy Clients" />
          <Stat number="5+" label="Years Experience" />
          <Stat number="15+" label="Design Experts" />

        </div>

      </section>



      {/* STORY */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto text-center">

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

        </div>

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

            <TeamCard
              img="https://randomuser.me/api/portraits/women/44.jpg"
              name="Ananya Sharma"
              role="Senior Interior Designer"
            />

            <TeamCard
              img="https://randomuser.me/api/portraits/men/32.jpg"
              name="Rahul Verma"
              role="Architect"
            />

            <TeamCard
              img="https://randomuser.me/api/portraits/women/68.jpg"
              name="Meera Kapoor"
              role="Creative Director"
            />

          </div>

        </div>

      </section>


      <Footer />

    </div>

  );
}



function Stat({ number, label }) {

  return (
    <div>

      <h3 className="text-4xl text-[var(--accent-gold)] mb-2">
        {number}
      </h3>

      <p className="text-[var(--text-soft)]">
        {label}
      </p>

    </div>
  );

}



function TeamCard({ img, name, role }) {

  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">

      <img
        src={img}
        className="w-28 h-28 rounded-full mx-auto mb-4"
      />

      <h3 className="text-xl font-medium">
        {name}
      </h3>

      <p className="text-[var(--text-soft)]">
        {role}
      </p>

    </div>
  );
}