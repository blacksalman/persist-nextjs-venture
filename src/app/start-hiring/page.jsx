// app/start-hiring/page.jsx
'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../footer/page';

const StartHiring = () => {
  const [jobForm, setJobForm] = useState({
    title: '',
    company: '',
    location: '',
    type: 'full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posting:', jobForm);
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar isScrolled={false} />
      <div className="pt-[100px] px-10 pb-10 min-h-screen bg-gradient-to-r from-[rgba(135,206,235,0.1)] to-[#0f0f19] max-[768px]:p-[80px_20px_20px]">
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] text-white mb-[10px] max-[768px]:text-[2rem]">Post a Job</h1>
          <p className="text-[rgba(255,255,255,0.7)] text-[1.2rem]">
            Find the perfect candidate for your position
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="mb-[60px]">
            <h2 className="text-white text-center mb-10 text-[2rem]">
              Why Post a Job With Us?
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[30px] mb-10">
              <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
                <div className="text-[2.5rem] mb-4">👥</div>
                <h3 className="text-white mb-3 text-[1.2rem]">Access Top Talent</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-[1.6]">
                  Reach thousands of qualified candidates actively looking for opportunities.
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
                <div className="text-[2.5rem] mb-4">⚡</div>
                <h3 className="text-white mb-3 text-[1.2rem]">Quick Hiring</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-[1.6]">
                  Our smart matching system helps you find the right candidates faster.
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
                <div className="text-[2.5rem] mb-4">📊</div>
                <h3 className="text-white mb-3 text-[1.2rem]">Detailed Analytics</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-[1.6]">
                  Track your job posting performance and candidate engagement.
                </p>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
                <div className="text-[2.5rem] mb-4">💼</div>
                <h3 className="text-white mb-3 text-[1.2rem]">Employer Branding</h3>
                <p className="text-[rgba(255,255,255,0.7)] leading-[1.6]">
                  Showcase your company culture and attract the best talent.
                </p>
              </div>
            </div>
          </div>

          <form
            className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-xl p-10 mb-10 max-[768px]:p-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label htmlFor="title" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                Job Title*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={jobForm.title}
                onChange={handleChange}
                placeholder="e.g., Senior Frontend Developer"
                required
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="company" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                Company Name*
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={jobForm.company}
                onChange={handleChange}
                placeholder="Your company name"
                required
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
              <div className="mb-6">
                <label htmlFor="location" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobForm.location}
                  onChange={handleChange}
                  placeholder="e.g., New York, NY or Remote"
                  required
                  className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="type" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                  Job Type*
                </label>
                <select
                  id="type"
                  name="type"
                  value={jobForm.type}
                  onChange={handleChange}
                  required
                  className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
                >
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6 max-[768px]:grid-cols-1 max-[768px]:gap-4">
              <div className="mb-6">
                <label htmlFor="experience" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                  Experience Required*
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={jobForm.experience}
                  onChange={handleChange}
                  placeholder="e.g., 3+ years"
                  required
                  className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="salary" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                  Salary Range*
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={jobForm.salary}
                  onChange={handleChange}
                  placeholder="e.g., $80k - $100k"
                  required
                  className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                Job Description*
              </label>
              <textarea
                id="description"
                name="description"
                value={jobForm.description}
                onChange={handleChange}
                placeholder="Describe the role, responsibilities, and ideal candidate..."
                required
                rows="6"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none resize-y min-h-[100px]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="requirements" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                Requirements*
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={jobForm.requirements}
                onChange={handleChange}
                placeholder="List the required skills, qualifications, and experience..."
                required
                rows="4"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none resize-y min-h-[100px]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="benefits" className="text-[rgba(255,255,255,0.9)] mb-2 text-base block">
                Benefits
              </label>
              <textarea
                id="benefits"
                name="benefits"
                value={jobForm.benefits}
                onChange={handleChange}
                placeholder="List the benefits and perks offered..."
                rows="4"
                className="p-3 bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-base transition-all duration-300 w-full focus:border-[#8a5cff] focus:bg-[rgba(255,255,255,0.15)] focus:outline-none resize-y min-h-[100px]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#8a5cff] text-white p-[15px_30px] rounded-lg text-[1.1rem] transition-all duration-300 w-full mt-5 hover:bg-[#7040ff] hover:-translate-y-[2px]"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartHiring;