import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import EstimateCalculator from "../components/EstimateCalculator";
import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  const [activeImage, setActiveImage] = useState(0);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (

    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#F6F2EA] via-[#EFE8DB] to-[#E7DECE] text-[#1A1A1A]">


      {/* ================= AMBIENT LUXURY GLOW ================= */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[900px] h-[400px]
          bg-[radial-gradient(circle,rgba(198,167,94,0.20),transparent_70%)]
        "/>

        <div className="
          absolute bottom-0 right-0
          w-[600px] h-[300px]
          bg-[radial-gradient(circle,rgba(198,167,94,0.15),transparent_70%)]
        "/>

      </div>


      {/* ================= HERO ================= */}

      <div className="relative h-[70vh] overflow-hidden">

        <motion.img
          src={project.images[activeImage]}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
          className="w-full h-full object-cover"
        />

        {/* luxury champagne overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-[#F6F2EA]/95
          via-[#F6F2EA]/40
          to-transparent
        "/>


        {/* floating info card */}
        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          className="
            absolute bottom-12 left-1/2 -translate-x-1/2
            bg-white/70 backdrop-blur-xl
            border border-[#D6CFC2]
            shadow-[0_20px_60px_rgba(0,0,0,0.15)]
            rounded-2xl
            px-12 py-8
            text-center
          "
        >

          <h1
            className="text-5xl md:text-6xl font-light mb-3"
            style={{ fontFamily: "Playfair Display" }}
          >
            {project.title}
          </h1>

          <p className="text-[#C6A75E] tracking-wider font-medium">
            {project.category}
          </p>

        </motion.div>


        {/* Back button */}
        <button
          onClick={() => navigate("/projects")}
          className="
            absolute top-8 left-8
            bg-white/70 backdrop-blur-lg
            border border-[#D6CFC2]
            px-6 py-2
            rounded-full
            shadow-md
            hover:shadow-xl
            transition
          "
        >
          ← Back
        </button>

      </div>



      {/* ================= CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16">


          {/* ================= LEFT ================= */}

          <div>


            {/* description */}
            <motion.p

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}

              className="
                text-lg
                leading-relaxed
                text-[#4B4B4B]
                mb-12
              "
            >
              {project.description}
            </motion.p>



            {/* stats cards */}
            <div className="grid grid-cols-3 gap-6 mb-14">

              {[
                { label: "Location", value: project.location },
                { label: "Area", value: project.area },
                { label: "Duration", value: project.duration },
              ].map((item, i) => (

                <motion.div

                  key={i}

                  whileHover={{ y: -6 }}

                  className="
                    bg-white/70 backdrop-blur-xl
                    border border-[#D6CFC2]
                    p-6
                    rounded-xl
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  "
                >

                  <p className="text-sm text-[#777] mb-1">
                    {item.label}
                  </p>

                  <p className="font-semibold text-lg">
                    {item.value}
                  </p>

                </motion.div>

              ))}

            </div>



            {/* highlights */}
            <div className="mb-14">

              <h3 className="text-2xl mb-6 font-medium">
                Project Highlights
              </h3>

              <div className="grid grid-cols-2 gap-4">

                {project.highlights.map((item, i) => (

                  <motion.div

                    key={i}

                    whileHover={{ scale: 1.05 }}

                    className="
                      bg-white/70 backdrop-blur-lg
                      border border-[#D6CFC2]
                      p-4
                      rounded-lg
                      shadow-sm
                    "
                  >
                    {item}
                  </motion.div>

                ))}

              </div>

            </div>



            {/* materials */}
            <div className="mb-14">

              <h3 className="text-2xl mb-6 font-medium">
                Materials Used
              </h3>

              <div className="flex flex-wrap gap-3">

                {project.materials.map((mat, i) => (

                  <span
                    key={i}
                    className="
                      px-5 py-2
                      bg-[#C6A75E]/10
                      border border-[#C6A75E]/30
                      text-[#C6A75E]
                      rounded-full
                      font-medium
                    "
                  >
                    {mat}
                  </span>

                ))}

              </div>

            </div>



            {/* gallery */}
            <div>

              <h3 className="text-2xl mb-6 font-medium">
                Gallery
              </h3>

              <div className="flex gap-4 flex-wrap">

                {project.images.map((img, index) => (

                  <motion.img

                    key={index}

                    whileHover={{ scale: 1.12 }}

                    src={img}

                    onClick={() => setActiveImage(index)}

                    className="
                      w-24 h-24 object-cover rounded-lg cursor-pointer
                      border border-[#D6CFC2]
                      shadow-sm
                    "

                  />

                ))}

              </div>

            </div>


          </div>



          {/* ================= RIGHT CALCULATOR ================= */}

          <motion.div

            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}

            className="
              bg-white/80 backdrop-blur-xl
              border border-[#D6CFC2]
              p-8
              rounded-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              sticky top-24
              h-fit
            "
          >

            <EstimateCalculator project={project} />

          </motion.div>


        </div>

      </div>


    </div>

  );

}