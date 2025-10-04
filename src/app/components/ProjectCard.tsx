// src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    // ✨ CHANGE IS ON THIS LINE: Removed "max-w-3xl mx-auto" and added "h-full"
    <motion.div 
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col w-full h-full border border-gray-700"
      whileHover={{ y: -3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image on top */}
      <div className="relative">
        <Image
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white font-medium">{project.title}</span>
        </div>
      </div>

      {/* Content below */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="flex space-x-2">
              {project.featured && (
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Featured</span>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack?.map((tech, index) => (
              <span 
                key={index} 
                className="px-2.5 py-1 bg-gray-700/50 rounded-full text-xs text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-3 mt-auto">
          <motion.a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-sm px-3 py-2 bg-cyan-600/10 hover:bg-cyan-600/20 rounded-md transition-colors text-cyan-400"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiExternalLink className="text-base" />
            <span>Live Demo</span>
          </motion.a>
          <motion.a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-sm px-3 py-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-md transition-colors text-gray-300"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="text-base" />
            <span>Source</span>
          </motion.a>
          <motion.a 
            href={project.detailsLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-sm px-3 py-2 bg-gray-700/50 hover:bg-gray-700/70 rounded-md transition-colors text-gray-300"
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Details</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;