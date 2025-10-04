// src/sections/Projects.jsx
"use client";
import ProjectCard from '../components/ProjectCard';
import projImg from '../../../public/musafir.png';
import projImg1 from '../../../public/Pathchakro.png';
import projImg2 from '../../../public/Homa_Room.png';
import { motion } from 'framer-motion';

const projectsData = [
  // ... your project data remains the same
  {
    title: 'Musafir Traveller',
    description: "Musafir is a comprehensive travel booking platform built with React, Node.js, and MongoDB. It features hotel and room booking functionality with search filters, user authentication, booking management, and admin dashboard. The app includes secure payment processing with Stripe API, responsive design with Tailwind CSS, and real-time data management with MongoDB.",
    image: projImg,
    liveLink: 'https://marvelous-gaufre-bd3a39.netlify.app',
    repoLink: 'https://github.com/MdImranHossen01/A12-Musafir-Traveller',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Firebase Auth', 'Tailwind CSS'],
    detailsLink: '/project/musafir',
    featured: true
  },
  {
    title: 'Pathchakro',
    description: "Pathchakro is a dynamic, full-stack collaborative study platform built with MongoDB, Express.js, React, and Node.js. The system allows users to manage assignments, while the core feature is a peer-to-peer grading system where students can review and mark each other's work. It includes secure JWT Bearer Token authentication, a rich text editor for detailed descriptions, and an integrated book borrowing system.",
    image: projImg1,
    liveLink: 'https://pathchakro-a6827.web.app',
    repoLink: 'https://github.com/MdImranHossen01/A11-Pathchakro.git',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    detailsLink: '/project/pathchakro',
    featured: true
  },
  {
    title: 'Homa Room',
    description: "Homa Room is a full-stack web app built with React & Firebase that helps users find compatible roommates through location-based filtering, budget matching, and real-time chat. It includes Firebase Auth (Google/email login), Firestore database for profile storage, and a responsive UI with Tailwind CSS. The app simplifies roommate searches with instant messaging and smart filters, ensuring seamless connections.",
    image: projImg2,
    liveLink: 'https://roommate-finder-5c556.web.app',
    repoLink: 'https://github.com/MdImranHossen01/A10-Roomate-Finder',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    detailsLink: '/project/homa-room',
    featured: true
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            My Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured works. Each project represents unique challenges and solutions.
          </p>
        </motion.div>

        {/* ✨ CHANGE IS ON THIS LINE: Replaced "space-y-12" with grid layout classes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;