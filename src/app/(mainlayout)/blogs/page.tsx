'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  tags: string[];
  publishedAt: string;
}

// Skeleton Loader Component
const BlogCardSkeleton = () => (
  <motion.div 
    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="animate-pulse">
      <div className="h-6 bg-gray-700 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-4 w-5/6"></div>
      <div className="flex space-x-2 mb-4">
        <div className="h-6 bg-gray-700 rounded w-16"></div>
        <div className="h-6 bg-gray-700 rounded w-20"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="h-4 bg-gray-700 rounded w-32"></div>
        <div className="h-4 bg-gray-700 rounded w-20"></div>
      </div>
    </div>
  </motion.div>
);

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
            My Blog
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <BlogCardSkeleton key={i} />
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
          My Blog
        </motion.h1>
        
        {blogs.length === 0 ? (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-400">No blog posts available at the moment.</p>
          </motion.div>
        ) : (
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {blogs.map((blog) => (
              <motion.div 
                key={blog._id} 
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {blog.title}
                  </h2>
                </Link>
                <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-cyan-900/30 text-cyan-400"
                    >
                      <FaTag className="mr-1" size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-400 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <Link 
                    href={`/blogs/${blog.slug}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}