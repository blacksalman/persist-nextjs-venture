// components/ServicesSection.jsx
import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <div className="max-w-[1500px] mx-auto my-[120px] px-5" id="services">
      <h2 className="text-[3.8rem] font-medium text-white text-center mb-[15px] tracking-[-0.02em]">
        We Do Everything for You!
      </h2>
      <p className="text-[1.15rem] text-[rgba(255,255,255,0.7)] text-center max-w-[800px] mx-auto mb-[60px] leading-[1.5]">
        Looking for your next big career move? Relax - we’ll handle it all!
      </p>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="service-box bg-[rgba(22,22,30,0.6)] rounded-[24px] p-[50px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] text-left relative overflow-hidden isolate group hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(138,92,246,0.2),inset_0_0_0_1px_rgba(138,92,246,0.2)] hover:bg-[rgba(194,168,255,0.36)] hover:border-[rgba(138,92,246,0.3)] hover:backdrop-blur-[12px]">
          <div className="w-12 h-12 bg-[rgba(138,92,246,0.2)] rounded-[12px] flex items-center justify-center mb-6 transition-all duration-[0.4s] relative z-[1] group-hover:scale-110 group-hover:bg-[rgba(138,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(138,92,246,0.3),0_0_40px_rgba(138,92,246,0.2)]">
            📄
          </div>
          <h3 className="text-[1.5rem] font-medium text-white mb-3 transition-all duration-[0.4s] relative z-[1] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Craft a Standout Resume
          </h3>
          <p className="text-base text-[rgba(255,255,255,0.7)] leading-[1.5] transition-all duration-[0.4s] relative z-[1] group-hover:text-[rgba(255,255,255,0.85)]">
            Stand out with a professionally designed, tailor-made resume.
          </p>
        </div>
        <div className="service-box bg-[rgba(22,22,30,0.6)] rounded-[24px] p-[50px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] text-left relative overflow-hidden isolate group hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(138,92,246,0.2),inset_0_0_0_1px_rgba(138,92,246,0.2)] hover:bg-[rgba(194,168,255,0.36)] hover:border-[rgba(138,92,246,0.3)] hover:backdrop-blur-[12px]">
          <div className="w-12 h-12 bg-[rgba(138,92,246,0.2)] rounded-[12px] flex items-center justify-center mb-6 transition-all duration-[0.4s] relative z-[1] group-hover:scale-110 group-hover:bg-[rgba(138,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(138,92,246,0.3),0_0_40px_rgba(138,92,246,0.2)]">
            🔗
          </div>
          <h3 className="text-[1.5rem] font-medium text-white mb-3 transition-all duration-[0.4s] relative z-[1] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            LinkedIn Profile Enhancement
          </h3>
          <p className="text-base text-[rgba(255,255,255,0.7)] leading-[1.5] transition-all duration-[0.4s] relative z-[1] group-hover:text-[rgba(255,255,255,0.85)]">
            Optimize your LinkedIn to attract top recruiters.
          </p>
        </div>
        <div className="service-box bg-[rgba(22,22,30,0.6)] rounded-[24px] p-[50px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] text-left relative overflow-hidden isolate group hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(138,92,246,0.2),inset_0_0_0_1px_rgba(138,92,246,0.2)] hover:bg-[rgba(194,168,255,0.36)] hover:border-[rgba(138,92,246,0.3)] hover:backdrop-blur-[12px]">
          <div className="w-12 h-12 bg-[rgba(138,92,246,0.2)] rounded-[12px] flex items-center justify-center mb-6 transition-all duration-[0.4s] relative z-[1] group-hover:scale-110 group-hover:bg-[rgba(138,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(138,92,246,0.3),0_0_40px_rgba(138,92,246,0.2)]">
            🤖
          </div>
          <h3 className="text-[1.5rem] font-medium text-white mb-3 transition-all duration-[0.4s] relative z-[1] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Automated Job Applications
          </h3>
          <p className="text-base text-[rgba(255,255,255,0.7)] leading-[1.5] transition-all duration-[0.4s] relative z-[1] group-hover:text-[rgba(255,255,255,0.85)]">
            Let automation work for you, apply to jobs without lifting a finger.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-6 mt-6">
        <div className="service-box bg-[rgba(22,22,30,0.6)] rounded-[24px] p-[50px] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] text-left relative overflow-hidden isolate group hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_20px_rgba(138,92,246,0.2),inset_0_0_0_1px_rgba(138,92,246,0.2)] hover:bg-[rgba(194,168,255,0.36)] hover:border-[rgba(138,92,246,0.3)] hover:backdrop-blur-[12px]">
          <div className="w-12 h-12 bg-[rgba(138,92,246,0.2)] rounded-[12px] flex items-center justify-center mb-6 transition-all duration-[0.4s] relative z-[1] group-hover:scale-110 group-hover:bg-[rgba(138,92,246,0.3)] group-hover:shadow-[0_0_20px_rgba(138,92,246,0.3 cervical,0_0_40px_rgba(138,92,246,0.2)]">
            👥
          </div>
          <h3 className="text-[1.5rem] font-medium text-white mb-3 transition-all duration-[0.4s] relative z-[1] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Personalized Career Advice
          </h3>
          <p className="text-base text-[rgba(255,255,255,0.7)] leading-[1.5] transition-all duration-[0.4s] relative z-[1] group-hover:text-[rgba(255,255,255,0.85)]">
            Receive guidance tailored to your goals, plus interview prep and insider tips.
          </p>
        </div>
        <div className="stress-free-box bg-[rgba(138,92,246,0.15)] rounded-[24px] p-12 text-left backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] relative overflow-hidden isolate group hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(138,92,246,0.3)] hover:border-[rgba(138,92,246,0.3)] hover:bg-[rgba(194,168,255,0.36)]">
          <h2 className="text-[2.8rem] font-medium text-white mb-4 leading-[1.2]">
            Take the Stress Out of Job Hunting!
          </h2>
          <p className="text-[1.15rem] text-[rgba(255,255,255,0.6)] mb-8 leading-[1.5] max-w-[600px]">
            Join our accelerator program and focus on your future while we handle the hard work.
          </p>
          <Link
            href="#eligibility"
            className="inline-block bg-white text-[rgb(138,92,246)] px-8 py-[14px] rounded-[100px] font-medium text-base no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(255,255,255,0.2)] group-hover:-translate-y-[2px] group-hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)]"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;