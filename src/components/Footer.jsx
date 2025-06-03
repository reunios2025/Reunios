import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setMsg('Thanks for subscribing!');
      setEmail('');
    } else {
      setMsg('Please enter a valid email address.');
    }
  };

  return (
    <footer className="bg-gradient-to-r from-cyan-50 via-white to-indigo-50 text-gray-800 py-16 shadow-inner">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-cyan-700 tracking-tight">
            Reunios
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Premium vacation rentals combining comfort, style, and unforgettable experiences. Your next perfect getaway awaits.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-cyan-700">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/properties', label: 'Properties' },
              { to: '/contact', label: 'Contact' },
              { to: '/terms', label: 'Terms of Service' },
              { to: '/privacy', label: 'Privacy Policy' },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="hover:text-cyan-600 transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-cyan-700">Contact Info</h3>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-cyan-600" />
              <a href="tel:+15551234567" className="hover:text-cyan-600 transition">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-6 w-6 text-cyan-600" />
              <a
                href="mailto:contact@sidharthospitality.com"
                className="hover:text-cyan-600 transition"
              >
                contact@sidharthospitality.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="h-6 w-6 text-cyan-600" />
              <address className="not-italic">
                123 Hospitality Lane,<br />San Francisco, CA, USA
              </address>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-cyan-700">Stay Connected</h3>

          {/* Social Icons */}
          <div className="flex gap-6 mb-8">
            <SocialIcon
              href="https://facebook.com"
              ariaLabel="Facebook"
              svgPath="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 17 22 12z"
            />
            <SocialIcon
              href="https://twitter.com"
              ariaLabel="Twitter"
              svgPath="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9 9 0 01-2.85 1.1 4.52 4.52 0 00-7.71 4.13A12.84 12.84 0 013 4.88a4.52 4.52 0 001.4 6.05 4.44 4.44 0 01-2.05-.57v.06a4.53 4.53 0 003.63 4.44 4.52 4.52 0 01-2.04.07 4.52 4.52 0 004.21 3.15A9 9 0 013 19.54 12.74 12.74 0 009.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18 0-.36-.01-.54A8.18 8.18 0 0023 3z"
            />
            <SocialIcon
              href="https://instagram.com"
              ariaLabel="Instagram"
              svgPath="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zm-5 3a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
            />
            <SocialIcon
              href="https://linkedin.com"
              ariaLabel="LinkedIn"
              svgPath="M4.98 3.5C3.34 3.5 2 4.86 2 6.5c0 1.65 1.34 3 2.98 3 1.64 0 2.98-1.35 2.98-3 0-1.64-1.34-3-2.98-3zM2 21.5h6v-11h-6v11zm7.5-11h5.5v1.5h.1c.76-1.35 2.62-2.8 5.4-2.8 5.8 0 6.8 3.8 6.8 8.7v10.6h-6v-9.4c0-2.3-.04-5.3-3.2-5.3-3.2 0-3.7 2.5-3.7 5.1v9.6h-6v-11z"
            />
          </div>

          {/* Newsletter small */}
          <form onSubmit={handleSubscribe} className="flex flex-col max-w-xs">
            <label htmlFor="footer-email" className="mb-2 font-semibold text-cyan-700">
              Subscribe to our newsletter
            </label>
            <div className="flex gap-2">
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <button
                type="submit"
                className="bg-cyan-600 text-white rounded-md px-4 py-2 hover:bg-cyan-700 transition"
              >
                Subscribe
              </button>
            </div>
            {msg && (
              <p className="mt-2 text-sm text-green-600 font-semibold">{msg}</p>
            )}
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm select-none">
        © 2025 Hot Tub Condos. All rights reserved.
      </div>
    </footer>
  );
}

// Social Icon Component to reduce repetition
function SocialIcon({ href, ariaLabel, svgPath }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="hover:text-cyan-600 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d={svgPath} />
      </svg>
    </a>
  );
}

export default Footer;
