import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { galleryData } from "../data/galleryData";
import { useState } from "react";
import ScrollProgressBar from "../components/ScrollProgress";

export default function GalleryImages() {

  const { category, sub } = useParams();

  const categoryData = galleryData.find(
    (item) => item.slug === category
  );

  const subCategory = categoryData?.subcategories.find(
    (s) => s.slug === sub
  );

  const [activeIndex, setActiveIndex] = useState(null);

  if (!subCategory) return null;

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === subCategory.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? subCategory.images.length - 1 : prev - 1
    );
  };

  return (
    <>

    <ScrollProgressBar />
    
    <section className="bg-[#EFEAE3] min-h-screen py-24 px-6">

      <h1 className="text-5xl md:text-6xl font-playfair text-center mb-20">
        {subCategory.name}
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {subCategory.images.map((img, index) => (

          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >

            <img
              src={img.url}
              alt={img.title}
              className="w-full h-[420px] object-cover hover:scale-110 transition duration-700"
            />

          </motion.div>

        ))}

      </div>

    </section>

    {/* LIGHTBOX */}

    {activeIndex !== null && (

      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

        <button
          onClick={() => setActiveIndex(null)}
          className="absolute top-6 right-8 text-white text-4xl"
        >
          ✕
        </button>

        <button
          onClick={prevImage}
          className="absolute left-6 text-white text-5xl"
        >
          ‹
        </button>

        <img
          src={subCategory.images[activeIndex].url}
          className="max-h-[80vh] max-w-[90vw] object-contain"
        />

        <button
          onClick={nextImage}
          className="absolute right-6 text-white text-5xl"
        >
          ›
        </button>

      </div>

    )}

    <Footer />

    </>
  );

}