// // app/dashboard/page.jsx
// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Navbar from '../components/Navbar';
// import Footer from '../footer/page';
// import { useAuth } from '../context/AuthContext';
// import ProfileImage from '../../../public/images/profile_img.avif';
// import { useRouter } from 'next/navigation';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('overview');
//   const { isLoggedIn, userType, user } = useAuth();

//   console.log('username ', user)
//    const router = useRouter();

//   // Get user's name, fallback to 'User' if not available
//   const userName = user?.name || user?.username || 'User';

//   // Redirect to homepage if not logged in
//   useEffect(() => {
//     if (!isLoggedIn) {
//       router.push('/');
//     }
//   }, [isLoggedIn, router]);

//   // Render nothing or a loading state if not authorized (to avoid content flash)
//   if (!isLoggedIn) {
//     return null; // or return a loading spinner if desired
//   }

//   const renderJobSeekerContent = () => (
//     <div className="flex-1 ml-80 p-8 min-h-[calc(100vh-160px)]">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Applications</h3>
//           <p className="text-white text-2xl font-bold mb-2">12</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Total job applications</p>
//         </div>
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Interviews</h3>
//           <p className="text-white text-2xl font-bold mb-2">3</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Upcoming interviews</p>
//         </div>
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Saved Jobs</h3>
//           <p className="text-white text-2xl font-bold mb-2">8</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Jobs saved for later</p>
//         </div>
//       </div>

//       <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//         <h2 className="text-white text-xl mb-4">Recent Activity</h2>
//         <div className="flex flex-col gap-4 mt-4">
//           <div className="flex justify-between items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
//             <div className="flex items-center">
//               <span className="text-2xl mr-4">📝</span>
//               <div>
//                 <h4 className="text-white mb-1">Applied to Senior Frontend Developer</h4>
//                 <p className="text-[rgba(255,255,255,0.7)] text-sm">Google • 2 days ago</p>
//               </div>
//             </div>
//             <div className="px-3 py-1.5 rounded-full bg-[#fff3cd] text-[#856404] text-xs">Pending</div>
//           </div>
//           <div className="flex justify-between items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
//             <div className="flex items-center">
//               <span className="text-2xl mr-4">👍</span>
//               <div>
//                 <h4 className="text-white mb-1">Interview Scheduled - Backend Engineer</h4>
//                 <p className="text-[rgba(255,255,255,0.7)] text-sm">Microsoft • 1 week ago</p>
//               </div>
//             </div>
//             <div className="px-3 py-1.5 rounded-full bg-[#d4edda] text-[#155724] text-xs">Scheduled</div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//         <h2 className="text-white text-xl mb-4">Recommended Jobs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//           <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-6 rounded-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
//             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent,rgba(138,92,255,0.1),transparent)] transform -translate-x-full transition-transform duration-600 ease-in-out hover:translate-x-full"></div>
//             <h3 className="text-white mb-2 relative z-10">Full Stack Developer</h3>
//             <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">Amazon</p>
//             <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">📍 New York, NY</p>
//             <p className="text-[rgba(255,255,255,0.7)] mb-4 relative z-10">💰 $120k - $150k</p>
//             <button className="bg-[#8a5cff] text-white px-4 py-2 rounded-lg relative z-10 transition-colors duration-300 hover:bg-[#7040ff]">Quick Apply</button>
//           </div>
//           <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-6 rounded-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
//             <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent,rgba(138,92,255,0.1),transparent)] transform -translate-x-full transition-transform duration-600 ease-in-out hover:translate-x-full"></div>
//             <h3 className="text-white mb-2 relative z-10">React Native Developer</h3>
//             <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">Meta</p>
//             <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">📍 Remote</p>
//             <p className="text-[rgba(255,255,255,0.7)] mb-4 relative z-10">💰 $100k - $130k</p>
//             <button className="bg-[#8a5cff] text-white px-4 py-2 rounded-lg relative z-10 transition-colors duration-300 hover:bg-[#7040ff]">Quick Apply</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderEmployerContent = () => (
//     <div className="flex-1 ml-80 p-8 min-h-[calc(100vh-160px)]">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Active Jobs</h3>
//           <p className="text-white text-2xl font-bold mb-2">5</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Currently active listings</p>
//         </div>
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Applications</h3>
//           <p className="text-white text-2xl font-bold mb-2">45</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Total applications received</p>
//         </div>
//         <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//           <h3 className="text-white text-base mb-2">Interviews</h3>
//           <p className="text-white text-2xl font-bold mb-2">8</p>
//           <p className="text-[rgba(255,255,255,0.7)] text-sm">Scheduled interviews</p>
//         </div>
//       </div>

