import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function SolutionCard({ solution }) {

  return (

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >

      <Link
        to={`/solutions/${solution.slug}`}
        className="
        group
        block
        rounded-2xl
        overflow-hidden
        bg-white
        border border-neutral-200
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)]
        transition-all duration-500
        "
      >

        {/* IMAGE */}
        <div className="relative overflow-hidden">

          <img
            src={solution.cover}
            className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-[1200ms]
            group-hover:scale-110
            "
          />

          {/* luxury overlay */}
          <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/40
          via-transparent
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          " />

          {/* hover label */}
          <div className="
          absolute bottom-4 left-6
          text-white
          text-sm
          tracking-widest
          opacity-0
          group-hover:opacity-100
          transition
          ">
            VIEW DETAILS →
          </div>

        </div>


        {/* CONTENT */}
        <div className="p-6 bg-white">

          <h3 className="
          text-xl
          font-semibold
          text-neutral-800
          group-hover:text-[#C79B3B]
          transition
          ">
            {solution.title}
          </h3>

        </div>

      </Link>

    </motion.div>

  );

}