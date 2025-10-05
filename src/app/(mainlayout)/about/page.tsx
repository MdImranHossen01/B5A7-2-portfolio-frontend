"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-800 text-white overflow-hidden"
    >
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

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-16">
          {/* Left Side: Profile Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <Image
                src="/Md-Imran-Hossen-profile.png"
                alt="Profile"
                className="relative rounded-full shadow-2xl w-full h-auto border-4 border-gray-700"
                width={600}
                height={600}
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div>
              <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Md. Imran Hossen
              </h3>
              <p className="text-xl text-gray-400 mb-6">Full Stack Developer</p>
            </div>

            <div className="space-y-6 text-justify">
              <p className="text-lg text-gray-300 leading-relaxed">
                I m a passionate full stack developer with over 5 years of
                experience in creating web applications. I love working with
                modern technologies and solving complex problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise includes React, Next.js, Node.js, Express, MongoDB,
                and PostgreSQL. I m always eager to learn new technologies and
                improve my skills.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ y: -5 }}
            >
              <FaReact className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-4">Frontend</h4>
              <ul className="space-y-2 text-gray-300">
                <li>HTML/CSS</li>
                <li>JavaScript/TypeScript</li>
                <li>React/Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ y: -5 }}
            >
              <FaServer className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-4">Backend</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js/Express</li>
                <li>MongoDB/Mongoose</li>
                <li>PostgreSQL/Prisma</li>
                <li>REST APIs</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ y: -5 }}
            >
              <FaTools className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>Docker</li>
                <li>CI/CD</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              whileHover={{ y: -5 }}
            >
              <FaLightbulb className="text-4xl text-cyan-400 mb-4" />
              <h4 className="text-xl font-bold mb-4">Other</h4>
              <ul className="space-y-2 text-gray-300">
                <li>UI/UX Design</li>
                <li>Agile/Scrum</li>
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Work Experience
          </h3>
          <div className="space-y-8">
            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Senior Full Stack Developer
              </h4>
              <p className="text-gray-400 mb-4">
                Tech Company | 2020 - Present
              </p>
              <p className="text-gray-300">
                Led development of multiple web applications using React,
                Node.js, and MongoDB. Improved application performance by 40%
                through optimization techniques.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Full Stack Developer
              </h4>
              <p className="text-gray-400 mb-4">Digital Agency | 2018 - 2020</p>
              <p className="text-gray-300">
                Developed and maintained client websites using various
                technologies. Collaborated with design team to implement
                responsive and user-friendly interfaces.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              whileHover={{ x: 10 }}
            >
              <h4 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Junior Web Developer
              </h4>
              <p className="text-gray-400 mb-4">Startup | 2017 - 2018</p>
              <p className="text-gray-300">
                Assisted in the development of web applications and gained
                experience in frontend and backend technologies.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
