import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import {
  BriefcaseIcon,
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplyForm from "./ApplyForm";

const teamImages = [
  "/Reunios/assets/corosal-img9.jpg",
  "/Reunios/assets/corosal-img10.jpg",
  "/Reunios/assets/corosal-img11.jpg",
];

const employeeTestimonials = [
  {
    name: "Priya K.",
    role: "Guest Relations Specialist",
    quote:
      "Working here has been a rewarding experience. We truly care about guest happiness.",
    image: teamImages[0],
  },
  {
    name: "Rohan M.",
    role: "Property Maintenance Lead",
    quote:
      "Great team culture and opportunities to grow. Every day brings new challenges.",
    image: teamImages[1],
  },
  {
    name: "Anjali S.",
    role: "Housekeeping Supervisor",
    quote:
      "I love making sure guests feel welcome and comfortable during their stay.",
    image: teamImages[2],
  },
];

const jobOpenings = [
  {
    id: 1,
    title: "Guest Communication Specialist",
    location: "Remote / On-site",
    description:
      "Manage guest communications, handle inquiries, and ensure outstanding service from booking to checkout.",
    responsibilities: [
      "Respond promptly to guest inquiries and requests",
      "Coordinate check-in and check-out procedures",
      "Provide local recommendations and support",
    ],
    requirements: [
      "Excellent communication skills",
      "Hospitality experience preferred",
      "Ability to multitask and problem-solve",
    ],
  },
  {
    id: 2,
    title: "Software Developer",
    location: "Remote",
    description:
      "Develop, test, and maintain software solutions for improving business operations and guest experience.",
    responsibilities: [
      "Write clean and efficient code",
      "Collaborate with the team to design and implement software solutions",
      "Troubleshoot and debug software issues",
    ],
    requirements: [
      "Proficiency in programming languages (e.g., JavaScript, Python, etc.)",
      "Experience with software development methodologies",
      "Problem-solving skills and attention to detail",
    ],
  },
  {
    id: 3,
    title: "Pricing Analyst",
    location: "Remote / On-site",
    description:
      "Analyze market data, set competitive pricing strategies, and optimize revenue for all listings.",
    responsibilities: [
      "Monitor market trends and competitor pricing",
      "Adjust pricing strategies based on demand and market conditions",
      "Provide pricing reports and recommendations",
    ],
    requirements: [
      "Strong analytical and numerical skills",
      "Experience with pricing models or revenue management",
      "Proficiency in Excel or similar software",
    ],
  },
];

function Careers() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
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

  const [selectedJob, setSelectedJob] = useState(null);

  const openApplyModal = (job) => {
    setSelectedJob(job);
  };

  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-fixed bg-center bg-cover flex items-center"
        style={{ backgroundImage: "url('/Reunios/assets/corosal-img17.jpg')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-white z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl" data-aos="fade-right" data-aos-delay="300">
            <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
              Build a Rewarding Career with Reunios
            </h1>
            <p className="text-xl leading-relaxed mb-10 drop-shadow-md">
              Join a passionate team committed to delivering exceptional guest
              experiences. Grow your skills and make a difference in the world of
              hospitality.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#job-openings"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
              >
                Explore Openings
              </a>
              <a
                href="mailto:careers@sidharthhospitality.com"
                className="inline-block border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="hidden md:block w-[400px] h-[400px] rounded-xl shadow-xl overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="600"
          ></div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section
        className="py-24 bg-white max-w-6xl mx-auto px-6 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Our Work Culture</h2>
        <p className="text-center text-lg max-w-4xl mx-auto mb-10 leading-relaxed">
          At Reunios, we cultivate a vibrant, inclusive, and
          collaborative environment where creativity and care thrive. Our team
          enjoys a supportive atmosphere that encourages learning, open
          communication, and a shared passion for delivering outstanding guest
          experiences.
        </p>
        <div className="grid md:grid-cols-3 gap-16 text-center mb-20">
          <div>
            <UserGroupIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Team Spirit</h3>
            <p>
              We believe great hospitality starts with a strong, united team
              that supports and uplifts each other.
            </p>
          </div>
          <div>
            <SparklesIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Excellence & Care</h3>
            < p>
              Attention to detail and genuine care are at the heart of
              everything we do for our guests and teammates.
            </p>
          </div>
          <div>
            <LightBulbIcon className="mx-auto h-16 w-16 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold mb-3">Innovation & Growth</h3>
            <p>
              We encourage fresh ideas and provide opportunities to learn and
              grow professionally.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <img
            src="/Reunios/assets/office1.jpg"
            alt="Office workspace"
            className="rounded-xl shadow-lg object-cover h-64 w-full"
            loading="lazy"
          />
          <img
            src="/Reunios/assets/team1.jpg"
            alt="Team collaboration"
            className="rounded-xl shadow-lg object-cover h-64 w-full"
            loading="lazy"
          />
          <img
            src="/Reunios/assets/office2.jpg"
            alt="Office meeting"
            className="rounded-xl shadow-lg object-cover h-64 w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Job Openings */}
      <section
        id="job-openings"
        className="py-20 bg-white max-w-6xl mx-auto px-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Current Job Openings
        </h2>
        <div className="space-y-16 max-w-5xl mx-auto">
          {jobOpenings.map(
            ({
              id,
              title,
              location,
              description,
              responsibilities,
              requirements,
            }) => (
              <div
                key={id}
                className="bg-yellow-50 rounded-xl shadow-md p-8"
                data-aos="fade-up"
              >
                <h3 className="text-3xl font-semibold mb-2 flex items-center gap-2">
                  <BriefcaseIcon className="h-6 w-6 text-yellow-600" />
                  {title}
                </h3>
                <p className="italic text-yellow-600 mb-4">{location}</p>
                <p className="mb-4">{description}</p>
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {responsibilities.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {requirements.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => openApplyModal({ id, title })}
                  className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                >
                  Apply Now
                </button>
              </div>
            )
          )}
        </div>
      </section>

      {/* Employee Testimonials */}
      <section
        className="py-20 bg-gray-50 max-w-5xl mx-auto px-6 rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Our Team Says
        </h2>
        <Slider {...sliderSettings} className="rounded-xl">
          {employeeTestimonials.map(({ name, role, quote, image }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-10 text-gray-800 flex flex-col items-center"
            >
              <img
                src={image}
                alt={name}
                className="w-28 h-28 rounded-full mb-6 object-cover shadow-md"
              />
              <p className="text-xl italic mb-6 max-w-xl text-center">"{quote}"</p>
              <p className="font-semibold text-2xl">{name}</p>
              <p className="text-yellow-600">{role}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Application Form Modal */}
      {selectedJob && <ApplyForm selectedJob={selectedJob} setSelectedJob={setSelectedJob} />}

      {/* Contact CTA */}
      <section
        className="py-20 bg-yellow-50 text-center rounded-t-3xl mt-20"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Reach out to us anytime. We’re here to help you start your career in
          hospitality.
        </p>
        <a
          href="mailto:careers@sidharthhospitality.com"
          className="bg-yellow-600 text-white px-12 py-5 rounded-full font-semibold hover:bg-yellow-700 transition"
        >
          Email Us
        </a>
      </section>
    </main>
  );
}

export default Careers;