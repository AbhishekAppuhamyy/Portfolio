import React from "react";
import { Mail, Linkedin, Phone, Github } from "lucide-react"; // added Github
import { motion } from "framer-motion";
import abhi from "../assets/abhi.jpg";

function Home() {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 40%, #2c2c2e 100%)",
      }}
    >
      {/* Avatar with simple fade + scale + hover */}
      <motion.img
        src={abhi}
        alt="Avatar"
        className="w-28 h-28 rounded-full object-cover shadow-lg bg-white mb-6 cursor-pointer"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.1 }}
      />

      {/* Name with gradient text hover */}
      <motion.h1
        className="text-2xl md:text-3xl font-semibold text-center mb-2 cursor-pointer bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{
          backgroundPosition: "200% center",
          transition: { duration: 1, ease: "easeInOut" },
        }}
        style={{ backgroundSize: "200% auto" }}
      >
        Abhishek Appuhamy
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center mb-10 max-w-xl"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Hi, I’m a creative and detail-driven web developer passionate about
        building fast, modern, and user-friendly websites.
      </motion.p>

      {/* Contact Links */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/94774970990"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 rounded-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 10px #25D366",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Phone className="w-5 h-5 text-white" />
          <div className="text-left">
            <div className="text-white">WhatsApp</div>
            <div className="text-green-400">+94 077 497 0990 ↗</div>
          </div>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:abhixhek103@gmail.com"
          className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 rounded-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 10px #00C6FF",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Mail className="w-5 h-5 text-white" />
          <div className="text-left">
            <div className="text-white">Email</div>
            <div className="text-green-400">abhixhek103@gmail.com</div>
          </div>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/abhishek-appuhamy-03a983366/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 rounded-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 10px #0077B5",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Linkedin className="w-5 h-5 text-white" />
          <div className="text-left">
            <div className="text-white">LinkedIn</div>
            <div className="text-green-400">@abhishekappuhamy ↗</div>
          </div>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/AbhishekAppuhamyy" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-3 rounded-xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 10px #ffffff",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Github className="w-5 h-5 text-white" />
          <div className="text-left">
            <div className="text-white">GitHub</div>
            <div className="text-green-400">@abhishekapppuhamyy</div>
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Home;
