// // app/search-jobs/page.jsx
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '../components/Navbar';
// import Footer from '../footer/page';

// const SearchJobs = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filters, setFilters] = useState({
//     jobType: 'all',
//     experience: 'all',
//     location: 'all',
//   });
//   const router = useRouter();

//   const jobs = [
//     {
//       id: 1,
//       title: 'Backend Developer',
//       company: 'Logitech',
//       type: 'Full-time',
//       salary: '$120,000',
//       location: 'Worldwide',
//       experience: '3+ years',
//       description: 'We are looking for an experienced Backend Developer proficient in Node...',
//       requirements: ['Node', 'React', 'TypeScript', 'Redux', 'CSS3'],
//       posted: '3 days ago',
//     },
//     {
//       id: 2,
//       title: 'Flutter Developer',
//       company: 'Persis Ventures',
//       type: 'Full-time',
//       salary: '$100,000',
//       location: 'Worldwide',
//       experience: '2+ years',
//       description: 'We are looking for an experienced Flutter Developer proficient in Flutter...',
//       requirements: ['Flutter', 'TypeScript', 'Redux', 'CSS3'],
//       posted: '1 days ago',
//     },
//     {
//       id: 7,
//       title: 'Senior Frontend Developer',
//       company: 'Google',
//       location: 'New York, NY',
//       salary: '$120k - $150k',
//       type: 'Full-time',
//       experience: '5+ years',
//       description: 'We are looking for an experienced Frontend Developer proficient in React...',
//       requirements: ['React', 'TypeScript', 'Redux', 'CSS3'],
//       posted: '2 days ago',
//     },
//     {
//       id: 8,
//       title: 'Backend Engineer',
//       company: 'Microsoft',
//       location: 'Remote',
//       salary: '$130k - $160k',
//       type: 'Full-time',
//       experience: '3+ years',
//       description: 'Join our backend team to build scalable services...',
//       requirements: ['Node.js', 'Python', 'AWS', 'MongoDB'],
//       posted: '1 week ago',
//     },
//   ];

//   const handleApplyNow = (jobId) => {
//     router.push(`/jobs/${jobId}`);
//   };

