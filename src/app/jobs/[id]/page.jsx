// app/jobs/[id]/page.jsx
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
// import Navbar from '../../components/Navbar';
// import Footer from '../../footer/page';

const jobs = [
  {
    id: 1,
    title: 'Backend Developer',
    company: 'Logitech',
    type: 'Full-time',
    salary: '$120,000',
    location: 'Worldwide',
    experience: '3+ years',
    description: 'Join Logitech as a Backend Developer to design and implement scalable server-side applications. You will work with cutting-edge technologies to build robust APIs and manage data pipelines for our global products.',
    requirements: [
      '5+ years of experience in backend development',
      'Expertise in Node.js, Python, or Java',
      'Familiarity with cloud platforms like AWS or Azure',
      'Strong understanding of database management (SQL/NoSQL)',
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health benefits',
      'Flexible working hours',
      'Annual company retreats',
    ],
    postedDate: '2025-03-15',
  },
  {
    id: 2,
    title: 'Flutter Developer',
    company: 'Persis Ventures',
    type: 'Full-time',
    salary: '$100,000',
    location: 'Worldwide',
    experience: '2+ years',
    description: 'Persis Ventures is seeking a Flutter Developer to build high-performance mobile applications. You will collaborate with our design and backend teams to deliver seamless user experiences across iOS and Android platforms.',
    requirements: [
      '3+ years of experience with Flutter and Dart',
      'Experience with mobile app deployment on iOS and Android',
      'Knowledge of RESTful APIs and state management',
      'Strong problem-solving skills',
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Remote work options',
      'Professional development budget',
    ],
    postedDate: '2025-03-14',
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    company: 'TechCorp',
    type: 'Full-time',
    salary: '$130,000',
    location: 'Worldwide',
    experience: '4+ years',
    description: 'TechCorp is looking for a Full Stack Developer to build and maintain web applications. You will work on both frontend and backend technologies, ensuring seamless integration and performance.',
    requirements: [
      '4+ years of experience in full stack development',
      'Proficiency in React, Node.js, and Express',
      'Experience with databases like MongoDB or PostgreSQL',
      'Strong understanding of CI/CD pipelines',
    ],
    benefits: [
      'Competitive salary and stock options',
      'Health and wellness benefits',
      'Flexible working hours',
      'Annual tech stipend',
    ],
    postedDate: '2025-03-13',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'WebSolutions',
    type: 'Full-time',
    salary: '$110,000',
    location: 'Worldwide',
    experience: '3+ years',
    description: 'WebSolutions is hiring a Frontend Developer to create stunning user interfaces. You will work with React and modern JavaScript frameworks to build responsive and accessible web applications.',
    requirements: [
      '3+ years of experience with React and JavaScript',
      'Proficiency in HTML, CSS, and modern JavaScript frameworks',
      'Experience with RESTful APIs and Git',
      'Strong design sensibility',
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      'Remote work options',
      'Professional development budget',
    ],
    postedDate: '2025-03-12',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudNet',
    type: 'Full-time',
    salary: '$125,000',
    location: 'Worldwide',
    experience: '4+ years',
    description: 'CloudNet is seeking a DevOps Engineer to manage our cloud infrastructure. You will work on automation, CI/CD pipelines, and ensure the reliability and scalability of our systems.',
    requirements: [
      '4+ years of experience in DevOps or related roles',
      'Expertise in AWS, Docker, and Kubernetes',
      'Experience with CI/CD tools like Jenkins or GitLab',
      'Strong scripting skills (e.g., Bash, Python)',
    ],
    benefits: [
      'Competitive salary and equity',
      'Comprehensive health benefits',
      'Flexible working hours',
      'Annual company retreats',
    ],
    postedDate: '2025-03-11',
  },
  {
    id: 6,
    title: 'Data Scientist',
    company: 'DataTech',
    type: 'Full-time',
    salary: '$140,000',
    location: 'Worldwide',
    experience: '5+ years',
    description: 'DataTech is looking for a Data Scientist to analyze large datasets and build predictive models. You will work with machine learning algorithms and data visualization tools to drive business insights.',
    requirements: [
      '5+ years of experience in data science',
      'Expertise in Python, R, and machine learning frameworks',
      'Experience with data visualization tools like Tableau',
      'Strong statistical analysis skills',
    ],
    benefits: [
      'Competitive salary and stock options',
      'Health and wellness benefits',
      'Flexible working hours',
      'Annual tech stipend',
    ],
    postedDate: '2025-03-10',
  },
  {
    id: 7,
    title: 'Senior Frontend Developer',
    company: 'Google',
    type: 'Full-time',
    salary: '$120k - $150k',
    location: 'New York, NY',
    experience: '5+ years',
    description: 'Google is seeking a Senior Frontend Developer to join our team in New York. As a key member of the frontend team, you will be responsible for building and maintaining dynamic and responsive web applications using modern technologies like React, TypeScript, and Redux. You will collaborate closely with cross-functional teams to create seamless user experiences and improve the performance of our web applications.',
    requirements: [
      '5+ years of experience as a frontend developer',
      'Proficiency in React, TypeScript, and Redux',
      'Strong understanding of CSS3 and modern frontend frameworks',
      'Excellent problem-solving skills and attention to detail',
    ],
    benefits: [
      'Competitive salary and performance-based bonuses',
      'Comprehensive healthcare plans (medical, dental, and vision)',
      'Generous paid time off and paid holidays',
      'Opportunities for professional development and training',
      'Access to Google’s wellness programs and fitness facilities',
    ],
    postedDate: '2025-04-10',
  },
  {
    id: 8,
    title: 'Backend Engineer',
    company: 'Microsoft',
    type: 'Full-time',
    salary: '$130k - $160k',
    location: 'Remote',
    experience: '3+ years',
    description: 'Microsoft is looking for a talented Backend Engineer to join our dynamic team working remotely. In this role, you will be responsible for building and maintaining scalable services that power our cloud applications. You will leverage technologies such as Node.js, Python, and AWS to create reliable and performant backend systems that support millions of users worldwide.',
    requirements: [
      '3+ years of experience in backend development',
      'Strong proficiency in Node.js, Python, and cloud technologies such as AWS',
      'Experience with databases like MongoDB or other NoSQL databases',
      'Knowledge of building RESTful APIs and microservices architecture',
      'Familiarity with CI/CD practices and version control systems (Git)',
      'Strong communication skills and ability to collaborate in a remote team environment',
    ],
    benefits: [
      'Competitive salary and equity-based compensation',
      'Comprehensive health benefits (medical, dental, and vision)',
      '401(k) plan with company match',
      'Generous paid time off (vacation, sick leave, and holidays)',
      'Flexible work schedule and remote working options',
    ],
    postedDate: '2025-04-05',
  },
];

