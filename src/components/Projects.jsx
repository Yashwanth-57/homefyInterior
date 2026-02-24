// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useRef } from "react";

// const projects = [
//   {
//     img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
//     title: "Luxury Living Room",
//     category: "Residential Interior",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
//     title: "Modern Kitchen",
//     category: "Modular Design",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
//     title: "Premium Bedroom",
//     category: "Luxury Interior",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
//     title: "Elegant Workspace",
//     category: "Office Interior",
//   },
// ];

// export default function Projects() {

//   return (

//     <section className="bg-[#070707] py-20 md:py-32 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-5 md:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true }}
//           className="mb-16 md:mb-24 text-center md:text-left"
//         >

//           <h2
//             className="text-white text-3xl md:text-6xl"
//             style={{ fontFamily: "Playfair Display" }}
//           >
//             Featured Projects
//           </h2>

//           <p className="text-white/40 mt-4 max-w-xl">
//             Designed with precision. Built with luxury. Experienced with emotion.
//           </p>

//         </motion.div>


//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

//           {projects.map((project, index) => (
//             <ProjectCard project={project} index={index} key={index} />
//           ))}

//         </div>

//       </div>

//     </section>

//   );

// }



// function ProjectCard({ project, index }) {

//   const ref = useRef(null);

//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-50, 50], [8, -8]);
//   const rotateY = useTransform(x, [-50, 50], [-8, 8]);


//   function handleMouseMove(e) {

//     const rect = ref.current.getBoundingClientRect();

//     const mouseX = e.clientX - rect.left - rect.width / 2;
//     const mouseY = e.clientY - rect.top - rect.height / 2;

//     x.set(mouseX / 10);
//     y.set(mouseY / 10);
//   }

//   function handleMouseLeave() {
//     x.set(0);
//     y.set(0);
//   }


//   return (

//     <motion.div

//       ref={ref}

//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}

//       initial={{ opacity: 0, y: 120 }}
//       whileInView={{ opacity: 1, y: 0 }}

//       transition={{
//         duration: 1.2,
//         delay: index * 0.2
//       }}

//       viewport={{ once: true }}

//       style={{
//         rotateX,
//         rotateY,
//         transformStyle: "preserve-3d"
//       }}

//       className="group relative cursor-pointer"
//     >

//       {/* glow */}
//       <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 rounded-3xl">
//       </div>


//       {/* image */}
//       <motion.img

//         src={project.img}

//         className="w-full h-[300px] md:h-[520px] object-cover rounded-3xl"

//         whileHover={{
//           scale: 1.06
//         }}

//         transition={{
//           duration: 0.6
//         }}

//       />


//       {/* overlay */}
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition duration-500">
//       </div>


//       {/* text */}
//       <motion.div

//         initial={{ y: 80, opacity: 0 }}
//         whileHover={{ y: 0, opacity: 1 }}

//         transition={{ duration: 0.5 }}

//         className="absolute bottom-8 left-8 z-10"
//       >

//         <h3 className="text-white text-xl md:text-3xl"
//           style={{ fontFamily: "Playfair Display" }}>
//           {project.title}
//         </h3>

//         <p className="text-white/60 mt-2">
//           {project.category}
//         </p>

//       </motion.div>

//     </motion.div>

//   );

// }
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

const projects = [
  { img: "https://images.unsplash.com/photo-1618220179428-22790b461013", title: "Luxury Living Room", category: "Residential Interior" },
  { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", title: "Modern Kitchen", category: "Modular Design" },
  { img: "https://images.unsplash.com/photo-1600210492493-0946911123ea", title: "Premium Bedroom", category: "Luxury Interior" },
  { img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed", title: "Office Interior", category: "Commercial Design" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="bg-[#0E0E0E] py-20 md:py-32 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center"
      >
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-light" style={{ fontFamily: "Playfair Display" }}>
          Featured Projects
        </h2>
        <div className="w-24 h-[3px] mx-auto bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mt-6 rounded"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
            onClick={() => setSelectedProject(project)}
          >
            <motion.img
              src={project.img}
              className="w-full h-[300px] sm:h-[350px] md:h-[420px] lg:h-[450px] object-cover rounded-3xl border border-transparent group-hover:border-yellow-400 transition-all duration-500"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.8 }}
            />
            {/* Hover overlay title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-5 left-5 bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md"
            >
              <h3 className="text-white text-lg sm:text-xl font-semibold">{project.title}</h3>
              <p className="text-yellow-400 text-sm">{project.category}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}