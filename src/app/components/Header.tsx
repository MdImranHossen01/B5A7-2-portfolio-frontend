'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold primary-text">
          Portfolio
        </Link>
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-primary transition-colors">
            Blogs
          </Link>
          {user ? (
            <>
              <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-gray-700 hover:text-primary transition-colors">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;