'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import toast from 'react-hot-toast';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  tags: string[];
}

export default function EditBlog() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState<string | undefined>('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setBlog(data);
        setTitle(data.title);
        setExcerpt(data.excerpt);
        setSlug(data.slug);
        setContent(data.content);
        setTags(data.tags.join(', '));
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to fetch blog');
      }
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${params.id}`, {
        method: 'PUT',
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
        toast.success('Blog updated successfully');
        router.push('/dashboard');
      } else {
        const data = await response.json();
        toast.error(data.message || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error('Failed to update blog');
    } finally {
      setLoading(false);
    }
  };

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-xl text-gray-600">The blog you re trying to edit doesn t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Edit Blog</h1>
      
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
            {loading ? 'Updating...' : 'Update Blog'}
          </button>
        </form>
      </div>
    </div>
  );
}