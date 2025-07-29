import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { SiKotlin, SiAndroid } from "react-icons/si";
import avrmobileapp from "../assets/avrmobileapp.png"; // Make sure this image exists

const techStack = [
  { name: "XML", icon: <FaCode className="text-cyan-400" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
  { name: "Android SDK", icon: <SiAndroid className="text-green-600" /> },
];

const ProjectDetailAVRMobileApp = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2e] text-white px-6 py-20 flex flex-col items-center">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-10 flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl rounded-3xl overflow-hidden"
      >
        {/* Header */}
        <div className="text-center p-10 border-b border-white/10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-green-400"
          >
            AVR Mobile App
          </motion.h1>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            AVRtours is a travel app for Android, built with Kotlin and XML. It helps users explore destinations, manage itineraries, and plan trips easily. The app uses Firebase for real-time data and authentication, and Shared Preferences to store user preferences for a smooth travel experience.

          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 p-10">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <img
              src={avrmobileapp}
              alt="AVR Mobile App"
              className="rounded-2xl shadow-xl border border-white/10 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:saturate-150 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
            />
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Tech Stack:
              </h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-white/10 text-sm shadow-inner"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Add buttons below if needed */}
            <a
              href="https://github.com/AbhishekAppuhamyy/AVR-Tours-Mobile-App"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-center bg-green-500 hover:bg-green-600 hover:shadow-[0_0_20px_#22c55e] text-black font-semibold px-6 py-3 rounded-full transition duration-300"
            >
              Source Code
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailAVRMobileApp;
