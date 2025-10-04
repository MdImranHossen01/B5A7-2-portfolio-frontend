// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import icons
import { FaSquareUpwork} from 'react-icons/fa6';

const Footer = () => {
  // Automatically gets the current year
  const currentYear = new Date().getFullYear();

  // Replace with your actual social media links
  const socialLinks = {
    github: 'https://github.com/MdImranHossen01',
    linkedin: 'https://linkedin.com/in/dev-mdimranhossen',
    facebook: 'https://facebook.com/imranshuvo101',
    upwork: 'https://www.upwork.com/freelancers/mdimranhossen',
  };

  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright Notice */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {currentYear} Imran Hossen. All Rights Reserved.</p>
            <p className="text-sm">Built with React & Tailwind CSS</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href={socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href={socialLinks.upwork} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Upwork"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaSquareUpwork size={24} />
              

            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;