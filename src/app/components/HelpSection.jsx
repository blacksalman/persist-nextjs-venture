// components/HelpSection.jsx
import React from 'react';

const HelpSection = () => {
  return (
    <div className="help-section max-w-[1500px] mx-auto mt-30 px-5">
      <div className="help-container bg-gradient-to-b from-[rgba(22,21,37,0.7)] to-[rgba(15,14,24,0.85)] rounded-[24px] p-15 text-center relative overflow-hidden border border-[rgba(151,132,207,0.76)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <h2 className="text-[3.2rem] font-medium text-white mb-5 relative z-10">Need Help? We're Here for You!</h2>
        <p className="text-[1.2rem] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto mb-10 leading-[1.6] relative z-10">
          Got questions or need assistance with the program? Our team is just an email away. Reach out anytime, and we'll be happy to support you on your journey!
        </p>
        <a href="mailto:support@careeraccelerator.io" className="email-button inline-block bg-[rgba(138,92,246,0.2)] text-white px-10 py-4 rounded-[100px] text-[1.1rem] no-underline transition-all duration-300 border border-[rgba(138,92,246,0.3)] relative z-10 backdrop-blur-[5px] hover:bg-[rgba(138,92,246,0.3)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(138,92,246,0.2)] hover:border-[rgba(138,92,246,0.4)]">
          support@careeraccelerator.io
        </a>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C27.9 90 10 72.1 10 50S27.9 10 50 10s40 17.9 40 40-17.9 40-40 40z\' fill=\'rgba(255,255,255,0.03)\'/%3E%3C/svg%3E'),_radial-gradient(circle_at_30%_50%,_rgba(138,92,246,0.1)_0%,_transparent_70%),_radial-gradient(circle_at_70%_50%,_rgba(138,92,246,0.1)_0%,_transparent_70%) bg-[length:50px,_auto],_100%_100%,_100%_100%] bg-[position:center] bg-repeat-repeat opacity-50 z-0"></div>
      </div>
    </div>
  );
};

export default HelpSection;