import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl text-gray-600 mb-8">
          I m a Full Stack Developer passionate about creating amazing web experiences
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/projects" className="btn-primary">
            View My Projects
          </Link>
          <Link href="/blogs" className="btn-primary">
            Read My Blogs
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
          <h2 className="text-2xl font-bold mb-4 primary-text">Frontend Development</h2>
          <p className="text-gray-600">
            Creating responsive and interactive user interfaces with modern frameworks like React, Next.js, and Tailwind CSS.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
          <h2 className="text-2xl font-bold mb-4 primary-text">Backend Development</h2>
          <p className="text-gray-600">
            Building robust server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md card-shadow">
          <h2 className="text-2xl font-bold mb-4 primary-text">Full Stack Solutions</h2>
          <p className="text-gray-600">
            Delivering end-to-end solutions that connect beautiful frontends with powerful backends.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          I m always interested in hearing about new projects and opportunities.
        </p>
        <Link href="/about" className="btn-primary">
          Contact Me
        </Link>
      </div>
    </div>
  );
}