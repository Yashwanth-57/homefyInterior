import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { galleryData } from "../data/galleryData";
import ScrollProgressBar from "../components/ScrollProgress";

export default function Gallery() {

  const navigate = useNavigate();

  return (

    <>
    <ScrollProgressBar />
    
    <section className="bg-[#EFEAE3] min-h-screen py-24 px-6">

      <h1 className="section-title text-center p-10">
        Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {galleryData.map((cat) => (

          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate(`/gallery/${cat.slug}`)}
            className="cursor-pointer rounded-2xl overflow-hidden relative group shadow-md"
          >

            <img
              src={cat.coverImage}
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">

              <h2 className="text-white text-3xl md:text-4xl font-playfair tracking-wide">
                {cat.name}
              </h2>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

    <Footer />

    </>

  );

}