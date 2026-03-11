import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { galleryData } from "../data/galleryData";

export default function GalleryCategory() {

  const { category } = useParams();
  const navigate = useNavigate();

  const categoryData = galleryData.find(
    (item) => item.slug === category
  );

  if (!categoryData) return null;

  return (

    <>
    
    <section className="bg-[#EFEAE3] min-h-screen py-24 px-6">

      <h1 className="text-5xl md:text-6xl font-playfair text-center mb-20">
        {categoryData.name}
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {categoryData.subcategories.map((sub) => (

          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            onClick={() =>
              navigate(`/gallery/${category}/${sub.slug}`)
            }
            className="cursor-pointer rounded-2xl overflow-hidden relative group shadow-md"
          >

            <img
              src={sub.coverImage}
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex items-center justify-center transition">

              <h2 className="text-white text-3xl font-playfair">
                {sub.name}
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