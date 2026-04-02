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
            ? "bg-[#F5F1EB]/95 backdrop-blur-xl shadow-md border-b border-[#E8DFC8]"
            : "bg-[#F5F1EB]/70 backdrop-blur-lg border-b border-[#E8DFC8]/40"
        }
      `}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="
            cursor-pointer 
            text-[#1A1A1A]
            text-2xl md:text-3xl
            font-bold
            tracking-wide
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

                <motion.button
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => navigate(item.path)}
                  className={`
                    text-[16px]
                    font-semibold   /* 🔥 thicker */
                    tracking-[0.1em]

                    ${
                      isActive
                        ? "text-[#C6A75E]"
                        : "text-[#2B2B2B]"
                    }
                  `}
                >
                  {item.name}
                </motion.button>

                {/* 🔥 ACTIVE UNDERLINE */}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#C6A75E] rounded-full shadow-[0_0_10px_rgba(198,167,94,0.6)]"
                  />
                )}

                {/* 🔥 HOVER LINE */}
                {!isActive && (
                  <div className="absolute left-0 -bottom-2 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></div>
                )}

              </div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#2B2B2B]"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-[#F5F1EB] border-t border-[#E8DFC8]"
        >
          <div className="flex flex-col px-6 py-6">

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div key={index} className="relative py-4">

                  <button
                    onClick={() => {
                      navigate(item.path);
                      setOpen(false);
                    }}
                    className={`
                      w-full text-left
                      text-xl
                      font-semibold   /* 🔥 thicker */
                      tracking-[0.08em]

                      ${
                        isActive
                          ? "text-[#C6A75E]"
                          : "text-[#1A1A1A]"
                      }
                    `}
                  >
                    {item.name}
                  </button>

                  {isActive && (
                    <motion.div
                      layoutId="nav-underline-mobile"
                      className="mt-2 h-[3px] w-16 bg-[#C6A75E] rounded-full"
                    />
                  )}

                </div>
              );
            })}

          </div>
        </motion.div>
      )}

    </motion.nav>
  );
}