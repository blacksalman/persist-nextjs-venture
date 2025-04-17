"use client";
// components/Footer.jsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  // Function to handle navigation or scrolling
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home' && router.pathname !== '/') {
      // Navigate to home page if not already on it
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else if (sectionId === 'home' && router.pathname === '/') {
      // Scroll to top if already on home page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to other sections
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer bg-[#1a1a1a] px-5 py-15 text-white font-sans">
      <div className="footer-container max-w-[1500px] mx-auto flex flex-wrap justify-between gap-10">
        <div className="footer-left flex-1 min-w-[300px]">
          <div className="footer-logo flex items-center gap-2.5 mb-5">
            <span className="logo-icon text-[24px] text-[#8a5cff]">∞</span>
            <span className="logo-text text-[1.5rem] font-semibold">CAREER ACCELERATOR</span>
          </div>
          <h3 className="text-[1.5rem] font-medium mb-3.75">Where Developers Get Coding Jobs</h3>
          <p className="text-[1rem] text-[rgba(255,255,255,0.7)] leading-[1.6] max-w-[400px]">
            Find your dream coding job with ease! Our platform connects developers to top companies, offering tailored job matches for fast, hassle-free hiring. Whether you’re just starting or an experienced pro, we help you land the perfect role and advance your career.
          </p>
          <div className="footer-social flex gap-3.75 mt-5">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="30" height="50" viewBox="0 0 24 24" fill="currentColor" className="-mt-2">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-links flex gap-15 flex-1 justify-end">
          <div className="footer-column flex flex-col gap-2.5">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
            <a href="#about">About Us</a>
            <Link href="/our-team">Our Team</Link>
            <Link href="/blog">Blogs</Link>
            <a href="#faq">FAQs</a>
          </div>
          <div className="footer-column flex flex-col gap-2.5">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
          <div className="footer-column flex flex-col gap-2.5">
            <Link href="/search-jobs">Explore Jobs</Link>
            <Link href="/start-hiring">Start Hiring Developers</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom max-w-[1500px] mx-auto mt-10 pt-5 border-t border-[rgba(255,255,255,0.1)]">
        <div className="footer-bottom-left flex justify-between">
          <p className="text-[0.9rem] text-[rgba(255,255,255,0.5)]">© 2025 Career Accelerator. All rights reserved.</p>
          <div className="footer-social flex gap-3.75">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="30" height="50" viewBox="0 0 24 24" fill="currentColor" className="-mt-2">
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255,255,255,0.7)] transition-colors duration-300 hover:text-[#8a5cff]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;