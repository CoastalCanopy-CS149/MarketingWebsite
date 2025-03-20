"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
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

function ContentSection({ title, description }) {
  return (
    <div className="space-y-6">
      <h2 className="text-5xl font-bold tracking-wide text-center">{title}</h2>
      <p className="text-xl leading-relaxed max-w-2xl mx-auto text-center">
        {description}
      </p>
    </div>
  );
}

function Aim() {
  return (
    <div className="w-11/12 max-w-6xl mx-auto my-12 bg-white/20 rounded-3xl text-white backdrop-blur-md p-8 md:p-12 relative z-10">
      <AnimatedSection className="mb-36">
        <div
          className="space-y-20"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <ContentSection
            title="Our Aim"
            description="Create a comprehensive, community-oriented web application, CoastalCanopy.lk, dedicated to the monitoring, protection, and sustainable management of mangrove ecosystems in Sri Lanka."
          />

          <ContentSection
            title="Our Mission"
            description="To educate communities and promote sustainable practices that protect and restore mangrove ecosystems."
          />

          <ContentSection
            title="Our Vision"
            description="A Sri Lanka where mangrove forests thrive, safeguarding biodiversity, livelihoods, and the planet."
          />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Aim;
