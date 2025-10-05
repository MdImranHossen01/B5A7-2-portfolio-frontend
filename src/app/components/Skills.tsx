// src/sections/Skills.jsx

"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiJavascript, SiMongodb, SiExpress, SiTailwindcss,
  SiFirebase, SiVercel, SiTypescript, SiNextdotjs, SiRedux
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'Redux', icon: <SiRedux />, color: 'text-purple-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-400' },
  { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-500' },
  { name: 'Express.js', icon: <SiExpress />, color: 'text-gray-400' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
  { name: 'GitHub', icon: <FaGithub />, color: 'text-gray-400' },
  { name: 'Vercel', icon: <SiVercel />, color: 'text-white' },
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I have mastered to build modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/20 h-full`}>
                <div className={`text-5xl mb-4 ${skill.color} transition-transform duration-300 group-hover:scale-110`}>
                  {skill.icon}
                </div>
                <p className="text-lg font-medium text-white">{skill.name}</p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-md -z-10 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;