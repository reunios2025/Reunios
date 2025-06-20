import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Careers = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [openFaq, setOpenFaq] = useState(null);

  const jobOpenings = [
    {
      id: 1,
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
  ];

  const faqs = [
    {
      question: "How do I apply to work with Reunios?",
      answer:
        "We're always looking for passionate, motivated individuals to join our growing team. Visit our Careers page to learn more about current openings and submit your application. Whether you're in customer service, property management, or tech, we offer professional growth and a balanced work environment.",
    },
    {
      question: "What kind of career growth opportunities does Reunios offer?",
      answer:
        "We provide comprehensive training programs, mentorship opportunities, and clear career advancement paths for all team members.",
    },
    {
      question: "Is there room for remote work at Reunios?",
      answer:
        "Yes, we offer flexible work arrangements including remote and hybrid options for many positions.",
    },
    {
      question: "What benefits or perks come with working at Reunios?",
      answer:
        "We offer competitive salaries, health benefits, professional development opportunities, and a supportive work environment.",
    },
    {
      question: "How does Reunios support employees in their roles?",
      answer:
        "We provide ongoing training, regular feedback, mentorship programs, and the resources needed to succeed in your role.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        ></div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build a Rewarding Career with Reunios
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join a passionate team where your skills, motivation, and ambition
            truly matter. At Reunios, we believe work should be about growth,
            balance, and making an impact. Deliver exceptional guest
            experiences, grow your career, and contribute to a supportive,
            inclusive team where creativity and care thrive.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              to="#openings"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold
                       hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
            >
              Explore Openings
            </Link>
            <Link
              to="/contact"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-semibold
                       hover:bg-yellow-400 hover:text-black transition-colors shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Ready to Grow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-900 mb-8"
            data-aos="fade-up"
          >
            Ready to Grow with Us?
          </h2>
          <p
            className="text-lg text-gray-700 max-w-4xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Reunios is a rapidly growing US-based resort property management
            company with operations in India and the Philippines. We manage
            back-end operations for our US affiliate, delivering exceptional
            vacation experiences for North American tourists while optimizing
            rental income for clients. Our vision is to build a market-leading
            vacation rental platform blending the best of hotels and homes. Our
            mission is to provide trusted services that maximize revenue and
            profitability for clients' properties while earning five-star guest
            reviews. Join our dynamic startup and be part of an ambitious,
            results-driven team. Receive coaching to boost productivity and
            impact, with opportunities for global travel and competitive
            compensation.
          </p>

          {/* Team Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center" data-aos="fade-up">
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
                Team Spirit
              </h3>
              <p className="text-gray-600">
                We believe great hospitality starts with a strong, united team
                that supports and uplifts each other.
              </p>
            </div>

            <div
              className="text-center"
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
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Excellence & Care
              </h3>
              <p className="text-gray-600">
                Attention to detail and genuine care are at the heart of
                everything we do for our guests and teammates.
              </p>
            </div>

            <div
              className="text-center"
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation & Growth
              </h3>
              <p className="text-gray-600">
                We encourage fresh ideas and provide opportunities to learn and
                grow professionally.
              </p>
            </div>
          </div>

          {/* Team Images */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
            <div className="h-64 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-900 text-center mb-8"
            data-aos="fade-up"
          >
            Current Job Openings
          </h2>
          <p
            className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We are seeking a skilled Vacation Rental Pricing Analyst and
            Software Developer to design and maintain software solutions,
            focusing on web scraping, web development, and data analysis for our
            vacation rental platform.
          </p>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className="bg-yellow-50 rounded-xl p-8 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-6 h-6 bg-yellow-600 rounded"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {job.title}
                  </h3>
                </div>
                <p className="text-yellow-700 italic mb-4">{job.location}</p>
                <p className="text-gray-700 mb-6">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {/* First FAQ - Always Open */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  How do I apply to work with Reunios?
                </h3>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                We're always looking for passionate, motivated individuals to
                join our growing team. Visit our Careers page to learn more
                about current openings and submit your application. Whether
                you're in customer service, property management, or tech, we
                offer professional growth and a balanced work environment.
              </p>
            </div>

            {/* Other FAQs */}
            {faqs.slice(1).map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-yellow-400 text-2xl">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </div>
                {openFaq === index && (
                  <p className="text-gray-700 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Team Says */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-900 mb-16"
            data-aos="fade-up"
          >
            What Our Team Says
          </h2>

          <div
            className="bg-white rounded-xl p-12 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-yellow-400 rounded-full mb-6 border-4 border-yellow-400"></div>
              <p className="text-lg italic text-gray-700 mb-6 max-w-2xl">
                "I thrive in an environment where I have the freedom to work
                with the right amount of support. Reunios strikes the perfect
                balance, allowing me to grow at my own pace while offering the
                guidance I need to succeed."
              </p>
              <p className="text-lg italic text-gray-700 mb-6 max-w-2xl">
                "The best part about working here is the opportunity to learn
                and develop new skills. The training is solid, and I feel like
                I'm growing professionally every day. Plus, there's always room
                to take on more responsibility!"
              </p>
              <p className="text-lg italic text-gray-700 mb-6 max-w-2xl">
                "At Reunios, there's a clear focus on building a supportive,
                collaborative environment. We're encouraged to take initiative,
                and our efforts are recognized. It's motivating to know that
                leadership trusts us to contribute meaningfully to the company's
                growth."
              </p>
              <p className="text-lg italic text-gray-700 mb-6 max-w-2xl">
                "What sets Reunios apart is the emphasis on work-life balance. I
                feel I have the flexibility to perform well while still having
                time for personal life, without the pressure that typically
                comes with remote work."
              </p>
              <p className="text-lg italic text-gray-700 mb-8 max-w-2xl">
                "The feedback I receive here is constructive and aimed at
                helping me improve without overwhelming me. It's clear, timely,
                and focused on my development, which makes it easier to stay on
                track and motivated."
              </p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Priya K.</h4>
              <p className="text-yellow-700">Guest Relations Specialist</p>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Have Questions CTA */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-gray-900 mb-6"
            data-aos="fade-up"
          >
            Have Questions?
          </h2>
          <p
            className="text-lg text-gray-700 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Reach out to us anytime. We're here to help you start your career in
            hospitality.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-700 text-white px-8 py-4 rounded-full font-semibold
                     hover:bg-yellow-800 transition-colors transform hover:scale-105 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Email Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Careers;
