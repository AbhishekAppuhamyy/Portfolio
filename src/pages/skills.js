import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaJava, FaPython, FaReact,
  FaNodeJs, FaWordpress, FaFigma, FaAndroid
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiExpress, SiMysql, SiKotlin, SiPostman
} from "react-icons/si";

// Skills data
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-green-400" />, level: 90 },
  { name: "CSS", icon: <FaCss3Alt className="text-green-400" />, level: 85 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-green-400" />, level: 70 },
  { name: "JavaScript", icon: <FaJs className="text-green-400" />, level: 70 },
  { name: "Java", icon: <FaJava className="text-green-400" />, level: 70 },
  { name: "PHP", icon: <FaPhp className="text-green-400" />, level: 90 },
  { name: "Python", icon: <FaPython className="text-green-400" />, level: 60 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: 80 },
  { name: "Express.js", icon: <SiExpress className="text-green-400" />, level: 70 },
  { name: "React.js", icon: <FaReact className="text-green-400" />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 70 },
  { name: "MySQL", icon: <SiMysql className="text-green-400" />, level: 80 },
  { name: "Kotlin", icon: <SiKotlin className="text-green-400" />, level: 70 },
  { name: "Figma", icon: <FaFigma className="text-green-400" />, level: 90 },
  { name: "WordPress", icon: <FaWordpress className="text-green-400" />, level: 80 },
  { name: "Android Studio", icon: <FaAndroid className="text-green-400" />, level: 80 },

];

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2e] text-white">
      <motion.h2
        className="text-3xl mt-24 md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-[#2e2e2e] cursor-pointer transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
            }}
            transition={{ type: "tween", duration: 0.5, delay: index * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-400 to-cyan-500 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-right text-gray-300 mt-1">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
