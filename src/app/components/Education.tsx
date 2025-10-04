// src/sections/Education.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import Lottie from "lottie-react";
import educationAnimation from '../assets/ExamPreparation.json';

const educationData = [
  {
    degree: "Masters of Business Administration (MBA)",
    institution: "Govt. Titumir College, Dhaka",
    year: "2015 - 2016",
    description: "Advanced studies in financial management, banking operations, and investment analysis.",
    icon: <IoIosSchool className="text-2xl" />,
    highlights: [
      "Specialized in Financial Management",
      "Thesis on Modern Banking Practices",
      "GPA: 2.63/4.0"
    ]
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Govt. Titumir College, Dhaka",
    year: "2011 - 2014",
    description: "A comprehensive business education with a focus on financial systems and banking principles.",
    icon: <FaGraduationCap className="text-xl" />,
    highlights: [
      "Major in Banking & Finance",
      "President of Business Club",
      "GPA: 3.11/4.0"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 w-full">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center mb-4">
            <span className="h-px w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mr-4"></span>
            <FaBookOpen className="text-cyan-400 text-xl" />
            <span className="h-px w-16 bg-gradient-to-r from-blue-500 to-cyan-400 ml-4"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
            Academic Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            The foundation of my professional expertise
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Side: Lottie Animation */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Lottie 
              animationData={educationAnimation} 
              loop={true}
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          {/* Right Side: Education Timeline */}
          <div className="lg:w-1/2 w-full">
            <div className="relative pl-8 sm:pl-12">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/20 via-blue-500/40 to-cyan-500/20"></div>

              {educationData.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative mb-12 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center border-4 border-gray-900 shadow-lg shadow-cyan-500/20 z-10">
                    {edu.icon}
                  </div>

                  {/* Education card */}
                  <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-cyan-400/30 hover:shadow-cyan-500/20 group-hover:scale-[1.01]">
                    
                    {/* ✨ CHANGED SECTION START */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        {edu.degree}
                      </span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                      <p className="text-blue-300 font-medium">{edu.institution}</p>
                      <span className="text-sm text-cyan-400 bg-gray-900/50 px-3 py-1 rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    {/* ✨ CHANGED SECTION END */}

                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    <div className="border-t border-gray-700/50 pt-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">KEY HIGHLIGHTS</h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;