import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Education", "Project", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white ${
        scrolled
          ? "bg-black/50 backdrop-blur-md"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-3 sm:py-4 px-4 sm:px-6">
        <h1 className="font-bold bg-transparent text-base sm:text-lg">Portfolio</h1>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-purple-400 transition-colors duration-300 inline-block overflow-hidden nav-scroll"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 sm:px-6 py-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-purple-400 transition-colors duration-300 text-center py-2"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
