import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const images = {
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

export default function ProjectGallery() {

  const { category } = useParams();

  const [selected, setSelected] = useState(null);

  const gallery = images[category] || [];

  return (

    <section className="bg-[#EFEAE3] min-h-screen py-20 px-6">

      <h1 className="text-4xl font-playfair text-center mb-12 capitalize">
        {category} Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {gallery.map((img, i) => (

          <motion.img
            key={i}
            src={img}

            whileHover={{ scale: 1.05 }}

            onClick={() => setSelected(img)}

            className="
              cursor-pointer
              rounded-xl
              h-[350px]
              w-full
              object-cover
            "
          />

        ))}

      </div>

      {/* Full Screen Modal */}
      {selected && (

        <div
          onClick={() => setSelected(null)}
          className="
            fixed inset-0
            bg-black/90
            flex items-center justify-center
            z-50
          "
        >

          <img
            src={selected}
            className="
              max-h-[90%]
              max-w-[90%]
              rounded-xl
            "
          />

        </div>

      )}

    </section>

  );
}