//       <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//         <h2 className="text-white text-xl mb-4">Your Job Postings</h2>
//         <div className="flex flex-col gap-4 mt-4">
//           <div className="flex justify-between items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
//             <div>
//               <h3 className="text-white mb-1">Senior Frontend Developer</h3>
//               <p className="text-[rgba(255,255,255,0.7)] text-sm">Posted 5 days ago • 15 applications</p>
//             </div>
//             <div className="flex gap-3">
//               <button className="bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]">Edit</button>
//               <button className="bg-[#8a5cff] text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#7040ff]">View Applications</button>
//             </div>
//           </div>
//           <div className="flex justify-between items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
//             <div>
//               <h3 className="text-white mb-1">Backend Engineer</h3>
//               <p className="text-[rgba(255,255,255,0.7)] text-sm">Posted 1 week ago • 30 applications</p>
//             </div>
//             <div className="flex gap-3">
//               <button className="bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] px-4 py-2 rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]">Edit</button>
//               <button className="bg-[#8a5cff] text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-[#7040ff]">View Applications</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
//         <h2 className="text-white text-xl mb-4">Analytics Overview</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
//             <h4 className="text-white mb-3">Application Trends</h4>
//             <p className="text-[#28a745] font-bold">↑ 23% this week</p>
//           </div>
//           <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
//             <h4 className="text-white mb-3">Profile Views</h4>
//             <p className="text-[#28a745] font-bold">↑ 15% this week</p>
//           </div>
//           <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
//             <h4 className="text-white mb-3">Average Response Time</h4>
//             <p>2.5 days</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <Navbar isScrolled={false} />
//       <div className="flex min-h-[calc(100vh-160px)] pt-24 pb-15 bg-gradient-to-r from-[rgba(135,206,235,0.1)] to-[#0f0f19] relative">
//         <div className="w-[280px] bg-[rgba(54,57,71,0.8)] backdrop-blur-md p-6 border-r border-[rgba(255,255,255,0.1)] fixed overflow-y-auto mt-9 h-[calc(100vh-160px)]">
//           <div className="text-center mb-8 pb-6 border-b border-[rgba(255,255,255,0.1)]">
//             <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
//               <Image src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
//             </div>
//             <h2 className="text-xl text-white mb-2">Welcome back, {userName}!</h2>
//             <p className="text-[rgba(255,255,255,0.7)] text-sm">{userType === 'jobseeker' ? 'Job Seeker' : 'Employer'}</p>
//           </div>
//           <nav className="flex flex-col gap-2">
//             <button
//               className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'overview' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//               onClick={() => setActiveTab('overview')}
//             >
//               Overview
//             </button>
//             <button
//               className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'profile' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//               onClick={() => setActiveTab('profile')}
//             >
//               Profile
//             </button>
//             {userType === 'jobseeker' ? (
//               <>
//                 <button
//                   className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'applications' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//                   onClick={() => setActiveTab('applications')}
//                 >
//                   Applications
//                 </button>
//                 <button
//                   className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'saved' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//                   onClick={() => setActiveTab('saved')}
//                 >
//                   Saved Jobs
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button
//                   className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'postings' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//                   onClick={() => setActiveTab('postings')}
//                 >
//                   Job Postings
//                 </button>
//                 <button
//                   className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'candidates' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//                   onClick={() => setActiveTab('candidates')}
//                 >
//                   Candidates
//                 </button>
//               </>
//             )}
//             <button
//               className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${activeTab === 'settings' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'}`}
//               onClick={() => setActiveTab('settings')}
//             >
//               Settings
//             </button>
//           </nav>
//         </div>
//         {userType === 'jobseeker' ? renderJobSeekerContent() : renderEmployerContent()}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;





