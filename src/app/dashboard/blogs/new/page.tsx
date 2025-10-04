'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
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
          content, // This will now be Markdown
          tags: tags.split(',').map(tag => tag.trim()),
        }),
      });

      if (response.ok) {
        toast.success('Blog created successfully');
        router.push('/dashboard');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Failed to create blog');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error('Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Create New Blog</h1>
      
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md card-shadow">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="excerpt" className="block text-gray-700 font-medium mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 font-medium mb-2">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
              Tags (comma separated)
            </label>
            <input
              type="text"
              id="tags"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. JavaScript, React, Web Development"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Content (Markdown)
            </label>
            <div data-color-mode="light">
              <MDEditor
                value={content}
                onChange={(val) => setContent(val)}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}