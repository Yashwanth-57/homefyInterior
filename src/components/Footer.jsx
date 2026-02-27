import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  const handleWhatsApp = () => {
    const phone = "917799448384";
    const message = "Hello, I want to discuss my interior design project.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (

    <footer className="bg-[#0A0A0A] text-white pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-playfair mb-4"
          >
            HOMECRAFT INTERIORS
          </motion.h1>

          <p className="text-white/60 leading-relaxed">
            We design elegant, functional, and luxurious interiors
            tailored to your lifestyle and personality.
          </p>

          <button
            onClick={handleWhatsApp}
            className="
              mt-6
              px-6 py-3
              bg-[#C6A75E]
              text-black
              rounded-full
              hover:scale-105
              transition
              font-semibold
            "
          >
            WhatsApp Us
          </button>

        </div>


        {/* Navigation */}
        <div>

          <h3 className="mb-4 font-semibold text-white">
            Navigation
          </h3>

          <ul className="space-y-3 text-white/60">

            <li
              onClick={() => navigate("/")}
              className="hover:text-[#C6A75E] cursor-pointer transition"
            >
              Home
            </li>

            <li
              onClick={() => navigate("/projects")}
              className="hover:text-[#C6A75E] cursor-pointer transition"
            >
              Projects
            </li>
              <li
              onClick={() => navigate("/gallery")}
              className="hover:text-[#C6A75E] cursor-pointer transition"
            >
              Gallery
            </li>

            <li
              onClick={() => navigate("/consultation")}
              className="hover:text-[#C6A75E] cursor-pointer transition"
            >
              Consultation
            </li>

            <li
              onClick={() => navigate("/about")}
              className="hover:text-[#C6A75E] cursor-pointer transition"
            >
              About
            </li>

          </ul>

        </div>


        {/* Services */}
        <div>

          <h3 className="mb-4 font-semibold text-white">
            Services
          </h3>

          <ul className="space-y-3 text-white/60">

            <li className="hover:text-[#C6A75E] transition">
              Modular Kitchen
            </li>

            <li className="hover:text-[#C6A75E] transition">
              Living Room Design
            </li>

            <li className="hover:text-[#C6A75E] transition">
              Bedroom Interiors
            </li>

            <li className="hover:text-[#C6A75E] transition">
              Full Home Interiors
            </li>

          </ul>

        </div>


        {/* Contact Info */}
        <div>

          <h3 className="mb-4 font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-3 text-white/60">

            <p>
              📞 +91 77994 48384
            </p>

            <p>
              📧 sales@homecraftinteriors.co.in
            </p>

            <p>
              📍 Hyderabad, India
            </p>

          </div>

        </div>

      </div>


      {/* Divider */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-white/40">

        © 2026 HOMECRAFT INTERIORS. All Rights Reserved.

      </div>

    </footer>

  );

}