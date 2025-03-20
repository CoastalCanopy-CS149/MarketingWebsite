"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

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

function TeamMember({ name, role, image, bio, links }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6">
          <img
            src={image || `/imgs/team/${name.toLowerCase()}.jpg`}
            alt={name}
            className="w-full h-64 md:h-72 object-cover rounded-lg"
            onError={(e) => {
              e.target.src = "/imgs/team/placeholder.jpg";
            }}
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-lg text-green-300 mb-4">{role}</p>
          <p className="mb-6">{bio}</p>
          <div className="flex space-x-4">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            )}
            {links.email && (
              <a
                href={`mailto:${links.email}`}
                className="hover:text-green-300 transition-colors"
              >
                <MailIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AboutUs() {
  const teamMembers = [
    {
      name: "Dilki Attanayake",
      role: "Team Leader & Full Stack Developer",
      image: "/Images/Wathsala.jpg",
      bio: "A visionary leader driving the development of CoastalCanopy.lk, ensuring seamless collaboration and impactful outcomes.",
      links: {
        github: "https://github.com/DilkiAttanayake",
        linkedin: "https://www.linkedin.com/in/dilki-attanayake/",
      },
    },
    {
      name: "Malsha Gamage",
      role: "Frontend Developer & Backend Developer",
      image: "/Images/Malsha.jpg",
      bio: "A dedicated and passionate computer science student with a focus on software development and sustainable technologies.",
      links: {
        github: "https://github.com/MalshaPG",
        linkedin: "https://www.linkedin.com/in/malsha-gamage-633074293/",
      },
    },
    {
      name: "Lawanya Malavige",
      role: "Frontend Developer & Backend Developer",
      image: "/Images/Lawanya.jpg",
      bio: "A motivated team member with a passion for community engagement and environmental conservation.",
      links: {
        github: "https://github.com/LawanyaMalavige",
        linkedin: "https://www.linkedin.com/in/lawanya-malavige/",
      },
    },
    {
      name: "Devin Nanayakkara",
      role: "Frontend Developer & Backend Developer",
      image: "/Images/Devin.jpg",
      bio: "An aspiring computer science enthusiast with a keen interest in environmental sustainability.",
      links: {
        github: "https://github.com/devinnanayakkara",
        linkedin: "https://www.linkedin.com/in/devin-nanayakkara-2a134929b/",
      },
    },
    {
      name: "Dinaya Guruge",
      role: "Frontend Developer & ML Engineer",
      image: "/Images/Dinaya.jpg",
      bio: "A forward-thinking team member with expertise in project management and system integration.",
      links: {
        github: "https://github.com/Dinaya1",
        linkedin: "https://www.linkedin.com/in/dinaya-guruge/",
      },
    },
  ];

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-12 bg-white/20 rounded-3xl text-white backdrop-blur-md p-8 md:p-12 relative z-10" id="team">
      <AnimatedSection className="mb-16">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Meet Our Team
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          We are a passionate group of developers, designers, and environmental
          enthusiasts dedicated to preserving Sri Lanka's mangrove ecosystems
          through technology and community engagement.
        </p>

        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </AnimatedSection>

      
    </div>
  );
}

export default AboutUs;
