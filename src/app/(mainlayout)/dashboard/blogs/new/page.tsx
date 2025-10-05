'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaSave, FaArrowLeft } from 'react-icons/fa';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

export default function NewBlog() {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState<string | undefined>('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token); // DEBUG LOG 1

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        excerpt,
        slug,
        content,
        tags: tags.split(',').map(tag => tag.trim()),
      }),
    });

    if (response.ok) {
      toast.success('Blog created successfully');
      router.push('/dashboard');
    } else {
      // THIS IS THE NEW, IMPORTANT PART
      const errorData = await response.json();
      console.error('Error Response from Server:', errorData); // DEBUG LOG 2
      toast.error(errorData.message || `Failed to create blog (${response.status})`);
    }
  } catch (error) {
    console.error('Network/Fetch Error:', error); // DEBUG LOG 3
    toast.error('Failed to create blog');
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="py-20 bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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
              Create New Blog
            </motion.h1>
          </div>
          
          <motion.div 
            className="bg-gray-900/50 p-8 rounded-lg border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-gray-300 font-medium mb-2">
                  Title
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
              
              <div>
                <label htmlFor="excerpt" className="block text-gray-300 font-medium mb-2">
                  Excerpt
                </label>
                <textarea
                  id="excerpt"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  rows={3}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="slug" className="block text-gray-300 font-medium mb-2">
                  Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="tags" className="block text-gray-300 font-medium mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. JavaScript, React, Web Development"
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-gray-300 font-medium mb-2">
                  Content (Markdown)
                </label>
                <div className="border border-gray-700 rounded-md overflow-hidden">
                  <div data-color-mode="dark">
                    <MDEditor
                      value={content}
                      onChange={(val) => setContent(val)}
                      preview="edit"
                      hideToolbar={false}
                    />
                  </div>
                </div>
              </div>
              
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
                  {loading ? 'Creating...' : 'Create Blog'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}