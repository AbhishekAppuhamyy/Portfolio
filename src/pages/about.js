import React from "react";
import { motion } from "framer-motion";
import abhi from "../assets/abhi.jpg";

function About() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-16"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 40%, #2c2c2e 100%)",
      }}
    >
      {/* Avatar */}
      <motion.img
        src={abhi}
        alt="Avatar"
        className="w-28 h-28 rounded-full object-cover shadow-lg bg-white mb-6 cursor-pointer mt-20 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-3xl font-semibold text-center mb-6 cursor-default bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* About paragraphs */}
      <motion.div
        className="max-w-3xl text-gray-300 space-y-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p>
          Hello! I’m Abhishek Appuhamy, a passionate web developer dedicated to
          crafting modern, efficient, and user-friendly websites. I specialize
          in building responsive and accessible web applications with a strong
          focus on performance and clean code.
        </p>
        <p>
          With a solid foundation in JavaScript, React, and backend technologies,
          I enjoy transforming complex problems into simple, elegant solutions.
          When I’m not coding, I’m continuously learning new tools and
          frameworks to stay ahead in the ever-evolving web development
          landscape.
        </p>
        <p>
          Feel free to reach out if you want to collaborate or just chat about
          the latest tech trends. I’m always excited to connect with fellow
          developers and enthusiasts!
        </p>
      </motion.div>
    </div>
  );
}

export default About;
