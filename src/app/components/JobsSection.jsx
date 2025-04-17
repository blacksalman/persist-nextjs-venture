// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { FaBriefcase, FaDollarSign, FaGlobe } from "react-icons/fa";
// import arrowSvg from "../../../public/images/arrow_new.svg";

// const JobsSection = () => {
//   const jobsLeftColumn1 = [
//     { id: 1, role: "Backend Developer", company: "Logitech", type: "Full-time", salary: "$120,000", location: "Worldwide" },
//     { id: 2, role: "Flutter Developer", company: "Persis Ventures", type: "Full-time", salary: "$100,000", location: "Worldwide" },
//   ];

//   const jobsRightColumn1 = [
//     { id: 3, role: "Full Stack Developer", company: "TechCorp", type: "Full-time", salary: "$130,000", location: "Worldwide" },
//   ];

//   const jobsLeftColumn2 = [
//     { id: 4, role: "Frontend Developer", company: "WebSolutions", type: "Full-time", salary: "$110,000", location: "Worldwide" },
//     { id: 5, role: "DevOps Engineer", company: "CloudNet", type: "Full-time", salary: "$125,000", location: "Worldwide" },
//   ];

//   const jobsRightColumn2 = [
//     { id: 6, role: "Data Scientist", company: "DataTech", type: "Full-time", salary: "$140,000", location: "Worldwide" },
//   ];

//   const renderJobCard = (job, index, isBelow = false) => {
//     // Positions for above container
//     const positionsAbove = [
//       { top: "79px", left: "280px" }, // First card
//       { top: "142px", left: "90px", height: "287px" }, // Second card
//       { top: "-10px", left: "245px" },  // Third card
//     ];
//     // Positions for below container, shifted left
//     const positionsBelow = [
//       { top: "80px", left: "150px" }, // First card shifted left
//       { top: "141px", left: "-21px", height: "287px" }, // Second card shifted left
//       { top: "-14px", left: "120px" },  // Third card shifted left
//     ];

//     const positions = isBelow ? positionsBelow : positionsAbove;

//     return (
//       <div
//         key={job.id}
//         className="bg-[rgba(20,20,30,0.9)] border border-white/15 rounded-2xl p-6 text-left backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out h-[350px] w-[300px] absolute"
//         style={{
//           top: positions[index]?.top || "225px",
//           height: positions[index]?.height || "350px",
//           left: positions[index]?.left || "275px",
//           zIndex: 3 - index, // Adjusted zIndex to ensure proper layering
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = `scale(1.05)`;
//           e.currentTarget.style.zIndex = 20;
//           e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = `scale(1)`;
//           e.currentTarget.style.zIndex = 3 - index;
//           e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
//         }}
//       >
//         <div className="flex flex-col h-full justify-between">
//           <div>
//             <div className="flex justify-between items-start mb-4">
//               <span className="text-white/60 text-xs">Job</span>
//               <span className="text-white/60 text-xs">{job.type}</span>
//             </div>
//             <h4 className="text-white text-2xl font-bold mb-2">{job.role}</h4>
//             <p className="text-violet-400 text-base mb-4">{job.company}</p>
//           </div>
//           <div className="flex flex-wrap gap-3 mb-6 text-white/70 text-sm">
//             <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
//               <FaDollarSign className="text-violet-400 text-base" /> {job.salary}
//             </span>
//             <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
//               <FaGlobe className="text-violet-400 text-base" /> {job.location}
//             </span>
//           </div>
//           <Link
//             href={`/jobs/${job.id}`}
//             className="inline-block bg-violet-600 hover:bg-violet-700 text-white text-base font-medium px-6 py-2 rounded-lg transition w-full text-center"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section className="py-20 px-10 text-center text-white" id="jobs">
//       <h2 className="text-4xl font-light mb-5">Get Hired or Hire Top Talent—Fast!</h2>
//       <p className="text-white/70 text-lg mb-10">
//         Accelerate your career or hire top developers with ease!
//       </p>

