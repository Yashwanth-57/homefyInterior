import { motion } from "framer-motion";

export default function About() {

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Design Experts" },
  ];

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* BACKGROUND ACCENT */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C6A75E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">


        {/* LEFT SIDE IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800"
            className="w-full h-[520px] object-cover rounded-xl shadow-xl"
          />

          {/* Floating image */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600"
            className="
              absolute
              bottom-[-40px]
              right-[-40px]
              w-[240px]
              h-[300px]
              object-cover
              rounded-xl
              border-4 border-white
              shadow-xl
            "
          />

        </motion.div>


        {/* RIGHT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Label */}
          <p className="text-[#C6A75E] tracking-[0.3em] text-sm mb-4">
            ABOUT OUR STUDIO
          </p>


          {/* Heading */}
          <h2 className="text-5xl mb-6 text-[#2B2B2B] font-playfair leading-tight">

            Designing Timeless
            <br />

            Luxury Interiors

          </h2>


          {/* Description */}
          <p className="text-[#5E5E5E] leading-relaxed mb-6 text-lg">

            At Homecraft Interiors, we believe luxury is not just about beauty —
            it's about creating spaces that reflect personality, comfort, and
            timeless elegance.

            Our team combines creativity, premium materials, and precision
            craftsmanship to transform ordinary spaces into extraordinary living
            experiences.

          </p>


          <p className="text-[#5E5E5E] leading-relaxed mb-10">

            Every project we design is tailored uniquely to our clients —
            ensuring sophistication, functionality, and long-lasting value.

          </p>



          {/* STATS GRID */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((stat, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -5 }}

                className="
                  bg-white
                  p-6
                  rounded-xl
                  shadow-md
                  border border-[#E8DFC8]
                "
              >

                <h3 className="text-3xl text-[#C6A75E] font-semibold">
                  {stat.number}
                </h3>

                <p className="text-[#6B6B6B]">
                  {stat.label}
                </p>

              </motion.div>

            ))}

          </div>


        </motion.div>


      </div>

    </section>

  );

}