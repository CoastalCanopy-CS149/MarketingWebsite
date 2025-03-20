"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  MapIcon,
  BarChartIcon as ChartBarIcon,
  FlagIcon,
  TrophyIcon,
  BookOpenIcon,
  UsersIcon,
} from "lucide-react";

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

function Features() {
  const features = [
    {
      title: "Interactive Map",
      description:
        "Explore mangrove ecosystems across Sri Lanka with our detailed interactive map.",
      icon: <MapIcon className="w-10 h-10" />,
    },
    {
      title: "Monitoring",
      description:
        "Track the health and growth of mangrove forests with real-time monitoring tools.",
      icon: <ChartBarIcon className="w-10 h-10" />,
    },
    {
      title: "Reporting",
      description:
        "Report issues and contribute to mangrove conservation efforts.",
      icon: <FlagIcon className="w-10 h-10" />,
    },
    {
      title: "Gamification",
      description:
        "Earn rewards and track your impact through our gamified conservation activities.",
      icon: <TrophyIcon className="w-10 h-10" />,
    },
    {
      title: "Education",
      description:
        "Learn about mangrove ecosystems and their importance to our environment.",
      icon: <BookOpenIcon className="w-10 h-10" />,
    },
    {
      title: "Social Hub",
      description:
        "Connect with other conservationists and share your experiences.",
      icon: <UsersIcon className="w-10 h-10" />,
    },
  ];

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-12 bg-white/20 rounded-3xl text-white backdrop-blur-md p-8 md:p-12 relative z-10" id="about">
      <AnimatedSection className="mb-36">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Features;
