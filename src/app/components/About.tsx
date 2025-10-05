"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaServer, FaUsers } from 'react-icons/fa';
import Lottie from "lottie-react";
import devIllustration from '../../../public/developerskills.json';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Lottie Animation */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <Lottie 
              animationData={devIllustration} 
              loop={true} 
              className="w-full max-w-lg mx-auto"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="space-y-6 text-justify">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a passionate web developer from Bangladesh, learning and building with the MERN stack since January 2025. I focus on creating responsive, user-friendly interfaces with React and developing efficient backends using Node.js and Express. My goal is to deliver seamless full-stack applications that combine creativity with technical precision.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Outside of coding, I am an avid football and cricket player. The teamwork, discipline, and persistence I have learned from sports directly shape my approach to development—driving me to improve daily, solve problems efficiently, and collaborate effectively.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <motion.div 
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                whileHover={{ y: -5 }}
              >
                <FaReact className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Frontend</h4>
                <p className="text-sm text-gray-400">User-friendly interfaces with React</p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                whileHover={{ y: -5 }}
              >
                <FaServer className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Backend</h4>
                <p className="text-sm text-gray-400">Robust logic with Node.js & Express</p>
              </motion.div>

              <motion.div 
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                whileHover={{ y: -5 }}
              >
                <FaUsers className="text-4xl text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-lg mb-2">Philosophy</h4>
                <p className="text-sm text-gray-400">Discipline & teamwork from sports</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;