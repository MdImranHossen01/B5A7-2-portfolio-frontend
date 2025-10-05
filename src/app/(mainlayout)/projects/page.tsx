'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  featured: boolean;
}

// Skeleton Loader Component
const ProjectCardSkeleton = () => (
  <motion.div 
    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="animate-pulse">
      <div className="h-48 bg-gray-700 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-700 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>
      <div className="flex space-x-2 mb-4">
        <div className="h-6 bg-gray-700 rounded w-16"></div>
        <div className="h-6 bg-gray-700 rounded w-20"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-4 bg-gray-700 rounded w-16"></div>
        <div className="h-4 bg-gray-700 rounded w-20"></div>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        {projects.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaCode className="text-6xl text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-400">No projects available at the moment.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => {
              // --- ROBUST IMAGE LOGIC ---
              const isValidImageUrl = project.image && project.image.startsWith('http');
              const fallbackImage = "https://picsum.photos/seed/fallback/600/400.jpg";

              return (
                <motion.div 
                  key={project._id} 
                  className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden flex flex-col"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-md">
                    <Image 
                      // Use the valid image or the fallback
                      src={isValidImageUrl ? project.image : fallbackImage} 
                      alt={project.title} 
                      width={600} // Provide a larger size for better quality
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      // Add an onError handler as a last resort
                      onError={(e) => {
                        // Type assertion to access currentTarget
                        const target = e.target as HTMLImageElement;
                        target.src = fallbackImage;
                      }}
                    />
                    {project.featured && (
                      <span className="absolute top-2 right-2 px-2 py-1 bg-cyan-600 text-white text-xs font-bold rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-gray-700/50 text-cyan-400 text-xs rounded border border-cyan-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    {/* Use <a> for external links */}
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub className="mr-1" />
                      Code
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-1" />
                      Live
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}