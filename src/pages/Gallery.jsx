import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const categories = [

  {
    id: "living-room",
    name: "Living Room",
    cover: "https://images.unsplash.com/photo-1618220179428-22790b461013"
  },

  {
    id: "kitchen",
    name: "Kitchen",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },

  {
    id: "bedroom",
    name: "Bedroom",
    cover: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0"
  },

  {
    id: "wardrobe",
    name: "Wardrobe",
    cover: "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
  },

  {
    id: "dining",
    name: "Dining",
    cover: "https://images.unsplash.com/photo-1617806118233-18e1de247200"
  }

];

export default function Gallery() {

  const navigate = useNavigate();

  return (

    <>

    <section className="bg-[#EFEAE3] min-h-screen py-20 px-6">

      <h1 className="text-5xl font-playfair text-center mb-16">
        Gallery
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {categories.map((cat, index) => (

          <motion.div

            key={cat.id}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            whileHover={{ scale: 1.04 }}

            onClick={() => navigate(`/gallery/${cat.id}`)}

            className="cursor-pointer rounded-2xl overflow-hidden relative group"
          >

            <img
              src={cat.cover}
              className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center">

              <h2 className="text-white text-2xl font-playfair">
                {cat.name}
              </h2>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
   < Footer />
    </>

  );

}