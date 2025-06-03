import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-cyan-50 via-white to-indigo-50 shadow-md"
            : "bg-transparent"
        }`}
        aria-label="Primary Navigation"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`text-3xl font-extrabold tracking-wide ${
              isScrolled ? "text-cyan-700" : "text-white"
            } hover:text-cyan-600 transition-colors`}
            aria-label="Reunios Homepage"
          >
            Reunios
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12 font-medium">
            {navItems.map(({ name, to }) => {
              const isActive = location.pathname === to;
              return (
                <li key={name}>
                  <Link
                    to={to}
                    className={`relative inline-block px-2 py-1 transition-colors ${
                      isActive
                        ? "text-cyan-700 font-semibold"
                        : isScrolled
                        ? "text-gray-700 hover:text-cyan-700"
                        : "text-white hover:text-cyan-200"
                    }`}
                  >
                    {name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-700 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-700 ${
              isScrolled ? "text-cyan-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-gradient-to-b from-cyan-50 via-white to-indigo-50 shadow-lg border-t border-gray-200">
            <ul className="flex flex-col py-4 space-y-4 text-cyan-700 font-semibold">
              {navItems.map(({ name, to }) => {
                const isActive = location.pathname === to;
                return (
                  <li key={name} className="px-6">
                    <Link
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 rounded hover:bg-cyan-100 transition-colors ${
                        isActive ? "bg-cyan-100" : ""
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

      {/* Spacer so content isn't hidden under fixed navbar */}
      {/* <div className="h-16 md:h-20"></div> */}
    </>
  );
}
