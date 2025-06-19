import React, { useState } from "react";

const ApplyForm = ({ selectedJob, setSelectedJob }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    coverLetter: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitMsg, setSubmitMsg] = useState("");

  const closeApplyModal = () => {
    setSelectedJob(null);
    setSubmitMsg("");
    setFormErrors({});
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formData.coverLetter.trim())
      errors.coverLetter = "Cover letter is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitMsg(
        `Thank you, ${formData.name}! Your application for "${selectedJob.title}" has been received.`
      );
      setFormData({ name: "", email: "", coverLetter: "" });
      setFormErrors({});
    }
  };

  return (
    <div
      className=" backdrop-blur-xs fixed inset-0 bg-transparent bg-opacity-70 flex items-center justify-center z-50"
      onClick={closeApplyModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white rounded-xl p-8 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeApplyModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6">Apply for {selectedJob.title}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className={`w-full border rounded px-4 py-2 focus:outline-yellow-400 ${
                formErrors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {formErrors.name && (
              <p className="text-red-600 mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`w-full border rounded px-4 py-2 focus:outline-yellow-400 ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {formErrors.email && (
              <p className="text-red-600 mt-1">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="position" className="block font-semibold mb-1">
              Position
            </label>
            <input
              id="position"
              type="text"
              value={selectedJob.title}
              disabled
              className="w-full border rounded px-4 py-2 bg-gray-100 cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="coverLetter" className="block font-semibold mb-1">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              rows="5"
              className={`w-full border rounded px-4 py-2 focus:outline-yellow-400 ${
                formErrors.coverLetter ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.coverLetter}
              onChange={(e) =>
                setFormData({ ...formData, coverLetter: e.target.value })
              }
            ></textarea>
            {formErrors.coverLetter && (
              <p className="text-red-600 mt-1">{formErrors.coverLetter}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black w-full py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Submit Application
          </button>
          {submitMsg && (
            <p className="mt-4 text-green-600 font-semibold">{submitMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;