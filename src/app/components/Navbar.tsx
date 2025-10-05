// src/components/Navbar.jsx
"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";


const Navbar = () => {
  const { user, logout } = useAuth();
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    // Removed extra quotes from the path here
    { title: 'Blogs', path: '/blogs' }, 
  ];

  return (
    // Added 'bg-primary' utility (assuming you have mapped it in tailwind config)
    // or kept original 'bg-gray-800' for consistency.
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Logo/Home Link */}
        <a href="#home" className="text-2xl font-bold text-cyan-400">Md Imran Hossen</a>
        
        {/* Main Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <li key={link.title}>
              <a 
                href={link.path} 
                className="text-white hover:text-cyan-400 transition-colors duration-300"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Authentication Links - Wrapped in a new container to align with the rest */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link 
                href="/dashboard" 
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;