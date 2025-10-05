'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FaCalendarAlt, FaTag, FaArrowLeft, FaClock } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Blog {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  tags: string[];
  publishedAt: string;
}

// Custom components for Markdown rendering
const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="rounded-md overflow-x-auto"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={`${className} bg-gray-800 px-1 py-0.5 rounded text-cyan-400`} {...props}>
        {children}
      </code>
    );
  },
  h1: ({ children }: any) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
  h2: ({ children }: any) => <h2 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h2>,
  h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-4 mb-2">{children}</h3>,
  p: ({ children }: any) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
  a: ({ href, children }: any) => <a href={href} className="text-cyan-400 hover:text-cyan-300 underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  ul: ({ children }: any) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">{children}</ul>,
  ol: ({ children }: any) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">{children}</ol>,
  blockquote: ({ children }: any) => <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-400 my-4">{children}</blockquote>,
};

export default function BlogPost() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.slug}`);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  // Calculate reading time (rough estimate)
  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-900 text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-10 bg-gray-800 rounded mb-4 w-3/4"></div>
              <div className="flex space-x-2 mb-4">
                <div className="h-6 bg-gray-800 rounded w-20"></div>
                <div className="h-6 bg-gray-800 rounded w-16"></div>
              </div>
              <div className="h-4 bg-gray-800 rounded mb-2"></div>
              <div className="h-4 bg-gray-800 rounded mb-2"></div>
              <div className="h-4 bg-gray-800 rounded w-5/6 mb-6"></div>
              <div className="h-64 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="py-20 bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Blog Post Not Found</h1>
          <p className="text-xl text-gray-400 mb-6">The blog post you are looking for does not exist.</p>
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
    <article className="py-20 bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => router.back()}
            className="mb-8 flex items-center text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft className="mr-2" />
            Back to Blogs
          </motion.button>

          {/* Blog Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                {calculateReadingTime(blog.content)} min read
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/30 text-cyan-400 border border-cyan-800/50"
                >
                  <FaTag className="mr-1" size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Blog Content */}
          <motion.div
            className="prose prose-lg prose-invert max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {blog.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </div>
    </article>
  );
}