import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-white text-xl md:text-2xl font-light"
          style={{ fontFamily: "Playfair Display" }}
        >
          Homecraft Interiors
        </motion.a>


        <div className="hidden md:flex gap-10">

          {navItems.map((item, index) => (

            <a
              key={index}
              href={item.link}
              className="text-white/80 hover:text-yellow-400 transition"
            >
              {item.name}
            </a>

          ))}

        </div>


        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>


      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-black/95 backdrop-blur-lg"
        >

          <div className="flex flex-col items-center py-8 gap-6">

            {navItems.map((item, index) => (

              <a
                key={index}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-white text-lg hover:text-yellow-400"
              >
                {item.name}
              </a>

            ))}

          </div>

        </motion.div>

      )}

    </motion.nav>

  );
}