//       <div className="grid grid-cols-[300px_1fr] gap-12 max-w-screen-xl mx-auto mb-10 items-end relative" style={{ position: "relative", minHeight: "450px",left: "167px" }}>
//         <div className="relative w-[300px] h-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 text-left flex flex-col justify-center backdrop-blur z-[999999] shadow-[6.95px_6.95px_2.6px_rgb(150,146,146)]">
//           <h3 className="text-white text-xl font-medium mb-2">Land Your Dream Job! 🚀</h3>
//           <p className="text-white/70 text-sm mb-4">
//             Explore 10,000+ high-paying tech jobs and get hired faster with our
//             Career Accelerator.
//           </p>
//           <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-violet-600 transition w-fit">
//             Explore Now
//           </button>
//           <div className="absolute top-10 -right-32 w-44">
//             <Image src={arrowSvg} alt="arrow-svg" className="w-full h-full object-contain" />
//           </div>
//         </div>

//         <div className="relative right-[264px] w-[600px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e] left-8" style={{ position: "relative", minHeight: "450px" }}>
//           <div className="relative" style={{ position: "absolute", width: "100%", height: "100%" }}>
//             {jobsLeftColumn1.map((job, index) => renderJobCard(job, index % 3))}
//             {jobsRightColumn1.map((job, index) => renderJobCard(job, (index + jobsLeftColumn1.length) % 3))}
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-[1fr_300px] gap-12 max-w-screen-xl mx-auto items-start relative left-[259px]" id="hire" style={{ position: "relative", minHeight: "450px", left: "100px" }}>
//         <div className="relative right-[264px] w-[600px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e] left-8" style={{ position: "relative", minHeight: "450px" }}>
//           <div className="relative" style={{ position: "absolute", width: "100%", height: "100%" }}>
//             {jobsLeftColumn2.map((job, index) => renderJobCard(job, index % 3, true))}
//             {jobsRightColumn2.map((job, index) => renderJobCard(job, (index + jobsLeftColumn2.length) % 3, true))}
//           </div>
//         </div>

//         <div className="relative w-[300px] mt-8 h-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 text-left flex flex-col justify-center backdrop-blur z-[999999] shadow-[6.95px_6.95px_2.6px_rgb(150,146,146)] right-[250px] ">
//           <h3 className="text-white text-xl font-medium mb-2">
//             Hire Top
//             <br /> Developers Fast! 🚀
//           </h3>
//           <p className="text-white/70 text-sm mb-4">
//             Access job-ready tech talent and fill
//             <br /> role effortlessly.
//           </p>
//           <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-violet-600 transition w-fit">
//             Start Posting
//           </button>
//           <div className="absolute bottom-[-48px] -left-[147px] w-44 transform rotate-[178deg]">
//             <Image src={arrowSvg} alt="arrow-svg" className="w-full h-full object-contain" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobsSection;

"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaDollarSign, FaGlobe } from "react-icons/fa";
import arrowSvg from "../../../public/images/arrow_new.svg";

