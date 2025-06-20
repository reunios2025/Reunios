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
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold
                     hover:bg-orange-600 transition-colors transform hover:scale-105 shadow-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-slate-900 text-center mb-16"
            data-aos="fade-up"
          >
            Contact Information
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email Card */}
            <div
              className="bg-slate-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Email</h3>
              <p className="text-slate-600 mb-6">
                reservations@hottubcondos.com
              </p>
              <a
                href="mailto:reservations@hottubcondos.com"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold
                         hover:bg-orange-600 transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Phone Card */}
            <div
              className="bg-slate-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-cyan-600"
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">Phone</h3>
              <p className="text-slate-600 mb-6">+1 (555) 123-4567</p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold
                         hover:bg-cyan-600 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Location Card */}
            <div
              className="bg-slate-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-slate-600"
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
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Office Location
              </h3>
              <p className="text-slate-600 mb-4">
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

      {/* Main FAQ Section - Everything You Need to Know */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our vacation rental
              services, booking process, and policies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Booking & Reservations */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Booking & Reservations
                </h3>
              </div>

              <div className="space-y-6">
                <div
                  className="cursor-pointer group"
                  onClick={() =>
                    setOpenFaq(openFaq === "booking1" ? null : "booking1")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      How do I make a reservation?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "booking1" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "booking1" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      You can book directly through our Airbnb listings or
                      contact our reservations team at
                      reservations@hottubcondos.com. We'll help you find the
                      perfect property for your stay and guide you through the
                      booking process.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "booking2" ? null : "booking2")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      What is your cancellation policy?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "booking2" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "booking2" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Our cancellation policy varies by property and booking
                      platform. For Airbnb bookings, the standard Airbnb
                      cancellation policy applies. For direct bookings, we offer
                      flexible cancellation up to 48 hours before check-in for a
                      full refund, with some exceptions during peak seasons.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "booking3" ? null : "booking3")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      What payment methods do you accept?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "booking3" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "booking3" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      We accept all major credit cards (Visa, MasterCard,
                      American Express, Discover) for direct bookings. For
                      Airbnb bookings, payment is processed through Airbnb's
                      platform which accepts various payment methods including
                      credit cards, PayPal, and digital wallets.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Property & Amenities */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-cyan-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Property & Amenities
                </h3>
              </div>

              <div className="space-y-6">
                <div
                  className="cursor-pointer group"
                  onClick={() =>
                    setOpenFaq(openFaq === "property1" ? null : "property1")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                      What amenities are included?
                    </h4>
                    <span className="text-cyan-600 text-xl font-bold">
                      {openFaq === "property1" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "property1" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Our properties feature premium amenities including
                      high-speed WiFi, fully equipped kitchens, hot tubs, pools,
                      comfortable living spaces, and hotel-quality linens.
                      Specific amenities vary by property - check individual
                      listings for detailed amenity lists.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "property2" ? null : "property2")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                      Are your properties family-friendly?
                    </h4>
                    <span className="text-cyan-600 text-xl font-bold">
                      {openFaq === "property2" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "property2" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Absolutely! Most of our properties are designed with
                      families in mind, featuring multiple bedrooms, spacious
                      living areas, kid-friendly amenities, and safety features.
                      Many properties also include pools, game rooms, and
                      outdoor spaces perfect for family gatherings.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "property3" ? null : "property3")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-cyan-600 transition-colors">
                      Do you allow pets?
                    </h4>
                    <span className="text-cyan-600 text-xl font-bold">
                      {openFaq === "property3" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "property3" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Pet policies vary by property. Some of our properties are
                      pet-friendly with additional fees, while others do not
                      allow pets. Please check the specific property listing or
                      contact us directly to confirm pet policies for your
                      desired dates.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Support & Service */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-slate-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Support & Service
                </h3>
              </div>

              <div className="space-y-6">
                <div
                  className="cursor-pointer group"
                  onClick={() =>
                    setOpenFaq(openFaq === "support1" ? null : "support1")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">
                      Is there 24/7 customer support?
                    </h4>
                    <span className="text-slate-600 text-xl font-bold">
                      {openFaq === "support1" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "support1" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Yes! We provide 24/7 guest support throughout your entire
                      stay. Our team typically responds within 1 hour and is
                      available via phone, email, or text message for any
                      questions or assistance you may need.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "support2" ? null : "support2")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">
                      What are check-in/check-out times?
                    </h4>
                    <span className="text-slate-600 text-xl font-bold">
                      {openFaq === "support2" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "support2" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Standard check-in is at 4:00 PM and check-out is at 11:00
                      AM. We offer flexible check-in/check-out times when
                      possible - just let us know your needs and we'll do our
                      best to accommodate special requests.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "support3" ? null : "support3")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-slate-600 transition-colors">
                      What if there's an issue during my stay?
                    </h4>
                    <span className="text-slate-600 text-xl font-bold">
                      {openFaq === "support3" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "support3" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      If you encounter any issues during your stay, contact our
                      24/7 support team immediately. We're committed to
                      resolving problems quickly and ensuring your stay meets
                      our high standards. We'll work diligently to address any
                      concerns and make things right.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* About Reunios */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  About Reunios
                </h3>
              </div>

              <div className="space-y-6">
                <div
                  className="cursor-pointer group"
                  onClick={() =>
                    setOpenFaq(openFaq === "about1" ? null : "about1")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      What makes Reunios different?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "about1" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "about1" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      At Reunios, we don't just offer a place to stay; we
                      deliver a seamless, peace of mind experience. Our focus is
                      on clarity, consistency, and reliability, ensuring every
                      stay is well-managed from the moment you book to the
                      moment you check out. We combine the comfort of home with
                      the convenience of hotel-style services.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "about2" ? null : "about2")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      What areas do you serve?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "about2" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "about2" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Reunios operates in prime vacation destinations across the
                      United States, including popular mountain towns, beach
                      communities, and resort areas. Our properties are located
                      in destinations like Park City, Utah; Kihei, Hawaii;
                      Marina Dunes, California; and Indio, California, with
                      plans to expand to additional premium locations.
                    </p>
                  )}
                </div>

                <div
                  className="cursor-pointer group border-t pt-4"
                  onClick={() =>
                    setOpenFaq(openFaq === "about3" ? null : "about3")
                  }
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      Do you offer group discounts?
                    </h4>
                    <span className="text-orange-600 text-xl font-bold">
                      {openFaq === "about3" ? "−" : "+"}
                    </span>
                  </div>
                  {openFaq === "about3" && (
                    <p className="text-slate-600 mt-3 leading-relaxed">
                      Yes! We offer competitive rates for group bookings,
                      corporate retreats, and extended stays. Our properties are
                      perfect for family reunions, wedding parties, corporate
                      team-building events, and other group gatherings. Contact
                      our reservations team to discuss group pricing and
                      availability.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16" data-aos="fade-up">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Our knowledgeable support team is here to help! Whether you have
                questions about specific properties, booking policies, or need
                assistance during your stay, we're just a phone call or email
                away.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="mailto:reservations@hottubcondos.com"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="tel:+15551234567"
                  className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Call +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
