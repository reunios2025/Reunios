import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I make a reservation?",
      answer:
        "You can book directly through our Airbnb listings or contact our reservations team at reservations@hottubcondos.com. We'll help you find the perfect property for your stay and guide you through the booking process.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy varies by property and booking platform. For Airbnb bookings, the standard Airbnb cancellation policy applies. For direct bookings, we offer flexible cancellation up to 48 hours before check-in for a full refund, with some exceptions during peak seasons.",
    },
    {
      question: "What amenities are included in your properties?",
      answer:
        "Our properties feature premium amenities including high-speed WiFi, fully equipped kitchens, hot tubs, pools, comfortable living spaces, and hotel-quality linens. Specific amenities vary by property - check individual listings for detailed amenity lists.",
    },
    {
      question: "Is there 24/7 customer support during my stay?",
      answer:
        "Yes! We provide 24/7 guest support throughout your entire stay. Our team typically responds within 1 hour and is available via phone, email, or text message for any questions or assistance you may need.",
    },
    {
      question: "Are your properties family-friendly?",
      answer:
        "Absolutely! Most of our properties are designed with families in mind, featuring multiple bedrooms, spacious living areas, kid-friendly amenities, and safety features. Many properties also include pools, game rooms, and outdoor spaces perfect for family gatherings.",
    },
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Standard check-in is at 4:00 PM and check-out is at 11:00 AM. We offer flexible check-in/check-out times when possible - just let us know your needs and we'll do our best to accommodate special requests.",
    },
    {
      question: "Do you allow pets?",
      answer:
        "Pet policies vary by property. Some of our properties are pet-friendly with additional fees, while others do not allow pets. Please check the specific property listing or contact us directly to confirm pet policies for your desired dates.",
    },
    {
      question: "What happens if there's an issue during my stay?",
      answer:
        "If you encounter any issues during your stay, contact our 24/7 support team immediately. We're committed to resolving problems quickly and ensuring your stay meets our high standards. We'll work diligently to address any concerns and make things right.",
    },
    {
      question: "Are there minimum stay requirements?",
      answer:
        "Minimum stay requirements vary by property and season. Most properties have a 2-3 night minimum, with longer minimums during holidays and peak seasons. Check individual property listings for specific requirements.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover) for direct bookings. For Airbnb bookings, payment is processed through Airbnb's platform which accepts various payment methods including credit cards, PayPal, and digital wallets.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets/TEMP/e5fd2742d1e022e0b07cc3fa369bd1640200d8e3?placeholderIfAbsent=true')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          data-aos="fade-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            We're Here to Support You
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Whether you have questions about your booking, career, or general
            inquiries, our team is ready to assist you quickly and
            professionally.
          </p>
          <a
            href="#contact-form"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold
                     hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            data-aos="fade-up"
          >
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div
              className="bg-yellow-100 rounded-xl p-8 text-center shadow-lg"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-700 mb-6">
                reservations@hottubcondos.com
              </p>
              <a
                href="mailto:reservations@hottubcondos.com"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold
                         hover:bg-yellow-600 transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Phone Card */}
            <div
              className="bg-yellow-100 rounded-xl p-8 text-center shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-gray-700 mb-6">+1 (555) 123-4567</p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold
                         hover:bg-yellow-600 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Location Card */}
            <div
              className="bg-yellow-100 rounded-xl p-8 text-center shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-yellow-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-700"
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
                Office Location
              </h3>
              <p className="text-gray-700">
                Reunios near Shradha Medical, SBI colony
                <br />
                Pachora, Jalgaon, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            data-aos="fade-up"
          >
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-bold text-gray-900 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-bold text-gray-900 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-lg font-bold text-gray-900 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-bold text-gray-900 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold
                         hover:bg-yellow-600 transition-colors transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img
            src=""
            alt="Family using laptop"
            className="w-full max-w-2xl mx-auto h-96 bg-gray-300 rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-gray-900 text-center mb-16"
            data-aos="fade-up"
          >
            FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-yellow-100 rounded-xl p-6 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-yellow-600 text-2xl">
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

      {/* Additional FAQ Text */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-gray-700 leading-relaxed space-y-4">
            <p>
              <strong>
                What makes Reunios different from other vacation rental
                management companies?
              </strong>
            </p>

            <p>
              <strong>What types of properties does Reunios manage?</strong> We
              specialize in vacation rentals that combine the comfort of home
              with the convenience of a hotel. Our properties are strategically
              located in top destinations across the U.S., offering guests the
              best of both worlds.
            </p>

            <p>
              At Reunios, we don't just offer a place to stay; we deliver a
              seamless, peace of mind experience. Our focus is on clarity,
              consistency, and reliability, ensuring every stay is well-managed,
              from the moment you book to the moment you check out. We combine
              the comfort of home with the convenience of hotel-style services,
              so you can focus on what matters most, making lasting memories,
              not worrying about logistics.
            </p>

            <p>
              <strong>How does Reunios handle guest communication?</strong> We
              maintain 24/7 support, ensuring that guests feel fully informed
              and taken care of at all times. Our team responds quickly,
              typically within an hour, so you can relax knowing we've got it
              covered.
            </p>

            <p>
              <strong>
                Can I rent properties for longer stays or monthly bookings?
              </strong>{" "}
              While we focus on short-term stays (typically 3 to 7 nights), we
              occasionally accommodate longer-term bookings depending on
              property availability. Please reach out to us directly for custom
              requests.
            </p>

            <p>
              <strong>Are the properties family-friendly?</strong> Yes, most of
              our properties are perfect for families and large groups. We offer
              family-friendly amenities such as spacious living areas, multiple
              bedrooms, pools, and lounges, designed to make your stay as
              comfortable as possible.
            </p>

            <p>
              <strong>
                How do I know the property I book is exactly what is listed?
              </strong>{" "}
              We ensure all properties are accurately listed and
              well-maintained. Our detailed, up-to-date listings include photos
              and comprehensive descriptions, so you can book with confidence.
              If you ever have questions about a property, our team is always
              available to assist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
