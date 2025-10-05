'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

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

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl text-gray-600">The project you re trying to edit doesn t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Edit Project</h1>
      
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
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="githubUrl" className="block text-gray-700 font-medium mb-2">
              GitHub URL
            </label>
            <input
              type="text"
              id="githubUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="liveUrl" className="block text-gray-700 font-medium mb-2">
              Live URL
            </label>
            <input
              type="text"
              id="liveUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="technologies" className="block text-gray-700 font-medium mb-2">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              id="technologies"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="e.g. React, Node.js, MongoDB"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <span className="text-gray-700">Featured Project</span>
            </label>
          </div>
          
          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Project'}
          </button>
        </form>
      </div>
    </div>
  );
}