import React from "react";
import { motion } from "framer-motion";
import khb from "../assets/khb.png";
import cleanwave from "../assets/cleanWave.png";
import kasss from "../assets/kasss.png";
import avrmobile from "../assets/avrmobileapp.png";
import avrlankaweb from "../assets/avrlankaweb.png";
import walletpop from "../assets/walletpop.png";
import spark from "../assets/spark.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: "KHB Associates",
    description: "Custom website development for corporate clients.",
    image: khb,
    link: "/khb",
  },
  {
    title: "CleanWave Laundry",
    description: "Laundry management system with online booking.",
    image: cleanwave,
    link: "/cleanwave",
  },
  {
    title: "KASSS Advertising",
    description: "Creative and modern advertising and branding website.",
    image: kasss,
    link: "/Kasss",
  },
  {
    title: "AVR Lanka Tours",
    description: "Tourism website with package listings and inquiries.",
    image: avrlankaweb,
    link: "/AVRweb",
  },
  {
    title: "Walletpop",
    description: "Personal finance tracker dashboard UI.",
    image: walletpop,
    link: "/walletpop",
  },
  {
    title: "AVR Mobile App",
    description: "Tourism mobile app UI for AVR.",
    image: avrmobile,
    link: "/Avrmobileapp",
  },
  {
    title: "SPARK",
    description: "Volunteer management system for NGOs.",
    image: spark,
    link: "/spark",
  },
];

function Projects() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 md:px-10 text-white flex flex-col items-center bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2e]">
      <motion.h2
        className="mt-24 text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl shadow-xl border border-[#2e2e2e] overflow-hidden group hover:border-green-400 transition"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Image */}
            <div className="p-3 sm:p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover border-4 border-[#2e2e2e] rounded-2xl group-hover:border-green-400 transition-all duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 pt-0">
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-1 sm:mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-4 py-2 rounded-xl text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
