"use client";

import Image from "next/image";
import myImage from "../../../public/Md-Imran-Hossen-profile.png";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDownload } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  // ✅ Type-safe animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        {/* ---------- Left Side: Text Content ---------- */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
            variants={itemVariants}
          >
            Md Imran Hossen
          </motion.h1>

          <motion.div
            className="text-2xl mt-4 text-cyan-400 font-medium h-10"
            variants={itemVariants}
          >
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Web Designer",
                1500,
                "Frontend Specialist",
                1500,
                "Backend Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ display: "inline-block" }}
            />
          </motion.div>

          <motion.p
            className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I build high-performance and scalable web applications using
            cutting-edge technologies, ensuring exceptional user experience and
            pixel-perfect design.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start items-center"
            variants={itemVariants}
          >
            {/* Resume Download */}
            <a
              href="/dev-imran-resume.pdf"
              download="dev-imran-resume.pdf"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
            >
              <FaDownload className="text-lg" />
              Download Resume
            </a>

            {/* WhatsApp Contact */}
            <motion.a
              href="https://wa.me/8801919011101"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-green-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Contact on WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
              Contact Me
            </motion.a>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 lg:mt-0">
              <motion.a
                href="https://github.com/MdImranHossen01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dev-mdimranhossen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.upwork.com/freelancers/mdimranhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-2xl"
                whileHover={{ y: -3 }}
              >
                <FaSquareUpwork />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* ---------- Right Side: Image Section ---------- */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="relative rounded-full p-1 bg-gradient-to-r from-cyan-400 to-blue-500">
              <div className="rounded-full overflow-hidden border-4 border-gray-800">
                <Image
                  src={myImage}
                  alt="Md Imran Hossen"
                  width={400}
                  height={400}
                  priority
                  className="object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full shadow-lg shadow-cyan-500/30 animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
