// app/our-team/page.jsx
'use client'; // Required for useRouter hook
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../footer/page';
import Navbar from '../components/Navbar';

export default function OurTeam() {
  const router = useRouter();

  // Sample team data with introductions (replace with real data and images)
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      intro: 'John is the visionary behind Career Accelerator, with over 15 years of experience in tech entrepreneurship. He leads the company with a passion for connecting developers with their dream jobs, driving innovation in the hiring process.',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      intro: 'Jane is our technical genius, overseeing all development projects with a decade of coding expertise. She’s passionate about building scalable solutions that empower developers and streamline job matching.',
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      intro: 'Mike drives our marketing strategy with a creative flair and 8 years in digital campaigns. He’s dedicated to spreading the word about Career Accelerator and helping companies find top talent.',
    },
    {
      name: 'Sarah Williams',
      role: 'HR Manager',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      intro: 'Sarah brings 10 years of HR experience, ensuring our team and clients thrive. She focuses on creating a supportive environment for developers and managing seamless hiring processes.',
    },
  ];

  return (
    <>
    <Navbar isScrolled={false} />
    <div className="min-h-screen text-white py-20 px-5 mt-10">
      <div className="max-w-[1500px] mx-auto">
    

        <h1 className="text-[3.5rem] font-medium text-center mb-12">Meet Our Team</h1>
        <p className="text-[1.2rem] text-[rgba(255,255,255,0.7)] text-center mb-10 max-w-[800px] mx-auto leading-[1.6]">
          At Career Accelerator, our team is a diverse group of passionate professionals dedicated to revolutionizing how developers find jobs and companies hire talent. Get to know the people driving our mission!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member text-center">
              <div className="relative w-full h-64 overflow-hidden rounded-[24px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-[1.5rem] font-medium mt-5">{member.name}</h3>
              <p className="text-[1rem] text-[rgba(255,255,255,0.7)] mb-2">{member.role}</p>
              <p className="text-[0.9rem] text-[rgba(255,255,255,0.6)] max-w-[250px] mx-auto leading-[1.5]">
                {member.intro}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}