//   return (
//     <div className="min-h-screen text-white">
//       <Navbar isScrolled={false} />
//       <div className="pt-[100px] px-10 pb-10">
//         <div className="text-center mb-10">
//           <h1 className="text-[2.5rem] text-white mb-5">Find Your Dream Job</h1>
//           <div className="max-w-[800px] mx-auto flex gap-[10px] max-[768px]:flex-col">
//             <input
//               type="text"
//               placeholder="Search for jobs, skills, or companies"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="p-[15px_20px] rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] text-white text-base flex-1 focus:border-[#8a5cff] focus:outline-none"
//             />
//             <button className="p-[15px_30px] bg-[#8a5cff] rounded-lg text-white text-base transition-all duration-300 hover:bg-[#7040ff]">
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-[280px_1fr] gap-[30px] max-w-[1400px] mx-auto max-[1024px]:grid-cols-1">
//           <div className="bg-[rgba(54,57,71,0.8)] backdrop-blur-md p-4 rounded-xl border border-[rgba(255,255,255,0.1)] max-[1024px]:sticky max-[1024px]:top-[100px] h-365">
//             <h3 className="text-white mb-4">Filters</h3>
//             <div className="mb-4">
//               <label className="block text-[rgba(255,255,255,0.7)] mb-2">Job Type</label>
//               <select
//                 value={filters.jobType}
//                 onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
//                 className="w-full p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.95rem]"
//               >
//                 <option value="all">All Types</option>
//                 <option value="full-time">Full Time</option>
//                 <option value="part-time">Part Time</option>
//                 <option value="contract">Contract</option>
//                 <option value="freelance">Freelance</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block text-[rgba(255,255,255,0.7)] mb-2">Experience Level</label>
//               <select
//                 value={filters.experience}
//                 onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
//                 className="w-full p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.95rem]"
//               >
//                 <option value="all">All Levels</option>
//                 <option value="entry">Entry Level</option>
//                 <option value="mid">Mid Level</option>
//                 <option value="senior">Senior Level</option>
//                 <option value="lead">Lead/Manager</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-[rgba(255,255,255,0.7)] mb-2">Location</label>
//               <select
//                 value={filters.location}
//                 onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//                 className="w-full p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.95rem]"
//               >
//                 <option value="all">All Locations</option>
//                 <option value="remote">Remote</option>
//                 <option value="onsite">On-site</option>
//                 <option value="hybrid">Hybrid</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex flex-col gap-5">
//             {jobs.map((job) => (
//               <div
//                 key={job.id}
//                 className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] w-full"
//               >
//                 <div className="mb-4">
//                   <h2 className="text-white text-[1.5rem] mb-2">{job.title}</h2>
//                   <span className="text-[rgba(255,255,255,0.7)] text-[1.1rem]">{job.company}</span>
//                 </div>
//                 <div className="flex gap-5 mb-4 flex-wrap">
//                   <span className="text-[rgba(255,255,255,0.7)] text-[0.9rem]">📍 {job.location}</span>
//                   <span className="text-[rgba(255,255,255,0.7)] text-[0.9rem]">💰 {job.salary}</span>
//                   <span className="text-[rgba(255,255,255,0.7)] text-[0.9rem]">💼 {job.type}</span>
//                   <span className="text-[rgba(255,255,255,0.7)] text-[0.9rem]">⭐ {job.experience}</span>
//                 </div>
//                 <p className="text-[rgba(255,255,255,0.9)] mb-4 leading-[1.6]">{job.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {job.requirements.map((req, index) => (
//                     <span
//                       key={index}
//                       className="bg-[rgba(138,92,255,0.2)] text-white px-3 py-[6px] rounded-[20px] text-[0.9rem]"
//                     >
//                       {req}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-[rgba(255,255,255,0.5)] text-[0.9rem]">{job.posted}</span>
//                   <button
//                     onClick={() => handleApplyNow(job.id)}
//                     className="bg-[#8a5cff] text-white border-none px-5 py-[10px] rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#7040ff]"
//                   >
//                     Apply Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default SearchJobs;



'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../footer/page';

const SearchJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobType: 'all',
    experience: 'all',
    location: 'all',
  });
  const router = useRouter();

  const jobs = [
    {
      id: 1,
      title: 'Backend Developer',
      company: 'Logitech',
      type: 'Full-time',
      salary: '$120,000',
      location: 'Worldwide',
      experience: '3+ years',
      description: 'We are looking for an experienced Backend Developer proficient in Node...',
      requirements: ['Node', 'React', 'TypeScript', 'Redux', 'CSS3'],
      posted: '3 days ago',
    },
    {
      id: 2,
      title: 'Flutter Developer',
      company: 'Persis Ventures',
      type: 'Full-time',
      salary: '$100,000',
      location: 'Worldwide',
      experience: '2+ years',
      description: 'We are looking for an experienced Flutter Developer proficient in Flutter...',
      requirements: ['Flutter', 'TypeScript', 'Redux', 'CSS3'],
      posted: '1 days ago',
    },
    {
      id: 7,
      title: 'Senior Frontend Developer',
      company: 'Google',
      location: 'New York, NY',
      salary: '$120k - $150k',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for an experienced Frontend Developer proficient in React...',
      requirements: ['React', 'TypeScript', 'Redux', 'CSS3'],
      posted: '2 days ago',
    },
    {
      id: 8,
      title: 'Backend Engineer',
      company: 'Microsoft',
      location: 'Remote',
      salary: '$130k - $160k',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our backend team to build scalable services...',
      requirements: ['Node.js', 'Python', 'AWS', 'MongoDB'],
      posted: '1 week ago',
    },
  ];

  const handleApplyNow = (jobId) => {
    router.push(`/jobs/${jobId}`);
  };

  return (
    <div className="min-h-screen text-white">
      <Navbar isScrolled={false} />
      <div className="pt-[100px] px-4 md:px-10 pb-10 bg-gradient-to-r from-[rgba(135,206,235,0.1)] to-[#0f0f19]">
        <div className="text-center mb-10">
          <h1 className="text-[2rem] md:text-[2.5rem] text-white mb-5">Find Your Dream Job</h1>
          <div className="max-w-[800px] mx-auto flex flex-col md:flex-row gap-4 md:gap-[10px]">
            <input
              type="text"
              placeholder="Search for jobs, skills, or companies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-4 md:p-[15px_20px] rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.1)] text-white text-base flex-1 focus:border-[#8a5cff] focus:outline-none"
            />
            <button className="p-4 md:p-[15px_30px] bg-[#8a5cff] rounded-lg text-white text-base transition-all duration-300 hover:bg-[#7040ff]">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-[30px] max-w-[1400px] mx-auto">
          <div className="bg-[rgba(54,57,71,0.8)] backdrop-blur-md p-4 md:p-6 rounded-xl border border-[rgba(255,255,255,0.1)] top-[100px]">
            <h3 className="text-white mb-4">Filters</h3>
            <div className="mb-4">
              <label className="block text-[rgba(255,255,255,0.7)] mb-2">Job Type</label>
              <select
                value={filters.jobType}
                onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
                className="w-full p-2 md:p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.9rem] md:text-[0.95rem]"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="contract">Contract</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-[rgba(255,255,255,0.7)] mb-2">Experience Level</label>
              <select
                value={filters.experience}
                onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                className="w-full p-2 md:p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.9rem] md:text-[0.95rem]"
              >
                <option value="all">All Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="lead">Lead/Manager</option>
              </select>
            </div>
            <div>
              <label className="block text-[rgba(255,255,255,0.7)] mb-2">Location</label>
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full p-2 md:p-[8px] bg-[#363947] border border-[rgba(255,255,255,0.1)] rounded-[6px] text-white cursor-pointer text-[0.9rem] md:text-[0.95rem]"
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] w-full"
              >
                <div className="mb-4">
                  <h2 className="text-white text-[1.2rem] md:text-[1.5rem] mb-2">{job.title}</h2>
                  <span className="text-[rgba(255,255,255,0.7)] text-[1rem] md:text-[1.1rem]">
                    {job.company}
                  </span>
                </div>
                <div className="flex gap-4 md:gap-5 mb-4 flex-wrap">
                  <span className="text-[rgba(255,255,255,0.7)] text-[0.8rem] md:text-[0.9rem]">
                    📍 {job.location}
                  </span>
                  <span className="text-[rgba(255,255,255,0.7)] text-[0.8rem] md:text-[0.9rem]">
                    💰 {job.salary}
                  </span>
                  <span className="text-[rgba(255,255,255,0.7)] text-[0.8rem] md:text-[0.9rem]">
                    💼 {job.type}
                  </span>
                  <span className="text-[rgba(255,255,255,0.7)] text-[0.8rem] md:text-[0.9rem]">
                    ⭐ {job.experience}
                  </span>
                </div>
                <p className="text-[rgba(255,255,255,0.9)] mb-4 leading-[1.6] text-[0.9rem] md:text-[1rem]">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="bg-[rgba(138,92,255,0.2)] text-white px-3 py-[4px] md:py-[6px] rounded-[20px] text-[0.8rem] md:text-[0.9rem]"
                    >
                      {req}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[rgba(255,255,255,0.5)] text-[0.8rem] md:text-[0.9rem]">
                    {job.posted}
                  </span>
                  <button
                    onClick={() => handleApplyNow(job.id)}
                    className="bg-[#8a5cff] text-white border-none px-4 md:px-5 py-[8px] md:py-[10px] rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#7040ff]"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchJobs;