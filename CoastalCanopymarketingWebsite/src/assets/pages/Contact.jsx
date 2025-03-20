"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function AnimatedSection({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function Feedback() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, message: "Please fill in all fields" });
      return;
    }

    // Create a mailto link with the form data
    const subject = `Feedback from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
    const mailtoLink = `mailto:coastalcanopy.lk@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.open(mailtoLink, "_blank");

    // Update form status
    setFormStatus({
      submitted: true,
      message:
        "Thank you for your feedback! Your email client has been opened with your message.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-12 bg-white/20 rounded-3xl text-white backdrop-blur-md p-8 md:p-12 relative z-10" id="contact">
      <AnimatedSection>
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Share Your Feedback
        </h2>

        {formStatus.submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto p-6 bg-green-600/20 rounded-lg text-center"
          >
            <p className="text-xl mb-4">{formStatus.message}</p>
            <button
              onClick={() => setFormStatus({ submitted: false, message: "" })}
              className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form className="max-w-2xl mx-auto" onSubmit={handleFormSubmit}>
            {formStatus.message && (
              <div className="mb-4 p-3 bg-red-500/20 rounded-lg text-center">
                {formStatus.message}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white"
                placeholder="Your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-lg">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 text-white"
                placeholder="Your feedback"
              ></textarea>
            </div>

            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-3 bg-green-600 text-white font-bold rounded-full text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Feedback
              </motion.button>
            </div>
          </form>
        )}
      </AnimatedSection>
    </div>
  );
}

export default Feedback;
