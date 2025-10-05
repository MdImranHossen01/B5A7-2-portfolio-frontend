'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import toast from 'react-hot-toast'; // Changed from react-toastify to react-hot-toast

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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-64 bg-gray-300 rounded mb-8"></div>
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-64 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold primary-text">Blogs</h2>
            <Link 
              href="/dashboard/blogs/new"
              className="btn-primary"
            >
              New Blog
            </Link>
          </div>
          <div className="space-y-4">
            {blogs.length === 0 ? (
              <p className="text-gray-600">No blogs yet.</p>
            ) : (
              blogs.map((blog) => (
                <div key={blog._id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">{blog.title}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(blog.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      href={`/dashboard/blogs/edit/${blog._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button 
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteBlog(blog._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold primary-text">Projects</h2>
            <Link 
              href="/dashboard/projects/new"
              className="btn-primary"
            >
              New Project
            </Link>
          </div>
          <div className="space-y-4">
            {projects.length === 0 ? (
              <p className="text-gray-600">No projects yet.</p>
            ) : (
              projects.map((project) => (
                <div key={project._id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div>
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm text-gray-500">
                      {project.featured ? 'Featured' : 'Not Featured'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Link 
                      href={`/dashboard/projects/edit/${project._id}`}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                    <button 
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
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