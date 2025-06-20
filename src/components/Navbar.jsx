import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import logo from "../../Reunios/assets/logo.png";
import logo from "../../public/assets/logo.png";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  // { name: "Properties", to: "/properties" },
  { name: "Careers", to: "/careers" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Detect scroll for background change
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 70);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl md:text-3xl flex items-center gap-3 font-bold tracking-wide transition-colors ${
              isScrolled ? "text-cyan-700" : "text-white"
            } hover:text-cyan-600`}
            aria-label="Reunios Homepage"
          >
            <img src={logo} alt="" className="w-10 h-10" />
            Reunios
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-semibold">
            {navItems.map(({ name, to }) => {
              const isActive = location.pathname === to;
              return (
                <li key={name}>
                  <Link
                    to={to}
                    className={`relative px-3 py-2 transition-colors ${
                      isActive
                        ? isScrolled
                          ? "text-cyan-700"
                          : "text-cyan-400"
                        : isScrolled
                          ? "text-gray-700 hover:text-cyan-700"
                          : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {name}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                          isScrolled ? "bg-cyan-700" : "bg-cyan-400"
                        }`}
                      ></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 transition-colors ${
              isScrolled ? "text-cyan-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <ul className="flex flex-col py-4 space-y-2">
              {navItems.map(({ name, to }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={name} className="px-6">
                    <Link
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-3 px-4 rounded-lg transition-colors font-semibold ${
                        isActive
                          ? "bg-cyan-100 text-cyan-700"
                          : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-700"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
