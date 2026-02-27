import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = {

  "living-room": [
    "https://images.unsplash.com/photo-1618220179428-22790b461013",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    "https://images.unsplash.com/photo-1617806118233-18e1de247200"
  ],

  kitchen: [
    "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    "https://images.unsplash.com/photo-1600488999416-6a27d36c5e2f",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
  ],

  bedroom: [
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a"
  ]

};

export default function GalleryCategory() {

  const { category } = useParams();

  const images = galleryImages[category] || [];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (

    <section className="bg-[#F4F1EB] min-h-screen py-24 px-6">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-5xl md:text-6xl font-playfair text-center mb-20 capitalize text-[#1A1A1A]"
      >
        {category.replace("-", " ")}
      </motion.h1>


      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {images.map((img, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-2xl cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >

            <motion.img

              src={img}

              className="w-full h-[400px] object-cover hover:scale-110 transition duration-700"

            />

          </motion.div>

        ))}

      </div>



      {/* ULTRA PREMIUM VIEWER */}
      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center"

          >

            {/* close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-8 right-10 text-white text-4xl"
            >
              ×
            </button>


            {/* prev */}
            <button
              onClick={prevImage}
              className="absolute left-10 text-white text-5xl"
            >
              ‹
            </button>


            {/* image */}
            <motion.img

              key={selectedIndex}

              src={images[selectedIndex]}

              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}

              transition={{ duration: 0.4 }}

              className="max-h-[85vh] max-w-[85vw] object-contain rounded-xl shadow-2xl"

            />


            {/* next */}
            <button
              onClick={nextImage}
              className="absolute right-10 text-white text-5xl"
            >
              ›
            </button>


            {/* counter */}
            <div className="absolute bottom-10 text-white text-lg">
              {selectedIndex + 1} / {images.length}
            </div>


          </motion.div>

        )}

      </AnimatePresence>

    </section>

  );

}