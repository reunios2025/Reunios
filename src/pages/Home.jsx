import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import HeroImg from "../../public/assets/Hero_home.png";
import {
  SparklesIcon,
  StarIcon,
  MapPinIcon,
  UserGroupIcon,
  NewspaperIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from '../components/TopDestinations';

const images = {
  hero: "/Reunios/assets/Hero_home.png",
  about: "/Reunios/assets/corosal-img6.jpg",
  family1: '/Reunios/assets/family_img1.png',
  family2: '/Reunios/assets/family_img2.png',
  family3: '/Reunios/assets/family_img3.png',
  family4: '/Reunios/assets/family_img4.png',
  testimonial1: "/Reunios/assets/corosal-img1.jpg",
  testimonial2: "/Reunios/assets/corosal-img13.jpg",
  testimonial3: "/Reunios/assets/corosal-img14.jpg",
  carousel1: '/Reunios/assets/corosal-img3.jpg',
  carousel2: '/Reunios/assets/corosal-img6.jpg',
  carousel3: '/Reunios/assets/corosal-img8.jpg',
  carousel4: '/Reunios/assets/corosal-img9.jpg',
  carousel5: '/Reunios/assets/corosal-img10.jpg',
  carousel6: '/Reunios/assets/corosal-img11.jpg',
  carousel7: '/Reunios/assets/corosal-img12.jpg',
  carousel8: '/Reunios/assets/corosal-img13.jpg'
};

function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const carouselImages = [images.carousel1, images.carousel2, images.carousel3, images.carousel4,images.carousel5,images.carousel6,images.carousel7,images.carousel8];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: false,
    adaptiveHeight: false
  };

  const faqs = [
    {
      question: "What types of rentals do you offer?",
      answer:
        "We offer premium hotel-style apartments equipped with modern amenities located in prime neighborhoods.",
    },
    {
      question: "How do I book a stay?",
      answer:
        "You can contact us directly or use Airbnb listings to check availability and reserve your dates.",
    },
    {
      question: "What amenities are included?",
      answer:
        "All rentals include Wi-Fi, parking, kitchen facilities, smart TVs, and more for your comfort.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "We offer flexible cancellation depending on the property and booking platform policies.",
    },
  ];

  const testimonials = [
    {
      name: "John & Lisa",
      quote:
        "Amazing stay! The apartment was spotless and in a great location. Highly recommended.",
      rating: 5,
      image: images.testimonial1,
    },
    {
      name: "Michael S.",
      quote: "Perfect getaway with excellent hospitality and beautiful views.",
      rating: 5,
      image: images.testimonial2,
    },
    {
      name: "Tina W.",
      quote: "Comfortable, cozy, and everything you need for a relaxing stay.",
      rating: 4.8,
      image: images.testimonial3,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    adaptiveHeight: true,
  };

  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setNewsletterMsg("Thanks for subscribing!");
      setEmail("");
    } else {
      setNewsletterMsg("Please enter a valid email.");
    }
  };

  return (
    <main className="relative font-sans text-gray-900 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen">
      {/* Background blobs */}
      <div className="pointer-events-none absolute top-0 left-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
        <div
          className="bg-white/30 backdrop-blur-md backdrop-brightness-90 rounded-xl p-12 max-w-4xl text-center shadow-lg w-full"
          data-aos="fade-up"
        >
          <h1 className="text-6xl font-extrabold leading-tight mb-6 text-white">
            Consistently Easy Stays
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 text-white">
          The perfect vacation isn’t just where you stay it’s how effortlessly it all comes together.
          We make every stay smooth, stress-free, and thoughtfully managed.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <Link
              to="/careers"
              className="bg-yellow-400 text-black border border-yellow-400 px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 shadow-lg focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            >
              Join Our Team
            </Link>
          </div>

          <div
            className="mt-12 animate-bounce text-yellow-400 select-none"
            aria-hidden="true"
          >
            ↓ Scroll down
          </div>
        </div>
      </section>

      <hr className="mt-10 border-yellow-400 border-t-2 max-w-6xl mx-auto" />

      {/* About Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col gap-12 items-center relative z-10">

          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-black border-l-4pl-4">
              You only get one shot at that perfect trip... don’t leave it to chance!
            </h2>
            <p className="text-lg leading-relaxed text-gray-800">
              We don’t just offer vacation rentals, we deliver peace of mind. 
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission: reliable, stress-free stays in prime U.S. destinations, with no surprises.Whether it's a family vacation, reunion, or milestone trip, we eliminate the hassles: unexpected costs, delays, and confusion, so you can enjoy your time.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Our global team works behind the scenes to make every stay seamless, secure, and easy. That’s why we’re built on one simple principle: Consistently Easy Stays, managed by people who care about the experience you deserve.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Join us in creating unforgettable, seamless experiences for our guests. Every stay, every time.
            </p>
          </div> 
          <div className="w-full">
            <Link
              to="/careers"
              className="bg-yellow-400 text-black border border-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 shadow-lg focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            >
              Apply
            </Link>
          </div>
          <div className="">
            <div className="flex w-full gap-3" >
              <img
                src={images.family1}
                alt="Host and guests enjoying the stay"
                className="shadow-lg w-1/3" 
                data-aos="fade-up"
              />            
              <div className="flex flex-col gap-3" >
                <img
                  src={images.family3}
                  alt="Host and guests enjoying the stay"
                  className="shadow-lg w-full h-full" 
                  data-aos="fade-up"
                />
                <img
                  src={images.family4}
                  alt="Host and guests enjoying the stay"
                  className="shadow-lg w-full h-full" 
                  data-aos="fade-up"
                />
              </div>
              <img
                src={images.family2}
                alt="Host and guests enjoying the stay"
                className="shadow-lg w-1/3" 
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className=" border-yellow-400 border-t-2 max-w-6xl mx-auto" />

            {/* Top Destinations Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto max-w-6xl px-6 flex flex-col gap-12 items-center justify-center relative z-10">
          <div className="flex flex-col gap-15 justify-center items-center" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-black border-l-4pl-4">
              Explore our top destination
            </h2>
            <p className="text-lg leading-relaxed text-gray-800 text-center max-w-11/12">
              We step in where most rentals fall short, before the hassle hits. With professionally managed properties, real-time support, and top-tier locations, we eliminate surprises. No worries about keys, missing amenities, or waiting for help. Just show up, settle in, and enjoy the trip you planned.
            </p>
          </div> 
          <div className="w-full">
            <Link
              to="/careers"
              className="bg-yellow-400 text-black border border-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 shadow-lg focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400"
            >
              Apply
            </Link>
          </div>
          <ImageCarousel />
          
          <div className="">
            <div className="flex w-full gap-3" >
              <img
                src={images.family1}
                alt="Host and guests enjoying the stay"
                className="shadow-lg w-1/3" 
                data-aos="fade-up"
              />            
              <div className="flex flex-col gap-3" >
                <img
                  src={images.family3}
                  alt="Host and guests enjoying the stay"
                  className="shadow-lg w-full h-full" 
                  data-aos="fade-up"
                />
                <img
                  src={images.family4}
                  alt="Host and guests enjoying the stay"
                  className="shadow-lg w-full h-full" 
                  data-aos="fade-up"
                />
              </div>
              <img
                src={images.family2}
                alt="Host and guests enjoying the stay"
                className="shadow-lg w-1/3" 
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-yellow-50">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-cyan-700">
            Why Choose Our Rentals?
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div
              className="p-8 bg-white rounded-xl shadow-md"
              data-aos="fade-up"
            >
              <SparklesIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Spotless & Stylish</h3>
              <p className="text-gray-700 leading-relaxed">
                Our properties are professionally cleaned and stylishly furnished
                for your comfort.
              </p>
            </div>
            <div
              className="p-8 bg-white rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <StarIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Highly Rated by Guests</h3>
              <p className="text-gray-700 leading-relaxed">
                Enjoy stays rated 4.8+ stars thanks to attention to detail and
                exceptional hospitality.
              </p>
            </div>
            <div
              className="p-8 bg-white rounded-xl shadow-md"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <MapPinIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay close to beaches, ski areas, urban centers, and all the best
                attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-20 border-yellow-400 border-t-2 max-w-6xl mx-auto" />

      {/* How To Book */}
      <section className="py-24 bg-white">
        <h2 className="text-5xl font-bold mb-12 text-center" data-aos="fade-up">
          How To Book
        </h2>
        <div className="container mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-16">
          <div
            className="bg-yellow-50 p-10 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <CheckCircleIcon className="mx-auto h-16 w-16 text-yellow-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Browse Our Listings</h3>
            <p className="text-gray-700 leading-relaxed">
              Visit our Airbnb listings or contact us directly to explore available rentals.
            </p>
          </div>
          <div
            className="bg-yellow-50 p-10 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <ClockIcon className="mx-auto h-16 w-16 text-yellow-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Check Availability</h3>
            <p className="text-gray-700 leading-relaxed">
              We respond quickly to inquiries and help you select the best dates for your stay.
            </p>
          </div>
          <div
            className="bg-yellow-50 p-10 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <PhoneIcon className="mx-auto h-16 w-16 text-yellow-600 mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Confirm & Enjoy</h3>
            <p className="text-gray-700 leading-relaxed">
              Secure your booking and experience exceptional hospitality from start to finish.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-20 border-yellow-400 border-t-2 max-w-6xl mx-auto" />

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-16" data-aos="fade-up">
            What Our Guests Say
          </h2>
          <Slider {...sliderSettings} className="shadow-xl rounded-xl" data-aos="fade-up">
            {testimonials.map(({ name, quote, rating, image }, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-10 text-gray-700 flex flex-col items-center md:flex-row md:space-x-10"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-24 h-24 rounded-full object-cover mb-6 md:mb-0"
                />
                <div className="text-center md:text-left">
                  <p className="italic text-lg mb-6">"{quote}"</p>
                  <p className="font-semibold text-2xl mb-3">{name}</p>
                  <p className="text-yellow-400 text-3xl">
                    {"★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating))}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <hr className="my-20 border-yellow-400 border-t-2 max-w-6xl mx-auto" />

      {/* ------------------------- FULL‑WIDTH CAROUSEL ---------------------- */}
      <section className="w-screen overflow-hidden" data-aos="fade-up">
        <Slider {...carouselSettings} className="w-full">
          {carouselImages.map((src, i) => (
            <div key={i}>
              <img src={src} alt={`Highlight ${i + 1}`} className="w-full h-[480px] object-cover" />
            </div>
          ))}
        </Slider>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <FaqAccordion
            faqs={faqs}
            activeIndex={activeFaqIndex}
            setActiveIndex={setActiveFaqIndex}
          />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-700 mb-10">
            Subscribe to our newsletter for the latest news, offers, and tips.
          </p>
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex justify-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 rounded-l-lg border border-yellow-400 focus:outline-yellow-400 flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-4 rounded-r-lg font-semibold hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
          {newsletterMsg && (
            <p className="mt-4 text-green-600 font-semibold">{newsletterMsg}</p>
          )}
        </div>
      </section>

      {/* Fixed floating Book Now button */}
      <Link
        to="/contact"
        className="hidden md:flex fixed bottom-8 right-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
        aria-label="Book Now"
      >
        Book Now
      </Link>
    </main>
  );
}

function FaqAccordion({ faqs, activeIndex, setActiveIndex }) {
  return (
    <div className="space-y-6">
      {faqs.map(({ question, answer }, i) => (
               <div
          key={i}
          className={`bg-white rounded-xl shadow p-6 cursor-pointer transition ${
            activeIndex === i ? "shadow-xl bg-yellow-50" : ""
          }`}
          onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          aria-expanded={activeIndex === i}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActiveIndex(activeIndex === i ? null : i);
            }
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{question}</h3>
            <span className="text-yellow-400 text-3xl select-none">
              {activeIndex === i ? "−" : "+"}
            </span>
          </div>
          {activeIndex === i && (
            <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;

