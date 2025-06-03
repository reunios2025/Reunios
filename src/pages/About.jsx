import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import {
  HeartIcon,
  GlobeAltIcon,
  LightBulbIcon,
  UserGroupIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = {
  hero: "/src/assets/corosal-img17.jpg",
  team: "/src/assets/corosal-img10.jpg",
  guest1: "/src/assets/corosal-img1.jpg",
  guest2: "/src/assets/corosal-img13.jpg",
  guest3: "/src/assets/corosal-img14.jpg",
};

const missionVisionItems = [
  {
    title: "Our Mission",
    description:
      "To provide travelers with exceptional rental stays that combine comfort, convenience, and authentic local experiences.",
    image: images.mission,
  },
  {
    title: "Our Vision",
    description:
      "To be the trusted host brand for discerning travelers seeking stylish, hassle-free stays in prime locations worldwide.",
    image: "/src/assets/vision.jpg", // Replace with actual vision image or reuse mission image
  },
];

const testimonials = [
  {
    name: "Emily R.",
    quote:
      "Staying here was an absolute delight — warm hospitality, gorgeous property, and seamless communication.",
    stars: 5,
    image: images.guest1,
  },
  {
    name: "Mark P.",
    quote:
      "Sidharth’s rentals consistently deliver comfort and style. I highly recommend for anyone visiting the area.",
    stars: 5,
    image: images.guest2,
  },
  {
    name: "Sara W.",
    quote:
      "From booking to checkout, everything was smooth and welcoming. A true home away from home.",
    stars: 4.9,
    image: images.guest3,
  },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  return (
    <main className="font-sans text-gray-900 bg-gradient-to-b from-cyan-50 via-white to-indigo-50 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-fixed bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div
          className="bg-black bg-opacity-70 p-12 rounded-xl max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            About Reunios
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto tracking-wide">
            Delivering exceptional stays through a curated collection of premium
            hotel-style apartments.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-20 max-w-5xl mx-auto px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-700">
          Our Story
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 text-gray-800">
          Founded by Sidharth with a vision to redefine comfort and style in
          vacation rentals, Reunios focuses on quality, convenience, and
          unforgettable guest experiences.
        </p>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-700">
          Every guest deserves a stay that’s welcoming, seamless, and personal.
          That’s why attention to detail, clear communication, and thoughtful
          amenities are at our core.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6">
            {missionVisionItems.map(({ title, description, image }, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                  data-aos="fade-up"
                >
                  <div className="flex justify-center">
                    <img
                      src={image}
                      alt={title}
                      className="rounded-xl shadow-lg max-w-full h-auto"
                    />
                  </div>
                  <div className="max-w-xl mx-auto text-center md:text-left">
                    <h2 className="text-4xl font-bold mb-6 text-cyan-700">{title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
                  </div>
                </div>
              );
            })}
    </section>

      {/* Core Values */}
      <section
        className="py-20 max-w-6xl mx-auto px-6 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-700">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <HeartIcon className="mx-auto h-14 w-14 text-yellow-500 mb-5" />
            <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
            <p className="text-gray-700 leading-relaxed">
              We treat every guest like family, delivering warmth and care.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <UserGroupIcon className="mx-auto h-14 w-14 text-yellow-500 mb-5" />
            <h3 className="text-xl font-semibold mb-3">Trust</h3>
            <p className="text-gray-700 leading-relaxed">
              Transparency and reliability are the foundation of our service.
            </p>
          </div>
          <div className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <SparklesIcon className="mx-auto h-14 w-14 text-yellow-500 mb-5" />
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-700 leading-relaxed">
              Excellence in every detail, from furnishings to guest support.
            </p>
          </div>
        </div>
      </section>

      {/* Guest Experiences - Grid Cards */}
      <section
        className="py-20 bg-yellow-50 max-w-7xl mx-auto px-6 rounded-xl shadow-md"
        data-aos="fade-up"
        aria-label="Guest Experiences"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-yellow-600">
          Guest Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {testimonials.map(({ name, quote, stars, image }, idx) => (
            <article
              key={idx}
              className="relative bg-white rounded-2xl shadow-lg p-8 pt-16 cursor-pointer transform transition-transform hover:scale-[1.03] duration-300"
              tabIndex={0}
              aria-label={`Testimonial from ${name}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
                <img
                  src={image}
                  alt={`${name}'s photo`}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="italic text-lg leading-relaxed text-gray-700 mb-6 mt-8">
                “{quote}”
              </p>
              <p className="font-semibold text-lg text-center mb-2">{name}</p>
              <div className="flex justify-center space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      aria-hidden="true"
                      className={`w-6 h-6 ${
                        i < Math.round(stars)
                          ? "text-yellow-400"
                          : "text-yellow-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{i < Math.round(stars) ? "Filled star" : "Empty star"}</title>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.975c.3.92-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.537-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.038 9.402c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.975z" />
                    </svg>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>


      {/* Meet the Host */}
      <section
        className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        data-aos="fade-up"
      >
        <img
          src={images.team}
          alt="Host Sidharth"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Sidharth</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-800">
            As your dedicated host, Sidharth ensures every stay is personalized
            and memorable. His passion for hospitality drives the quality and
            warmth you experience at every property.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Feel free to reach out with any questions or special requests — we
           ’re here to make your visit exceptional.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Contact Sidharth
          </Link>
        </div>
      </section>

      {/* Careers CTA */}
      <section
        className="py-20 bg-yellow-50 text-center rounded-t-3xl mt-24"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Interested in Joining Our Team?
        </h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
          We're always looking for passionate hospitality professionals to help
          us deliver exceptional stays. Explore our careers page to learn more.
        </p>
        <Link
          to="/careers"
          className="bg-yellow-600 text-white px-12 py-4 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          View Careers
        </Link>
      </section>
    </main>
  );
}

export default About;
