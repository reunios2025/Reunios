import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';
import ScrollToTop from './components/ScrollToTop';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/properties" element={<Properties />} /> */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;