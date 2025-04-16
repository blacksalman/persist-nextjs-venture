// components/Navbar.jsx
'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ isScrolled }) => {
  const { isLoggedIn, logout, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);
  const dropdownRef = useRef(null);

  console.log('isLoggedIn', isLoggedIn, 'user', user);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const scrollToSection = (sectionId) => {
    if (pathname !== '/') {
      setScrollTarget(sectionId);
      router.push('/');
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Handle scrolling after navigation
  useEffect(() => {
    if (scrollTarget && pathname === '/') {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollTarget(null);
    }
  }, [pathname, scrollTarget]);

  // Close dropdown when clicking outside (optional for hover-based, can be removed)
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // No action needed for hover, but kept for potential click-based toggle
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  // Get user name, fallback to 'Guest' if not available
  const userName = user?.name || 'Guest';

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-[1400px] flex justify-between items-center px-10 py-5 bg-[rgba(39,39,68,0.98)] backdrop-blur-md rounded-full border border-[rgba(255,255,255,0.1)] transition-all duration-300 ${
        isScrolled ? 'py-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : ''
      }`}
    >
      <Link href="/" className="flex items-center gap-3 text-white no-underline">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 25.2c-6.188 0-11.2-5.012-11.2-11.2S9.812 4.8 16 4.8 27.2 9.812 27.2 16 22.188 27.2 16 27.2z"
            fill="#8A5CFF"
          />
          <path
            d="M16 7.2c-4.856 0-8.8 3.944-8.8 8.8s3.944 8.8 8.8 8.8 8.8-3.944 8.8-8.8-3.944-8.8-8.8-8.8zm0 14.4c-3.08 0-5.6-2.52-5.6-5.6s2.52-5.6 5.6-5.6 5.6 2.52 5.6 5.6-2.52 5.6-5.6 5.6z"
            fill="#8A5CFF"
          />
        </svg>
        <span className="text-[1.2rem] font-semibold tracking-[0.5px]">
          CAREER ACCELERATOR
        </span>
      </Link>
      <div className="flex gap-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-[rgba(255,255,255,0.8)] text-[1.2rem] font-light no-underline relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#8a5cff] after:transition-width after:duration-300 after:w-0 hover:after:w-full"
        >
          Home
        </a>
        <Link
          href="/search-jobs"
          className="text-[rgba(255,255,255,0.8)] text-[1.2rem] font-light no-underline relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#8a5cff] after:transition-width after:duration-300 after:w-0 hover:after:w-full"
        >
          Search for Jobs
        </Link>
        <Link
          href="/start-hiring"
          className="text-[rgba(255,255,255,0.8)] text-[1.2rem] font-light no-underline relative hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#8a5cff] after:transition-width after:duration-300 after:w-0 hover:after:w-full"
        >
          Start Hiring
        </Link>
      </div>
      <div className="relative" ref={dropdownRef}>
        {isLoggedIn ? (
          <div className="flex items-center group">
            <button
              className="text-white text-[0.95rem] font-medium bg-[#8a5cff] px-4 py-2 rounded-full border-none cursor-pointer hover:bg-[#7b4ee6] transition-colors duration-300 flex items-center gap-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white text-[0.95rem] font-medium">{userName}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-[rgba(39,39,68,0.98)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <Link
                href="/dashboard"
                className="block px-4 py-2 text-[rgba(255,255,255,0.8)] text-[1rem] hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded-t-lg"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-[rgba(255,255,255,0.8)] text-[1rem] hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded-b-lg"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className="text-white text-[0.95rem] font-medium bg-[#8a5cff] px-7 py-3 rounded-full no-underline hover:bg-[#7b4ee6] transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;