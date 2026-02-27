import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/ProjectsData";
import Footer from "../components/Footer";


export default function Projects() {

  const navigate = useNavigate();

  return (

    <>

    <section className="bg-[#F8F9FA] py-24 md:py-32">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 mb-20 text-center"
      >

        <p className="text-[#C6A87D] uppercase tracking-[4px] text-sm mb-4">
          Our Work
        </p>

        <h2 className="text-[#111111] text-4xl md:text-5xl font-light">
          Crafted Luxury Spaces
        </h2>

        <div className="w-20 h-[2px] mx-auto bg-[#C6A87D] mt-6"></div>

      </motion.div>


      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {projectsData.map((project, index) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(`/projects/${project.id}`)}
            className="group cursor-pointer"
          >

            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-500">

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.images[0]}
                  className="
                    w-full
                    h-[320px]
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                />

              </div>


              {/* Content */}
              <div className="p-6 text-center">

                <p className="text-[#C6A87D] text-sm mb-2">
                  {project.category}
                </p>

                <h3 className="text-[#111111] text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <div className="w-10 h-[2px] bg-[#C6A87D] mx-auto mt-3 group-hover:w-16 transition-all duration-500"></div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

 <Footer />
    </>



  );
}