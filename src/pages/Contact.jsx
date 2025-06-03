import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const testimonials = [
  {
    name: "Priya K.",
    role: "Guest",
    quote:
      "Quick response and excellent service. I felt valued and well taken care of!",
    image: "/src/assets/corosal-img14.jpg",
  },
  {
    name: "Rohan M.",
    role: "Job Applicant",
    quote:
      "The team was very supportive during my job application process. Highly recommend working here!",
    image: "/src/assets/corosal-img10.jpg",
  },
  {
    name: "Anjali S.",
    role: "Guest",
    quote:
      "Smooth communication and helpful staff made my stay truly memorable.",
    image: "/src/assets/corosal-img13.jpg",
  },
];

const faqs = [
  {
    question: "How quickly can I expect a response?",
    answer:
      "We strive to respond to all inquiries within 24 hours on business days.",
  },
  {
    question: "What are your office hours?",
    answer:
      "Our office is open Monday through Friday, 9 AM to 6 PM PST. We monitor emails after hours.",
  },
  {
    question: "Can I book directly through your website?",
    answer:
      "Currently, bookings are made via Airbnb listings or by contacting us directly.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "You can explore open positions on our Careers page and submit your application online or via email.",
  },
];

function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitMsg, setSubmitMsg] = useState("");
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitMsg(
        `Thanks for reaching out, ${formData.name}! We will get back to you soon.`
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
    }
  };

  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  return (
    <main className="font-sans text-gray-900">
      {/* Hero */}
      <section
        className="relative h-[520px] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/src/assets/corosal-img15.jpg')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            We’re Here to Support You
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 drop-shadow-md">
            Whether you have questions about your booking, career, or general
            inquiries, our team is ready to assist you quickly and
            professionally.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Cards with subtle animation & consistent colors */}
      <section
        className="py-20 bg-yellow-50 max-w-6xl mx-auto px-6 rounded-xl shadow-lg mt-16"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Contact Information
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <ContactCard
            icon={<EnvelopeIcon className="h-12 w-12 text-yellow-600 mb-4" />}
            title="Email"
            detail="contact@sidharthhospitality.com"
            action={{
              text: "Send Email",
              href: "mailto:contact@sidharthhospitality.com",
            }}
          />
          <ContactCard
            icon={<PhoneIcon className="h-12 w-12 text-yellow-600 mb-4" />}
            title="Phone"
            detail="+1 (555) 123-4567"
            action={{ text: "Call Now", href: "tel:+15551234567" }}
          />
          <ContactCard
            icon={<MapPinIcon className="h-12 w-12 text-yellow-600 mb-4" />}
            title="Office Location"
            detail={
              <>
                123 Hospitality Lane,
                <br />
                San Francisco, CA, USA
              </>
            }
          />
        </div>
      </section>

      {/* Contact Form with clean glass style */}
      <section
        id="contact-form"
        className="py-24 bg-white max-w-4xl mx-auto px-6 rounded-xl shadow-md mt-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-10 text-center">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormInput
            label="Name"
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={formErrors.name}
          />
          <FormInput
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={formErrors.email}
          />
          <FormInput
            label="Subject"
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            error={formErrors.subject}
          />
          <FormTextarea
            label="Message"
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            error={formErrors.message}
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-black font-semibold px-12 py-4 rounded-lg hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </div>
          {submitMsg && (
            <p className="text-green-600 font-semibold text-center mt-4">
              {submitMsg}
            </p>
          )}
        </form>
      </section>

      {/* FAQ Accordion */}
      <section
        className="py-24 bg-yellow-50 max-w-4xl mx-auto px-6 rounded-xl shadow-lg mt-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">FAQs</h2>
        <div className="space-y-6">
          {faqs.map(({ question, answer }, idx) => (
            <FaqItem
              key={idx}
              question={question}
              answer={answer}
              isOpen={faqOpenIndex === idx}
              onToggle={() => toggleFaq(idx)}
            />
          ))}
        </div>
      </section>

      {/* Testimonials slider */}
      <section
        className="py-24 bg-white max-w-5xl mx-auto px-6 rounded-xl shadow-lg mt-20"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          What People Say
        </h2>
        <TestimonialSlider testimonials={testimonials} />
      </section>
    </main>
  );
}

function ContactCard({ icon, title, detail, action }) {
  return (
    <div className="bg-yellow-100 rounded-xl p-8 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center">
      <div>{icon}</div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{detail}</p>
      {action && (
        <a
          href={action.href}
          className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          {action.text}
        </a>
      )}
    </div>
  );
}

function FormInput({ label, id, type, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-semibold mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`w-full p-4 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-yellow-400`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function FormTextarea({ label, id, value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-lg font-semibold mb-2">
        {label}
      </label>
      <textarea
        id={id}
        rows="6"
        className={`w-full p-4 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-yellow-400`}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-xl p-6 bg-yellow-100 shadow-md transition ${
        isOpen ? "shadow-xl bg-yellow-200" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <p className="mt-4 text-gray-800">{answer}</p>}
    </div>
  );
}

function TestimonialSlider({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
  };
  return (
    <Slider {...settings} className="rounded-xl">
      {testimonials.map(({ name, role, quote, image }, i) => (
        <div
          key={i}
          className="bg-yellow-100 rounded-xl p-10 text-gray-800 flex flex-col items-center"
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
  );
}

export default Contact;
