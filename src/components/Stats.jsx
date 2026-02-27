import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
];

export default function Stats() {

  return (

    <section className="py-32 bg-[#F5F1EB]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >

          <h2 className="
            text-[#2B2B2B]
            text-4xl
            md:text-5xl
            font-playfair
          ">
            Our Excellence in Numbers
          </h2>

          <div className="w-20 h-[2px] bg-[#C6A75E] mx-auto mt-6" />

        </motion.div>


        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10">

          {stats.map((stat, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="
                bg-white/60
                backdrop-blur-md
                border border-[#E8DFC8]
                rounded-2xl
                py-14
                hover:shadow-xl
                hover:scale-105
                transition-all duration-300
                text-center
              "
            >

              <h3 className="
                text-5xl
                font-semibold
                text-[#C6A75E]
                mb-3
              ">
                {stat.number}
              </h3>

              <p className="text-[#6B645C] text-lg">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}