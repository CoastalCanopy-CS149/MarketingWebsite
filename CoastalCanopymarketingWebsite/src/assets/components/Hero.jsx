"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import background from "/Images/aim_background.jpg";
import laptopImage from "/Images/laptop.png";
import mobileImage from "/Images/phone.png";

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

function About() {
  return (
    <div className="flex flex-col min-h-screen" id="hero">
      <div
        className="fixed inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Main Content Container with consistent blur background */}
      <div className="w-11/12 max-w-6xl mx-auto my-1 bg-white/20 rounded-3xl text-white backdrop-blur-md p-4 md:p-12 relative z-10">
        {/* Donate Button at the top */}
        <AnimatedSection className="mb-16">
          <div className="flex justify-center">
            <motion.button
              className="px-8 py-4 bg-green-600 text-white font-bold rounded-full text-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  "0px 15px 25px rgba(0, 0, 0, 0.2)",
                  "0px 5px 15px rgba(0, 0, 0, 0.1)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              Donate Now
            </motion.button>
          </div>
        </AnimatedSection>

        {/* About Coastal Canopy Section */}
        <AnimatedSection className="mb-28">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Coastal Canopy
          </h2>

          <div className="flex flex-col gap-8 justify-center items-center">
            {/* Device Images Container */}
            <div className="w-full max-w-7xl flex justify-center items-center">
              <div className="relative w-full h-96 md:h-[450px] flex justify-center">
                {/* Laptop Image - Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 max-w-xs sm:max-w-md ">
                  <img
                    src={laptopImage || "/imgs/aim/laptop.jpg"}
                    alt="CoastalCanopy on Desktop"
                    className="rounded-lg object-contain h-96 md:h-96"
                  />
                </div>

                {/* Phone Image - Bottom Right of Laptop */}
                <div className="absolute left-1/2 transform translate-x-16 md:translate-x-24 top-32 md:top-40 ">
                  <img
                    src={mobileImage || "/imgs/aim/phone.png"}
                    alt="CoastalCanopy on Mobile"
                    className="rounded-lg object-contain h-48 md:h-64 hidden md:block "
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-xl text-center">
            CoastalCanopy.lk is a community-driven platform dedicated to
            preserving Sri Lanka's vital mangrove ecosystems through technology,
            education, and collective action. We empower local communities to
            become guardians of Sri Lanka's precious mangrove forests, ensuring
            these vital ecosystems thrive for generations to come.
          </p>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default About;