const JobsSection = () => {
  const jobsLeftColumn1 = [
    { id: 1, role: "Backend Developer", company: "Logitech", type: "Full-time", salary: "$120,000", location: "Worldwide" },
    { id: 2, role: "Flutter Developer", company: "Persis Ventures", type: "Full-time", salary: "$100,000", location: "Worldwide" },
  ];

  const jobsRightColumn1 = [
    { id: 3, role: "Full Stack Developer", company: "TechCorp", type: "Full-time", salary: "$130,000", location: "Worldwide" },
  ];

  const jobsLeftColumn2 = [
    { id: 4, role: "Frontend Developer", company: "WebSolutions", type: "Full-time", salary: "$110,000", location: "Worldwide" },
    { id: 5, role: "DevOps Engineer", company: "CloudNet", type: "Full-time", salary: "$125,000", location: "Worldwide" },
  ];

  const jobsRightColumn2 = [
    { id: 6, role: "Data Scientist", company: "DataTech", type: "Full-time", salary: "$140,000", location: "Worldwide" },
  ];

  const renderJobCard = (job, index, isBelow = false) => {
    const positionsAbove = [
      { top: "79px", left: "280px" },
      { top: "142px", left: "90px", height: "287px" },
      { top: "-10px", left: "245px" },
    ];

    const positionsBelow = [
      { top: "80px", left: "150px" },
      { top: "141px", left: "-21px", height: "287px" },
      { top: "-14px", left: "120px" },
    ];

    const positions = isBelow ? positionsBelow : positionsAbove;

    return (
      <div
        key={job.id}
        className="bg-[rgba(20,20,30,0.9)] border border-white/15 rounded-2xl p-6 text-left backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out h-[350px] w-[300px] absolute"
        style={{
          top: positions[index]?.top || "225px",
          height: positions[index]?.height || "350px",
          left: positions[index]?.left || "275px",
          zIndex: 3 - index,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = `scale(1.05)`;
          e.currentTarget.style.zIndex = 20;
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = `scale(1)`;
          e.currentTarget.style.zIndex = 3 - index;
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-white/60 text-xs">Job</span>
              <span className="text-white/60 text-xs">{job.type}</span>
            </div>
            <h4 className="text-white text-2xl font-bold mb-2">{job.role}</h4>
            <p className="text-violet-400 text-base mb-4">{job.company}</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6 text-white/70 text-sm">
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <FaDollarSign className="text-violet-400 text-base" /> {job.salary}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <FaGlobe className="text-violet-400 text-base" /> {job.location}
            </span>
          </div>
          <Link
            href={`/jobs/${job.id}`}
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white text-base font-medium px-6 py-2 rounded-lg transition w-full text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-10 text-center text-white hidden md:block" id="jobs">
      <h2 className="text-4xl font-light mb-5">Get Hired or Hire Top Talent—Fast!</h2>
      <p className="text-white/70 text-lg mb-10">
        Accelerate your career or hire top developers with ease!
      </p>

      <div className="grid grid-cols-[300px_1fr] gap-12 max-w-screen-xl mx-auto mb-10 items-end relative" style={{ position: "relative", minHeight: "450px", left: "167px" }}>
        <div className="relative w-[300px] h-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 text-left flex flex-col justify-center backdrop-blur z-[999999] shadow-[6.95px_6.95px_2.6px_rgb(150,146,146)]">
          <h3 className="text-white text-xl font-medium mb-2">Land Your Dream Job! 🚀</h3>
          <p className="text-white/70 text-sm mb-4">
            Explore 10,000+ high-paying tech jobs and get hired faster with our
            Career Accelerator.
          </p>
          <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-violet-600 transition w-fit">
            Explore Now
          </button>
          <div className="absolute top-10 -right-32 w-44">
            <Image src={arrowSvg} alt="arrow-svg" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="relative right-[264px] w-[600px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e] left-8" style={{ position: "relative", minHeight: "450px" }}>
          <div className="relative" style={{ position: "absolute", width: "100%", height: "100%" }}>
            {jobsLeftColumn1.map((job, index) => renderJobCard(job, index % 3))}
            {jobsRightColumn1.map((job, index) => renderJobCard(job, (index + jobsLeftColumn1.length) % 3))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-12 max-w-screen-xl mx-auto items-start relative left-[259px]" id="hire" style={{ position: "relative", minHeight: "450px", left: "100px" }}>
        <div className="relative right-[264px] w-[600px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e] left-8" style={{ position: "relative", minHeight: "450px" }}>
          <div className="relative" style={{ position: "absolute", width: "100%", height: "100%" }}>
            {jobsLeftColumn2.map((job, index) => renderJobCard(job, index % 3, true))}
            {jobsRightColumn2.map((job, index) => renderJobCard(job, (index + jobsLeftColumn2.length) % 3, true))}
          </div>
        </div>

        <div className="relative w-[300px] mt-8 h-[300px] bg-white/5 border border-white/10 rounded-2xl p-5 text-left flex flex-col justify-center backdrop-blur z-[999999] shadow-[6.95px_6.95px_2.6px_rgb(150,146,146)] right-[250px] ">
          <h3 className="text-white text-xl font-medium mb-2">
            Hire Top
            <br /> Developers Fast! 🚀
          </h3>
          <p className="text-white/70 text-sm mb-4">
            Access job-ready tech talent and fill
            <br /> role effortlessly.
          </p>
          <button className="px-4 py-2 border border-white text-white rounded-md hover:bg-violet-600 transition w-fit">
            Start Posting
          </button>
          <div className="absolute bottom-[-48px] -left-[147px] w-44 transform rotate-[178deg]">
            <Image src={arrowSvg} alt="arrow-svg" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;