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

function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is CoastalCanopy?",
      answer:
        "CoastalCanopy is a comprehensive web application dedicated to the monitoring, protection, and sustainable management of mangrove ecosystems in Sri Lanka.",
    },
    {
      question: "How can I contribute to mangrove conservation?",
      answer:
        "You can contribute by reporting issues, participating in conservation activities, donating to our cause, and spreading awareness about the importance of mangroves.",
    },
    {
      question: "Are mangroves important?",
      answer:
        "Yes, mangroves are crucial ecosystems that protect coastlines, provide habitats for marine life, sequester carbon, and support local livelihoods.",
    },
    {
      question: "How does the monitoring system work?",
      answer:
        "Our monitoring system uses a combination of satellite imagery, user reports, and field data to track the health and coverage of mangrove forests across Sri Lanka.",
    },
    {
      question: "Can I use CoastalCanopy on my mobile device?",
      answer:
        "Yes, CoastalCanopy is fully responsive and can be accessed on desktops, tablets, and mobile phones.",
    },
  ];

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-12 bg-white/20 rounded-3xl text-white backdrop-blur-md p-8 md:p-12 relative z-10" id="faq">
      <AnimatedSection className="mb-36">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <button
                className="w-full p-4 text-left font-semibold text-xl flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <span className="text-2xl">
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>
              {activeFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 pt-0 text-lg"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default FAQ;