const JobDetailPage = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return (
      <div className="min-h-screen text-white">
        {/* <Navbar isScrolled={false} /> */}
        <div className="p-[80px_40px] bg-[#16161e] text-white max-w-[800px] mx-auto max-[768px]:p-[60px_20px]">
          <h2 className="text-[2.5rem] font-medium mb-[10px] max-[768px]:text-[2rem]">Job Not Found</h2>
          <p className="text-[1.1rem] text-[rgba(255,255,255,0.9)] leading-[1.6] mb-5">
            The job you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/search-jobs"
            className="text-[#8a5cff] text-[1.1rem] mb-5 inline-block no-underline transition-all duration-300 hover:text-[#9b6dff]"
          >
            Back to Jobs
          </Link>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* <Navbar isScrolled={false} /> */}
      <div className="p-[80px_40px] bg-[#16161e] text-white max-w-[800px] mx-auto max-[768px]:p-[60px_20px]">
        <Link
          href="/search-jobs"
          className="text-[#8a5cff] text-[1.1rem] mb-5 inline-block no-underline transition-all duration-300 hover:text-[#9b6dff]"
        >
          ← Back to Jobs
        </Link>
        <div className="mb-10">
          <h1 className="text-[2.5rem] font-medium mb-[10px] max-[768px]:text-[2rem]">{job.title}</h1>
          <p className="text-[1.5rem] text-[#8a5cff] mb-[10px]">{job.company}</p>
          <div className="text-[1.1rem] text-[rgba(255,255,255,0.7)] mb-[10px]">
            <span>{job.location}</span> • <span>{job.type}</span> • <span>{job.salary}</span>
          </div>
          <p className="text-[0.9rem] text-[rgba(255,255,255,0.5)]">Posted on: {job.postedDate}</p>
        </div>
        <div className="mb-10">
          <h2 className="text-[1.8rem] font-medium mb-[15px] max-[768px]:text-[1.5rem]">Description</h2>
          <p className="text-[1.1rem] text-[rgba(255,255,255,0.9)] leading-[1.6] mb-5">{job.description}</p>
          <h2 className="text-[1.8rem] font-medium mb-[15px] max-[768px]:text-[1.5rem]">Requirements</h2>
          <ul className="list-disc pl-5 mb-5">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-[1.1rem] text-[rgba(255,255,255,0.9)] leading-[1.6] mb-[10px]">
                {req}
              </li>
            ))}
          </ul>
          <h2 className="text-[1.8rem] font-medium mb-[15px] max-[768px]:text-[1.5rem]">Benefits</h2>
          <ul className="list-disc pl-5 mb-5">
            {job.benefits.map((benefit, index) => (
              <li key={index} className="text-[1.1rem] text-[rgba(255,255,255,0.9)] leading-[1.6] mb-[10px]">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <button className="p-[12px_30px] bg-[#8a5cff] rounded-lg text-white text-[1.1rem] font-medium transition-all duration-300 hover:bg-[#9b6dff]">
          Apply Now
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default JobDetailPage;