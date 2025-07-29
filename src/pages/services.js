import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaTools,
  FaWordpress,
} from "react-icons/fa";

// Animation variants
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

function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Beautiful, responsive interfaces using React, Tailwind CSS, and Framer Motion.",
      icon: <FaReact className="text-4xl text-green-400 animate-bounce" />,
    },
    {
      title: "Backend Development",
      description:
        "RESTful APIs and backend logic using Node.js, Express, and MongoDB.",
      icon: <FaNodeJs className="text-4xl text-green-400 animate-pulse" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Clean and user-friendly designs that focus on usability and performance.",
      icon: <FaFigma className="text-4xl text-green-400 animate-spin-slow" />,
    },
    {
      title: "Website Maintenance",
      description:
        "Regular updates, backups, and performance optimization to keep your site running smoothly.",
      icon: <FaTools className="text-4xl text-green-400 animate-wiggle" />,
    },
    {
      title: "WordPress Development",
      description:
        "Custom WordPress themes and plugins to enhance your website's functionality.",
      icon: <FaWordpress className="text-4xl text-green-400 animate-float" />,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6 text-white flex flex-col items-center bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2e]">
      <motion.h2
        className="text-3xl mt-24 md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-[#2e2e2e] hover:border-green-400 transition cursor-pointer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
