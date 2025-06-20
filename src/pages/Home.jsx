import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/b649b68f3882710189eb1569d1e0e7183ab40216?placeholderIfAbsent=true')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Consistently Easy Stays
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The perfect vacation isn't just where you stay, it's how
            effortlessly it all comes together. We make every stay smooth,
            stress-free, and thoughtfully managed.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="h-1 w-12 bg-orange-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                You only get one shot at that perfect trip... don't leave it to
                chance!
              </h2>
              <p className="text-xl text-slate-700 mb-6">
                We don't just offer vacation rentals, we deliver peace of mind.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our mission: reliable, stress-free stays in prime U.S.
                destinations, with no surprises. Whether it's a family vacation,
                reunion, or milestone trip, we eliminate the hassles: unexpected
                costs, delays, and confusion, so you can enjoy your time.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Our global team works behind the scenes to make every stay
                seamless, secure, and easy. That's why we're built on one simple
                principle: Consistently Easy Stays, managed by people who care
                about the experience you deserve.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Join us in creating unforgettable, seamless experiences for our
                guests. Every stay, every time.
              </p>
              <Link
                to="/careers"
                className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold
                         hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg"
              >
                Apply Now!
              </Link>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ff005d0905a6911b8ea78640d8e60edf97f8408?placeholderIfAbsent=true"
                  alt="Vacation rental property"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b8a8f9164801424651b8417846b97f942afb919?placeholderIfAbsent=true"
                    alt="Vacation rental interior"
                    className="w-full h-44 object-cover rounded-lg"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aa25b852687dc4d3bfda92a56218f62f31342a7?placeholderIfAbsent=true"
                    alt="Vacation rental amenities"
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bbc683eee7d7de4b12c3de86a3b821a5b746181?placeholderIfAbsent=true"
                  alt="Vacation rental exterior"
                  className="w-full h-96 object-cover rounded-lg col-span-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-yellow-400 max-w-6xl mx-auto"></div>

      {/* Top Destinations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            data-aos="fade-up"
          >
            Explore our top destination
          </h2>
          <p
            className="text-xl text-gray-700 max-w-4xl mx-auto mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We step in where most rentals fall short, before the hassle hits.
            With professionally managed properties, real-time support, and
            top-tier locations, we eliminate surprises. No worries about keys,
            missing amenities, or waiting for help. Just show up, settle in, and
            enjoy the trip you planned.
          </p>

          {/* Destinations Grid */}
          <div
            className="flex justify-center items-end gap-8 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center">
              <div className="w-72 h-56 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold">Kihei</h3>
            </div>
            <div className="text-center">
              <div className="w-96 h-72 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold">Park City</h3>
            </div>
            <div className="text-center">
              <div className="w-68 h-64 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold">Marina Dunes</h3>
            </div>
            <div className="text-center">
              <div className="w-64 h-56 bg-gray-300 rounded-lg mb-4"></div>
              <h3 className="text-lg font-bold">Indio</h3>
            </div>
          </div>

          <p
            className="text-2xl font-bold text-gray-900"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our properties are in prime locations, making your vacation
            effortless. Wherever you choose, we've got the details covered.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-1 bg-yellow-400 max-w-6xl mx-auto"></div>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                No random hosts. Just consistent, reliable stays.
              </h2>
              <div className="h-1 bg-gray-900 w-64 mb-8"></div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-10 bg-gray-300"></div>
                  <div>
                    <h3 className="font-bold text-gray-900">How Do We Work</h3>
                    <p className="text-gray-700 text-sm mt-2">
                      We choose the ideal properties: only in prime vacation
                      destinations, close to attractions, and with access to all
                      amenities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-10 bg-gray-300"></div>
                  <p className="text-gray-700 text-sm">
                    We prepare each unit for perfect stays: clean, fully
                    equipped, and exactly as advertised.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-10 bg-gray-300"></div>
                  <p className="text-gray-700 text-sm">
                    We maintain clear and prompt communication: 24/7 support,
                    proactive updates, and no vague instructions.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-10 bg-gray-300"></div>
                  <p className="text-gray-700 text-sm">
                    We set strategic prices: you get great value without
                    sacrificing comfort or peace of mind.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-10 bg-gray-300"></div>
                  <p className="text-gray-700 text-sm">
                    We scale intelligently: with a global team and streamlined
                    processes, we grow without ever compromising service.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 mb-8 text-justify leading-relaxed">
                We know job hunting can feel like a never-ending search. Whether
                you're feeling undervalued, stuck in a role that doesn't inspire
                you, or simply seeking better work-life balance. We believe work
                should be more than just a paycheck. It's about growth, balance,
                and being part of a team that truly supports your development.
                If you're ready to bring your skills, motivation, and ambition
                to a place where you can make a real impact, we want people like
                you. Here, we foster a vibrant, inclusive, and collaborative
                environment where creativity, care, and professional growth
                thrive. Our team enjoys a supportive atmosphere that encourages
                learning, open communication, and a shared passion for
                delivering exceptional guest experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Rentals Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-cyan-700 text-center mb-16"
            data-aos="fade-up"
          >
            Why Choose Our Rentals?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Seamless & Trusted Hospitality
              </h3>
              <p className="text-gray-600">
                Professionally managed stays with zero surprises.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Highly Rated by Guests
              </h3>
              <p className="text-gray-600">
                Enjoy stays rated 4.8+ stars thanks to attention to detail and
                exceptional hospitality.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Great Value in Prime Locations
              </h3>
              <p className="text-gray-600">
                Top-tier destinations without the luxury price tag
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clear & Proactive Communication
              </h3>
              <p className="text-gray-600">
                We keep you informed from booking to checkout
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Guest-Centered Excellence
              </h3>
              <p className="text-gray-600">
                Every detail is designed around your comfort and convenience.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Full Access to Amenities
              </h3>
              <p className="text-gray-600">
                Pools, gyms, hot tubs, lounges. No hidden fees, no locked doors
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-900" data-aos="fade-up">
              We don't do fancy gimmicks just straightforward, no-surprise
              stays.
            </h3>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xl text-gray-700 mb-8" data-aos="fade-up">
            Join our team and be part of a brand that makes every guest stay
            smooth, stress-free, and memorable. We're always looking for
            passionate, driven individuals to help us deliver Consistently Easy
            Stays.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold
                     hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Apply Now!
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
