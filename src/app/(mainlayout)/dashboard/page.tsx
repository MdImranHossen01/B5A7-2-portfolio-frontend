'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaBlog, FaProjectDiagram } from 'react-icons/fa';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
}

interface Project {
  _id: string;
  title: string;
  description: string;
  featured: boolean;
}

export default function Dashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const blogsData = await blogsResponse.json();
        setBlogs(blogsData);

        const projectsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user, router]);

  if (loading) {
    return (
      <section className="py-20 bg-gray-800 text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dashboard
          </motion.h1>
          <div className="space-y-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded mb-4"></div>
              <div className="h-64 bg-gray-700 rounded mb-8"></div>
              <div className="h-8 bg-gray-700 rounded mb-4"></div>
              <div className="h-64 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Dashboard
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Blogs Section */}
          <motion.div 
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <FaBlog className="text-2xl text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Blogs</h2>
              </div>
              <Link 
                href="/dashboard/blogs/new"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <FaPlus className="mr-2" />
                New Blog
              </Link>
            </div>
            <div className="space-y-4">
              {blogs.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No blogs yet.</p>
              ) : (
                blogs.map((blog) => (
                  <motion.div 
                    key={blog._id} 
                    className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <h3 className="font-medium text-lg">{blog.title}</h3>
                      <p className="text-sm text-gray-400">
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <Link 
                        href={`/dashboard/blogs/edit/${blog._id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FaEdit />
                      </Link>
                      <button 
                        className="text-red-400 hover:text-red-300 transition-colors"
                        onClick={() => handleDeleteBlog(blog._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            className="bg-gray-900/50 p-6 rounded-lg border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <FaProjectDiagram className="text-2xl text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Projects</h2>
              </div>
              <Link 
                href="/dashboard/projects/new"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <FaPlus className="mr-2" />
                New Project
              </Link>
            </div>
            <div className="space-y-4">
              {projects.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No projects yet.</p>
              ) : (
                projects.map((project) => (
                  <motion.div 
                    key={project._id} 
                    className="flex justify-between items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div>
                      <h3 className="font-medium text-lg">{project.title}</h3>
                      <p className="text-sm text-gray-400">
                        {project.featured ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-400">
                            Featured
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-400">
                            Not Featured
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="flex space-x-3">
                      <Link 
                        href={`/dashboard/projects/edit/${project._id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FaEdit />
                      </Link>
                      <button 
                        className="text-red-400 hover:text-red-300 transition-colors"
                        onClick={() => handleDeleteProject(project._id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  async function handleDeleteBlog(id: string) {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        const token = localStorage.getItem('token');
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(blogs.filter(blog => blog._id !== id));
        toast.success('Blog deleted successfully');
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Failed to delete blog');
      }
    }
  }

  async function handleDeleteProject(id: string) {
    if (confirm('Are you sure you want to delete this project?')) {
      try {
        const token = localStorage.getItem('token');
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(projects.filter(project => project._id !== id));
        toast.success('Project deleted successfully');
      } catch (error) {
        console.error('Error deleting project:', error);
        toast.error('Failed to delete project');
      }
    }
  }
}