import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Years Experience" },
];

export default function Stats() {

  return (

    <section className="bg-black py-32">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 text-center gap-10">

        {stats.map((stat, i) => (

          <motion.div

            key={i}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 1 }}

            className="text-white"

          >

            <h2 className="text-5xl font-bold">
              {stat.number}
            </h2>

            <p className="text-white/60 mt-2">
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>

  );

}