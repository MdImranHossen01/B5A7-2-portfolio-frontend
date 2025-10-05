'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft, FaGithub, FaExternalLinkAlt, FaImage, FaSpinner } from 'react-icons/fa';

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

export default function EditProject() {
  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [featured, setFeatured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setProject(data);
        setTitle(data.title);
        setDescription(data.description);
        setImage(data.image);
        setGithubUrl(data.githubUrl);
        setLiveUrl(data.liveUrl);
        setTechnologies(data.technologies.join(', '));
        setFeatured(data.featured);
      } catch (error) {
        console.error('Error fetching project:', error);
        toast.error('Failed to fetch project');
      } finally {
        setFetchLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          image,
          githubUrl,
          liveUrl,
          technologies: technologies.split(',').map(tech => tech.trim()),
          featured,
        }),
      });

      if (response.ok) {
        toast.success('Project updated successfully');
        router.push('/dashboard');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Failed to update project');
      }
    } catch (error) {
      console.error('Error updating project:', error);
      toast.error('Failed to update project');
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <section className="py-20 bg-gray-800 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-cyan-400 mx-auto mb-4" />
          <p className="text-xl">Loading project data...</p>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="py-20 bg-gray-800 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Project Not Found</h1>
          <p className="text-xl text-gray-400 mb-6">The project you are trying to edit does not exist.</p>
          <motion.button
            onClick={() => router.back()}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go Back
          </motion.button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <motion.button
              type="button"
              onClick={() => router.back()}
              className="mr-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Edit Project
            </motion.h1>
          </div>
          
          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-gray-300 font-medium mb-2">
                  Project Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              
              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-gray-300 font-medium mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
              {/* Image URL */}
              <div>
                <label htmlFor="image" className="block text-gray-300 font-medium mb-2">
                  <FaImage className="inline mr-2" />
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              
              {/* URLs */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="githubUrl" className="block text-gray-300 font-medium mb-2">
                    <FaGithub className="inline mr-2" />
                    GitHub URL
                  </label>
                  <input
                    type="text"
                    id="githubUrl"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="liveUrl" className="block text-gray-300 font-medium mb-2">
                    <FaExternalLinkAlt className="inline mr-2" />
                    Live URL
                  </label>
                  <input
                    type="text"
                    id="liveUrl"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                    value={liveUrl}
                    onChange={(e) => setLiveUrl(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {/* Technologies */}
              <div>
                <label htmlFor="technologies" className="block text-gray-300 font-medium mb-2">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  id="technologies"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  value={technologies}
                  onChange={(e) => setTechnologies(e.target.value)}
                  placeholder="e.g. React, Node.js, MongoDB"
                  required
                />
              </div>
              
              {/* Featured Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  className="mr-3 h-5 w-5 rounded border-gray-700 bg-gray-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                />
                <label htmlFor="featured" className="text-gray-300 font-medium">
                  Feature this project on the homepage
                </label>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <motion.button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaSave className="mr-2" />
                {loading ? 'Updating...' : 'Update Project'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}