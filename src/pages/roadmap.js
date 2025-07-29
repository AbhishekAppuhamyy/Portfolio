import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaRust,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiKotlin,
  SiFlutter,
  SiGraphql,
  SiMysql,
} from "react-icons/si";

const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-orange-400" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  PHP: <FaPhp className="text-orange-300" />,
  Java: <FaJava className="text-red-500" />,
  Python: <FaPython className="text-yellow-300" />,
  "React.js": <FaReact className="text-green-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-green-300" />,
  "Node.js": <FaNodeJs className="text-lime-400" />,
  "Express.js": <SiExpress className="text-gray-200" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  Kotlin: <SiKotlin className="text-orange-300" />,
  Flutter: <SiFlutter className="text-green-300" />,
  GraphQL: <SiGraphql className="text-orange-400" />,
  SQL: <SiMysql className="text-yellow-400" />,
  Rust: <FaRust className="text-orange-300" />,
};

const roadmapData = [
  {
    year: "2020",
    frontend: ["HTML", "CSS"],
    backend: ["SQL"],
  },
  {
    year: "2022",
    frontend: ["JavaScript"],
    backend: ["PHP"],
  },
  {
    year: "2023",
    frontend: [],
    backend: ["Java", "Python"],
  },
  {
    year: "2024",
    frontend: ["React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "Kotlin"],
  },
  {
    year: "2025 (Next Targets)",
    frontend: ["Flutter", "GraphQL"],
    backend: ["Node.js", "Rust"],
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function Roadmap() {
  return (
    <div className="min-h-screen py-20 px-6 text-white bg-gradient-to-br from-[#0d0d0d] via-[#1a1a1a] to-[#2c2c2e] flex flex-col items-center">
      <motion.h2
        className="text-3xl mt-24 md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-cyan-400 to-lime-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Roadmap
      </motion.h2>

      <motion.div
        className="flex flex-col gap-12 max-w-6xl w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {roadmapData.map((itemData) => (
          <motion.div
            key={itemData.year}
            className="relative p-6 rounded-2xl bg-[#1a1a1a] border border-[#2e2e2e] transition shadow-lg cursor-pointer"
            variants={item}
            whileHover={{
              scale: 1.05,
              rotate: [0, 1, -1, 0],
              boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
              borderColor: "#22c55e",
            }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
              <h3 className="text-xl font-bold text-green-400">{itemData.year}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Frontend Section */}
              <div>
                <p className="text-sm text-white mb-2 font-semibold text-left">
                  Frontend
                </p>
                {itemData.frontend.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {itemData.frontend.map((tech) => (
                      <motion.span
                        key={tech}
                        className="flex items-center gap-2 bg-white/10 border border-white text-white px-4 py-2 rounded-full text-sm md:text-base cursor-pointer select-none"
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, 1, -1, 0],
                          boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
                        }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                      >
                        <span className="text-xl md:text-2xl">{techIcons[tech] || "🔧"}</span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-xs italic">No new frontend skills</p>
                )}
              </div>

              {/* Backend Section */}
              <div>
                <p className="text-sm text-white mb-2 font-semibold text-left">
                  Backend
                </p>
                {itemData.backend.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {itemData.backend.map((tech) => (
                      <motion.span
                        key={tech}
                        className="flex items-center gap-2 bg-white/10 border border-white text-white px-4 py-2 rounded-full text-sm md:text-base cursor-pointer select-none"
                        whileHover={{
                          scale: 1.05,
                          rotate: [0, 1, -1, 0],
                          boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)",
                        }}
                        transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
                      >
                        <span className="text-xl md:text-2xl">{techIcons[tech] || "🔧"}</span>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-xs italic">No backend skills</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Roadmap;