'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../footer/page';
import { useAuth } from '../context/AuthContext';
import ProfileImage from '../../../public/images/profile_img.avif';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoggedIn, userType, user } = useAuth();
  const router = useRouter();

  const userName = user?.name || user?.username || 'User';

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isLoggedIn) {
    return null;
  }

  const renderJobSeekerContent = () => (
    <div className="flex-1 md:ml-80 p-4 md:p-8 min-h-[calc(100vh-160px)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Applications</h3>
          <p className="text-white text-2xl font-bold mb-2">12</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Total job applications</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Interviews</h3>
          <p className="text-white text-2xl font-bold mb-2">3</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Upcoming interviews</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Saved Jobs</h3>
          <p className="text-white text-2xl font-bold mb-2">8</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Jobs saved for later</p>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
        <h2 className="text-white text-lg md:text-xl mb-4">Recent Activity</h2>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="text-2xl mr-4">📝</span>
              <div>
                <h4 className="text-white mb-1">Applied to Senior Frontend Developer</h4>
                <p className="text-[rgba(255,255,255,0.7)] text-sm">Google • 2 days ago</p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#fff3cd] text-[#856404] text-xs">Pending</div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
            <div className="flex items-center mb-2 md:mb-0">
              <span className="text-2xl mr-4">👍</span>
              <div>
                <h4 className="text-white mb-1">Interview Scheduled - Backend Engineer</h4>
                <p className="text-[rgba(255,255,255,0.7)] text-sm">Microsoft • 1 week ago</p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-full bg-[#d4edda] text-[#155724] text-xs">Scheduled</div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
        <h2 className="text-white text-lg md:text-xl mb-4">Recommended Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent,rgba(138,92,255,0.1),transparent)] transform -translate-x-full transition-transform duration-600 ease-in-out hover:translate-x-full"></div>
            <h3 className="text-white mb-2 relative z-10">Full Stack Developer</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">Amazon</p>
            <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">📍 New York, NY</p>
            <p className="text-[rgba(255,255,255,0.7)] mb-4 relative z-10">💰 $120k - $150k</p>
            <button className="bg-[#8a5cff] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg relative z-10 transition-colors duration-300 hover:bg-[#7040ff]">Quick Apply</button>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:bg-[rgba(255,255,255,0.1)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent,rgba(138,92,255,0.1),transparent)] transform -translate-x-full transition-transform duration-600 ease-in-out hover:translate-x-full"></div>
            <h3 className="text-white mb-2 relative z-10">React Native Developer</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">Meta</p>
            <p className="text-[rgba(255,255,255,0.7)] mb-1 relative z-10">📍 Remote</p>
            <p className="text-[rgba(255,255,255,0.7)] mb-4 relative z-10">💰 $100k - $130k</p>
            <button className="bg-[#8a5cff] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg relative z-10 transition-colors duration-300 hover:bg-[#7040ff]">Quick Apply</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmployerContent = () => (
    <div className="flex-1 md:ml-80 p-4 md:p-8 min-h-[calc(100vh-160px)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Active Jobs</h3>
          <p className="text-white text-2xl font-bold mb-2">5</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Currently active listings</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Applications</h3>
          <p className="text-white text-2xl font-bold mb-2">45</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Total applications received</p>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
          <h3 className="text-white text-base mb-2">Interviews</h3>
          <p className="text-white text-2xl font-bold mb-2">8</p>
          <p className="text-[rgba(255,255,255,0.7)] text-sm">Scheduled interviews</p>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
        <h2 className="text-white text-lg md:text-xl mb-4">Your Job Postings</h2>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
            <div className="mb-2 md:mb-0">
              <h3 className="text-white mb-1">Senior Frontend Developer</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm">Posted 5 days ago • 15 applications</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]">Edit</button>
              <button className="bg-[#8a5cff] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors duration-300 hover:bg-[#7040ff]">View Applications</button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:translate-x-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_4px_8px_rgba(138,92,255,0.1)]">
            <div className="mb-2 md:mb-0">
              <h3 className="text-white mb-1">Backend Engineer</h3>
              <p className="text-[rgba(255,255,255,0.7)] text-sm">Posted 1 week ago • 30 applications</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.7)] px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-all duration-300 hover:bg-[rgba(255,255,255,0.2)]">Edit</button>
              <button className="bg-[#8a5cff] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors duration-300 hover:bg-[#7040ff]">View Applications</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-4 md:p-6 rounded-xl mb-8 shadow-[0_2px_4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)] hover:border-[rgba(138,92,255,0.3)] hover:bg-[rgba(255,255,255,0.15)]">
        <h2 className="text-white text-lg md:text-xl mb-4">Analytics Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-4 md:p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
            <h4 className="text-white mb-3">Application Trends</h4>
            <p className="text-[#28a745] font-bold">↑ 23% this week</p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-4 md:p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
            <h4 className="text-white mb-3">Profile Views</h4>
            <p className="text-[#28a745] font-bold">↑ 15% this week</p>
          </div>
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-4 md:p-5 rounded-lg text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(138,92,255,0.3)] hover:shadow-[0_8px_16px_rgba(138,92,255,0.2)]">
            <h4 className="text-white mb-3">Average Response Time</h4>
            <p>2.5 days</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar isScrolled={false} />
      <div className="relative min-h-[calc(100vh-160px)] pt-24 pb-15 bg-gradient-to-r from-[rgba(135,206,235,0.1)] to-[#0f0f19]">
        {/* Sidebar */}
        <div
          className={`w-64 md:w-[280px] bg-[rgba(54,57,71,0.8)] backdrop-blur-md p-4 md:p-6 border-r border-[rgba(255,255,255,0.1)] fixed top-24 h-[calc(100vh-160px)] overflow-y-auto transition-transform duration-300 md:transition-none ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } z-50`}
        >
          <div className="text-center mb-8 pb-6 border-b border-[rgba(255,255,255,0.1)]">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
              <Image src={ProfileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl text-white mb-2">Welcome back, {userName}!</h2>
            <p className="text-[rgba(255,255,255,0.7)] text-sm">{userType === 'jobseeker' ? 'Job Seeker' : 'Employer'}</p>
          </div>
          <nav className="flex flex-col gap-2">
            <button
              className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                activeTab === 'overview' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }`}
              onClick={() => {
                setActiveTab('overview');
                setIsSidebarOpen(false);
              }}
            >
              Overview
            </button>
            <button
              className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                activeTab === 'profile' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }`}
              onClick={() => {
                setActiveTab('profile');
                setIsSidebarOpen(false);
              }}
            >
              Profile
            </button>
            {userType === 'jobseeker' ? (
              <>
                <button
                  className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                    activeTab === 'applications' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveTab('applications');
                    setIsSidebarOpen(false);
                  }}
                >
                  Applications
                </button>
                <button
                  className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                    activeTab === 'saved' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveTab('saved');
                    setIsSidebarOpen(false);
                  }}
                >
                  Saved Jobs
                </button>
              </>
            ) : (
              <>
                <button
                  className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                    activeTab === 'postings' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveTab('postings');
                    setIsSidebarOpen(false);
                  }}
                >
                  Job Postings
                </button>
                <button
                  className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                    activeTab === 'candidates' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
                  }`}
                  onClick={() => {
                    setActiveTab('candidates');
                    setIsSidebarOpen(false);
                  }}
                >
                  Candidates
                </button>
              </>
            )}
            <button
              className={`px-4 py-3 rounded-lg text-left text-base cursor-pointer transition-all duration-300 ${
                activeTab === 'settings' ? 'bg-[#8a5cff] text-white' : 'text-[rgba(255,255,255,0.7)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white'
              }`}
              onClick={() => {
                setActiveTab('settings');
                setIsSidebarOpen(false);
              }}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="relative md:hidden">
          <button
            className="absolute top-4 left-4 z-50 text-white text-2xl bg-[rgba(54,57,71,0.8)] p-2 rounded-lg"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}

        {userType === 'jobseeker' ? renderJobSeekerContent() : renderEmployerContent()}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;