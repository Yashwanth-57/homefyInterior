import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import EstimateCalculator from "../components/EstimateCalculator";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectDetails() {



  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData[id];

  const [activeImage, setActiveImage] = useState(0);

useLayoutEffect(() => {

  const scrollContainer =
    document.documentElement ||
    document.body ||
    document.querySelector("*");

  scrollContainer.scrollTop = 0;

  window.scrollTo(0, 0);

}, []);

  if (!project) return null;



  return (

    <div className="min-h-screen bg-[#050505] text-white">


      {/* HERO IMAGE */}
      <div className="relative h-[60vh] overflow-hidden">

        <motion.img
          src={project.images[activeImage]}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute bottom-10 left-10">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-light mb-3"
          >
            {project.title}
          </motion.h1>

          <p className="text-yellow-400">
            {project.category}
          </p>

        </div>


        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 px-5 py-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition"
        >
          Back
        </button>

      </div>



      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid lg:grid-cols-2 gap-14">


          {/* LEFT SIDE */}
          <div>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              {project.description}
            </motion.p>



            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">

              <div className="bg-white/5 p-5 rounded-xl">
                <p className="text-white/50 text-sm">Location</p>
                <p className="text-white font-semibold">{project.location}</p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl">
                <p className="text-white/50 text-sm">Area</p>
                <p className="text-white font-semibold">{project.area}</p>
              </div>

              <div className="bg-white/5 p-5 rounded-xl">
                <p className="text-white/50 text-sm">Duration</p>
                <p className="text-white font-semibold">{project.duration}</p>
              </div>

            </div>



            {/* Highlights */}
            <div className="mb-10">

              <h3 className="text-xl mb-4">
                Project Highlights
              </h3>

              <div className="grid grid-cols-2 gap-3">

                {project.highlights.map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 p-4 rounded-lg"
                  >
                    {item}
                  </motion.div>

                ))}

              </div>

            </div>



            {/* Materials */}
            <div>

              <h3 className="text-xl mb-4">
                Materials Used
              </h3>

              <div className="flex flex-wrap gap-3">

                {project.materials.map((mat, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 bg-yellow-400 text-black rounded-full text-sm"
                  >
                    {mat}
                  </span>

                ))}

              </div>

            </div>



            {/* Gallery */}
            <div className="flex gap-3 mt-10">

              {project.images.map((img, index) => (

                <motion.img
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  src={img}
                  onClick={() => setActiveImage(index)}
                  className="
                    w-20 h-20 object-cover rounded cursor-pointer
                    border border-transparent hover:border-yellow-400
                  "
                />

              ))}

            </div>


          </div>



          {/* RIGHT SIDE CALCULATOR */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="
              bg-white/5
              p-8
              rounded-2xl
              backdrop-blur
              border border-white/10
              sticky top-20
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