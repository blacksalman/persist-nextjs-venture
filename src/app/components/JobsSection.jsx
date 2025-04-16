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

  const renderJobCard = (job) => (
    <div
      key={job.id}
      className="bg-[rgba(15,15,15,0.63)] border border-white/10 rounded-2xl p-5 text-left backdrop-blur transition-all hover:bg-white/10 hover:-translate-y-1"
    >
      <div className="mb-4">
        <h4 className="text-white text-lg font-medium mb-1">{job.role}</h4>
        <p className="text-violet-400 text-sm">{job.company}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 text-white/70 text-sm">
        <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded">
          <FaBriefcase className="text-violet-400 text-sm" /> {job.type}
        </span>
        <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded">
          <FaDollarSign className="text-violet-400 text-sm" /> {job.salary}
        </span>
        <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded">
          <FaGlobe className="text-violet-400 text-sm" /> {job.location}
        </span>
      </div>
      <Link
        href={`/jobs/${job.id}`}
        className="inline-block bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium px-4 py-2 rounded-md transition"
      >
        View Details
      </Link>
    </div>
  );

  return (
    <section className="py-20 px-10 text-center text-white" id="jobs">
      <h2 className="text-4xl font-light mb-5">Get Hired or Hire Top Talent—Fast!</h2>
      <p className="text-white/70 text-lg mb-10">
        Accelerate your career or hire top developers with ease!
      </p>

      <div className="grid grid-cols-[300px_1fr] gap-12 max-w-screen-xl mx-auto mb-10 items-end">
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

        <div className="relative right-[264px] w-[913px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e] left-8">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {jobsLeftColumn1.map(renderJobCard)}
            </div>
            <div className="flex flex-col gap-5">
              {jobsRightColumn1.map(renderJobCard)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_300px] gap-12 max-w-screen-xl mx-auto items-start relative left-[259px]" id="hire">
        <div className="relative right-[264px] w-[913px] bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur shadow-inner shadow-[inset_0_0_7px_5px_#9293ec2e]">
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              {jobsLeftColumn2.map(renderJobCard)}
            </div>
            <div className="flex flex-col gap-5">
              {jobsRightColumn2.map(renderJobCard)}
            </div>
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
