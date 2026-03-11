import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HeroAnnouncement from "./HomeAnnoncemnet";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery"},
  { name: "Projects", path: "/projects" },
  { name: "Feeback", path: "/feedback"},

  { name: "Smart Solutions", path: "/solutions", special: true },

  { name: "Consultation", path: "/consultation" },
];


  return (
    

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}

      className={`
       fixed top-0 left-0 w-full z-50
transition-all duration-500
navbar-luxury-bg

        ${
          scrolled
            ? "bg-[#F5F1EB]/95 backdrop-blur-xl shadow-md border-b border-[#E8DFC8]"
            : "bg-[#F5F1EB]/70 backdrop-blur-lg border-b border-[#E8DFC8]/40"
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}

          className="
            cursor-pointer
            text-[#2B2B2B]
            text-xl md:text-2xl
            font-playfair
          "
        >
          Homecraft Interiors
        </motion.div>


        {/* Desktop menu */}
        <div className="hidden md:flex gap-10">

          {navItems.map((item, index) => (

  <motion.button
  key={index}
  onClick={() => navigate(item.path)}
  className={`
    font-medium flex gap-[1px]

    ${
      !item.special
        ? location.pathname === item.path
          ? "text-[#C6A75E]"
          : "text-[#3E3E3E] hover:text-black"
        : ""
    }
  `}
>
  {item.special
    ? item.name.split("").map((letter, i) => (
        <motion.span
          key={i}
          animate={{
            color: [
              "#ff4d4d",
              "#facc15",
              "#22c55e",
              "#38bdf8",
              "#a855f7",
              "#ff4d4d"
            ],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`
            ${
              i % 3 === 0
                ? "font-bold"
                : "font-medium"
            }
          `}
        >
          {letter}
        </motion.span>
      ))
    : item.name}
</motion.button>

))}

        </div>


        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}

          className="
            md:hidden
            text-[#2B2B2B]
            text-2xl
          "
        >
          ☰
        </button>

      </div>


      {/* Mobile menu */}
      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          className="
            md:hidden
            bg-[#F5F1EB]
            backdrop-blur-xl
            border-t border-[#E8DFC8]
          "
        >

          <div className="flex flex-col items-center py-8 gap-6">

            {navItems.map((item, index) => (

              <button
                key={index}

                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}

                className="
                  text-[#2B2B2B]
                  text-lg
                  hover:text-[#C6A75E]
                  transition
                "
              >
                {item.name}
              </button>

            ))}


          </div>

        </motion.div>

      )}

    </motion.nav>
    

  );

}