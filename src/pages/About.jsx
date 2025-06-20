import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: "Emily R.",
      quote:
        "Staying here was an absolute delight — warm hospitality, gorgeous property, and seamless communication.",
      stars: 5,
      image: "",
    },
    {
      name: "Mark P.",
      quote:
        "Sidharth's rentals consistently deliver comfort and style. I highly recommend for anyone visiting the area.",
      stars: 5,
      image: "",
    },
    {
      name: "Sara W.",
      quote:
        "From booking to checkout, everything was smooth and welcoming. A true home away from home.",
      stars: 5,
      image: "",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        ></div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Reunios</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Premium vacation rentals combining comfort, style, and unforgettable
            experiences
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-cyan-700 mb-8"
            data-aos="fade-up"
          >
            Our Story
          </h2>
          <div
            className="text-lg text-gray-700 space-y-6 max-w-4xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              We've all been there, excited about a trip, only to arrive at a
              place that doesn't live up to the photos, the promises, or the
              price. The check-in's a mess, the room's not ready, and suddenly,
              you're scrambling to make things work. Sounds like the vacation
              from hell, right?
            </p>
            <p>
              Now, picture this: You book with Reunios. No confusion. No chaos.
              Just crystal-clear communication, clean spaces, and the promise
              that everything works like it's supposed to. You walk in, you
              unpack, and you start enjoying your trip. No waiting for answers.
              No surprises.
            </p>
            <p>
              Because at Reunios, we get it. The best memories aren't made by
              worrying about the details. They're made when everything just...
              works.
            </p>
          </div>
        </div>
      </section>

      {/* What we do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4783134b2e5bebea1fa12b7ef1fde786915caa5e?placeholderIfAbsent=true"
                alt="What we do"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-cyan-700 mb-6">
                What we do
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  At Reunios, we don't just manage vacation rentals; we craft
                  seamless, reliable experiences with every detail in mind. Our
                  mission is simple: offer guests comfort, clarity, and
                  consistent stays that provide peace of mind, allowing them to
                  focus on what matters most, creating lasting memories. Our
                  guests: families, groups, and those celebrating life's
                  milestones value clarity, trust, and efficiency, seeking
                  stress-free stays in prime locations.
                </strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                <strong>
                  For our team, we offer a growth-driven environment that
                  balances autonomy with support, empowering everyone to
                  contribute to our commitment to excellence.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where we are going Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-cyan-700 mb-6">
                Where we are going
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  To redefine how people experience vacations. We believe every
                  trip should be effortless, from booking to check-out. Our
                  vision is to set a new standard for vacation rentals, where
                  peace of mind is the baseline, and no one has to worry about
                  the little things. We aim to build a global brand that
                  delivers a trustworthy, well-executed experience, consistently
                  across every destination.
                </strong>
              </p>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d4953ddfdb090e4b8452e16d40eac29874c9ff9?placeholderIfAbsent=true"
                alt="Where we are going"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we deliver excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-cyan-700 mb-16"
            data-aos="fade-up"
          >
            How we deliver excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-xl p-8 shadow-lg"
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Clear & Proactive Communication
              </h3>
              <p className="text-gray-600">
                We keep you informed at every step, offering full transparency
                and thoughtful service that anticipates your needs and ensures
                peace of mind.
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Seamless & Trusted Hospitality
              </h3>
              <p className="text-gray-600">
                Professionally managed, well-maintained properties that ensure a
                stress-free experience, free of surprises
              </p>
            </div>

            <div
              className="bg-white rounded-xl p-8 shadow-lg"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Guest-Centered Excellence
              </h3>
              <p className="text-gray-600">
                From booking to checkout, every detail is designed around guest
                comfort, convenience, and satisfaction, ensuring you enjoy a
                truly effortless stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Experiences Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-yellow-700 text-center mb-16"
            data-aos="fade-up"
          >
            Guest Experiences
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center relative pt-16"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-full border-4 border-yellow-400"></div>
                <p className="italic text-gray-600 mb-6">
                  "{testimonial.quote}"
                </p>
                <h4 className="font-bold text-gray-900 mb-2">
                  {testimonial.name}
                </h4>
                <div className="flex justify-center space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.975c.3.92-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.537-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.038 9.402c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.975z" />
                      </svg>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src=""
                alt="Host Sidharth"
                className="w-full h-80 bg-gray-300 rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-cyan-700 mb-6">
                Amenities that actually matter
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>
                  We don't waste your time with fancy perks you'll never use.
                  Our amenities are built to make your stay easy and
                  comfortable, from pools hot tub and gyms, game rooms to
                  lounges and 24/7 support. Because you deserve clean spaces,
                  clear communication and a seamless and enjoyable getaway, with
                  no surprises.
                </strong>
              </p>
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold
                         hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
              >
                Book now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Interested in Joining Our Team?
          </h2>
          <p
            className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At Reunios, We're not just hiring for positions we're building a
            team of passionate, driven individuals who care about what they do.
            Explore our careers page to learn more.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold
                     hover:bg-yellow-800 transition-colors transform hover:scale-105 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
