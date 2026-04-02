import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/projects" },
    { name: "Feedback", path: "/feedback" },
    { name: "Smart Solutions", path: "/solutions" },
    { name: "Consultation", path: "/consultation" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500

        ${
          scrolled
            ? "bg-[#F7F3ED]/95 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-b border-[#E6D8B5]"
            : "bg-[#F7F3ED]/70 backdrop-blur-xl border-b border-[#E6D8B5]/40"
        }
      `}
    >

      <div className={`
        max-w-7xl mx-auto px-6 
        flex justify-between items-center
        transition-all duration-500
        ${scrolled ? "py-3" : "py-5"}
      `}>

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="
            cursor-pointer 
            text-[#1F1F1F] 
            text-xl md:text-2xl 
            font-playfair 
            tracking-wide
            hover:opacity-80 transition
          "
        >
          Homecraft Interiors
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-10">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <div key={index} className="relative group">

                <button
                  onClick={() => navigate(item.path)}
                  className={`
                    text-[15px]
                    tracking-[0.08em]
                    transition-all duration-300
                    relative

                    ${
                      isActive
                        ? "text-[#B8964A] font-semibold"
                        : "text-[#3A3A3A] group-hover:text-[#1F1F1F]"
                    }
                  `}
                >
                  {/* ✨ TEXT HOVER LIFT */}
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    {item.name}
                  </motion.span>
                </button>

                {/* 🔥 PREMIUM UNDERLINE */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="
                    absolute left-0 -bottom-2 h-[2px]
                    bg-gradient-to-r from-[#C6A75E] via-[#E6D8B5] to-[#C6A75E]
                    rounded-full
                  "
                />

              </div>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="
            md:hidden text-2xl 
            text-[#1F1F1F]
            hover:scale-110 transition
          "
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-[#F7F3ED] border-t border-[#E6D8B5]"
        >
          <div className="flex flex-col px-6 py-6">

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative py-3"
                >

                  <button
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className={`
                      w-full text-left text-lg tracking-[0.05em]
                      transition-all duration-300

                      ${
                        isActive
                          ? "text-[#B8964A] font-semibold"
                          : "text-[#2B2B2B]"
                      }
                    `}
                  >
                    {item.name}
                  </button>

                  {/* MOBILE UNDERLINE */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline-mobile"
                      className="
                        mt-2 h-[2px] w-16 
                        bg-gradient-to-r from-[#C6A75E] to-[#E6D8B5]
                        rounded-full
                      "
                    />
                  )}

                </motion.div>
              );
            })}

          </div>
        </motion.div>
      )}

    </motion.nav>
  );
}