import { useState, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // ✅ useMemo prevents unnecessary re-creations
  const navLinks = useMemo(
    () => [
      { name: "Home", path: "/" },
      { name: "Fleet", path: "/fleet" },
      { name: "Services", path: "/services" },
      { name: "About", path: "/about" },
      { name: "Contact", path: "/contact" },
    ],
    []
  );

  // ✅ Extracted to simplify JSX
  const isActive = (path) =>
    location.pathname === path ? "text-yellow-400" : "text-primary-foreground";

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-3 md:py-4">
          {/* Logo + Marquee Section */}
          <div className="flex flex-col items-center md:items-start leading-tight space-y-2">
            <Link to="/" className="flex flex-col items-center md:items-start">
              <h1 className="text-center md:text-left text-[1.5rem] leading-[1.2] font-[550] text-[#FFD700] font-display">
                Superior Limousine LLC
                <br />
                Executive Transportation
              </h1>
            </Link>

            {/* Marquee */}
            <div className="relative w-72 md:w-56 overflow-hidden">
              <motion.div
                className="text-sm md:text-base font-sans text-yellow-400 whitespace-nowrap text-center"
                animate={{ x: ["200%", "-200%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                • &nbsp; We wait for you &nbsp; • &nbsp; We wait for you &nbsp;• &nbsp; We wait for you &nbsp; •
              </motion.div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 mt-3 md:mt-0">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`font-sans text-sm font-medium transition-colors hover:text-yellow-400 ${isActive(
                  path
                )}`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-primary-foreground mt-3 md:mt-0"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-sans text-sm font-medium transition-colors hover:text-yellow-400 ${isActive(
                  path
                )}`}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
