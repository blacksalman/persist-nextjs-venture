// // components/EligibilityBox.jsx
// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import confetti from 'canvas-confetti';
// import Image from 'next/image';
// import LinkedIn from '../../../public/images/linkedIn.png';
// import InterShala from '../../../public/images/intershala.png';

// const EligibilityBox = () => {
//   const [linkedinUrl, setLinkedinUrl] = useState('');
//   const [isChecking, setIsChecking] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const validateLinkedInUrl = (url) => {
//     const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in)\/[a-zA-Z0-9-]+\/?$/;
//     return linkedinRegex.test(url);
//   };


//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsChecking(true);

//     setTimeout(() => {
//       if (validateLinkedInUrl(linkedinUrl)) {
//         triggerConfetti();
//         setTimeout(() => {
//           router.push(`/signup?linkedinUrl=${encodeURIComponent(linkedinUrl)}`);
//         }, 1500);
//       } else {
//         setError('Please enter a valid LinkedIn URL.');
//         setIsChecking(false);
//       }
//     }, 2000);
//   };

//   return (
//     <div className="relative overflow-hidden mt-18">
//       <div className="absolute w-[300px] h-[300px] rounded-[20px] overflow-hidden blur-sm top-[20%] -right-[100px] rotate-[15deg]">
//         <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full object-cover blur-sm" />
//       </div>
//       <div className="absolute w-[300px] h-[300px] rounded-[20px] overflow-hidden blur-sm bottom-[10%] -left-[80px] rotate-[-10deg]">
//         <Image src={InterShala} alt="Internshala" className="w-full h-full object-cover blur-sm" />
//       </div>
//       <header className="my-[140px_0_30px_0] max-w-[800px] mx-auto flex flex-col items-center">
//         <div className="max-w-[1200px] mx-auto flex flex-col items-center">
//           <div className="inline-flex items-center px-5 py-2 bg-[rgba(255,255,255,0.1)] rounded-[100px] text-[1.1rem] mb-6 text-[rgba(255,255,255,0.9)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)]">
//             <span className="before:content-['•'] before:text-[#00a8ff] before:text-[24px] before:mr-3 before:animate-[blink_2s_infinite] before:drop-shadow-[0_0_10px_rgba(0,168,255,0.5)]">
//               Automate. Accelerate. Achieve.
//             </span>
//           </div>
//           <h1 className="text-[3.5rem] font-extralight text-white mb-6 leading-[1.2] text-center">
//             Unlock Your Dream Job<br />with Ease!
//           </h1>
//           <p className="text-[1.1rem] text-[rgba(255,255,255,0.7)] leading-[1.6] max-w-[600px] mx-auto text-center">
//             Boost Your Salary by $10k–$300k with our all-in-one career accelerator.
//           </p>
//         </div>
//       </header>
//       <div
//         className="max-w-[800px] w-[90%] mx-auto my-10 p-[40px_30px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[24px] overflow-hidden border-[rgb(132,126,168)] relative before:content-[''] before:absolute before:inset-[-1px] before:rounded-[24px] before:bg-gradient-to-r before:from-[rgba(138,180,255,0.15)] before:via-[rgba(138,180,255,0.02)] before:to-[rgba(138,180,255,0.15)] before:shadow-[0_0_30px_rgba(138,180,255,0.1)] before:border before:border-[rgb(132,126,168)] before:z-[-1]"
//         id="eligibility"
//       >
//         <h3 className="text-[3rem] mb-[25px] font-bold text-white text-center flex flex-col items-center justify-center gap-[5px] leading-[1.2] tracking-[-0.01em] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//           <span className="first-line flex items-center justify-center gap-[10px] mb-[5px]">
//             <span className="magnifier text-[2.2rem] mr-[10px] inline-block align-middle drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
//               🔍
//             </span>
//             Check Your Eligibility in
//           </span>
//           <span className="second-line text-[3rem] font-extralight block">Seconds!</span>
//         </h3>
//         <p className="text-[1.2rem] opacity-75 mb-[35px] leading-[1.6] max-w-[600px] mx-auto text-[rgba(255,255,255,0.85)] text-center">
//           Just drop your LinkedIn profile link below, and we’ll guide you through the journey.
//         </p>
//         <div className="flex gap-[15px] justify-center items-center max-w-[600px] mx-auto p-[6px] rounded-[100px]">
//           <input
//             type="text"
//             placeholder="Paste Your LinkedIn URL here..."
//             value={linkedinUrl}
//             onChange={(e) => setLinkedinUrl(e.target.value)}
//             disabled={isChecking}
//             className={`p-[15px_25px] rounded-[100px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] text-white text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex-1 outline-none placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-[0.95rem] ${error ? 'border-[#ff4d4d]' : ''}`}
//           />
          // <button
          //   className={`bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] p-[15px_32px] rounded-[100px] text-white font-medium text-[0.95rem] shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)] hover:bg-gradient-to-r hover:from-[#9461ff] hover:to-[#8b5cf6] disabled:bg-[#555] disabled:cursor-not-allowed`}
          //   onClick={handleSubmit}
          //   disabled={isChecking}
          // >
          //   {isChecking ? (
          //     <span>
          //       Checking<span className="animate-[dots_1.5s_infinite] after:content-['.'] after:[animation:inherit] after:[animation-delay:0.2s]"></span>
          //     </span>
          //   ) : (
          //     'Check Now'
          //   )}
          // </button>
//         </div>
//         {error && <p className="text-[#ff4d4d] text-[0.9rem] mt-[10px] text-center">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default EligibilityBox;







// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import confetti from 'canvas-confetti';
// import Image from 'next/image';
// import LinkedIn from '../../../public/images/linkedIn.png';
// import InterShala from '../../../public/images/intershala.png';

// const EligibilityBox = () => {
//   const [linkedinUrl, setLinkedinUrl] = useState('');
//   const [isChecking, setIsChecking] = useState(false);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const validateLinkedInUrl = (url) => {
//     const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in)\/[a-zA-Z0-9-]+\/?$/;
//     return linkedinRegex.test(url);
//   };

//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsChecking(true);

//     setTimeout(() => {
//       if (validateLinkedInUrl(linkedinUrl)) {
//         triggerConfetti();
//         setTimeout(() => {
//           router.push(`/signup?linkedinUrl=${encodeURIComponent(linkedinUrl)}`);
//         }, 1500);
//       } else {
//         setError('Please enter a valid LinkedIn URL.');
//         setIsChecking(false);
//       }
//     }, 2000);
//   };

//   return (
//     <div className="relative overflow-hidden mt-12 md:mt-18">
//       {/* Background Images with Responsive Positioning */}
//       <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[20px] overflow-hidden blur-sm top-[10%] md:top-[20%] -right-[60px] md:-right-[100px] rotate-[15deg]">
//         <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full object-cover blur-sm" />
//       </div>
//       <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[20px] overflow-hidden blur-sm bottom-[5%] md:bottom-[10%] -left-[50px] md:-left-[80px] rotate-[-10deg]">
//         <Image src={InterShala} alt="Internshala" className="w-full h-full object-cover blur-sm" />
//       </div>
//       <header className="my-10 md:my-[140px_0_30px_0] max-w-[90%] md:max-w-[800px] mx-auto flex flex-col items-center">
//         <div className="max-w-[90%] md:max-w-[1200px] mx-auto flex flex-col items-center">
//           <div className="inline-flex items-center px-3 md:px-5 py-1 md:py-2 bg-[rgba(255,255,255,0.1)] rounded-[100px] text-[0.9rem] md:text-[1.1rem] mb-4 md:mb-6 text-[rgba(255,255,255,0.9)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)]">
//             <span className="before:content-['•'] before:text-[#00a8ff] before:text-[20px] md:before:text-[24px] before:mr-2 md:before:mr-3 before:animate-[blink_2s_infinite] before:drop-shadow-[0_0_10px_rgba(0,168,255,0.5)]">
//               Automate. Accelerate. Achieve.
//             </span>
//           </div>
//           <h1 className="text-[2rem] md:text-[3.5rem] font-extralight text-white mb-4 md:mb-6 leading-[1.2] text-center">
//             Unlock Your Dream Job<br />with Ease!
//           </h1>
//           <p className="text-[0.9rem] md:text-[1.1rem] text-[rgba(255,255,255,0.7)] leading-[1.4] md:leading-[1.6] max-w-[90%] md:max-w-[600px] mx-auto text-center">
//             Boost Your Salary by $10k–$300k with our all-in-one career accelerator.
//           </p>
//         </div>
//       </header>
//       <div
//         className="max-w-[90%] md:max-w-[800px] w-full mx-auto my-6 md:my-10 p-5 md:p-[40px_30px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[16px] md:rounded-[24px] overflow-hidden border-[rgb(132,126,168)] relative before:content-[''] before:absolute before:inset-[-1px] before:rounded-[16px] md:rounded-[24px] before:bg-gradient-to-r before:from-[rgba(138,180,255,0.15)] before:via-[rgba(138,180,255,0.02)] before:to-[rgba(138,180,255,0.15)] before:shadow-[0_0_30px_rgba(138,180,255,0.1)] before:border before:border-[rgb(132,126,168)] before:z-[-1]"
//         id="eligibility"
//       >
//         <h3 className="text-[1.8rem] md:text-[3rem] mb-4 md:mb-[25px] font-bold text-white text-center flex flex-col items-center justify-center gap-2 md:gap-[5px] leading-[1.2] tracking-[-0.01em] drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
//           <span className="flex items-center justify-center gap-2 md:gap-[10px] mb-1 md:mb-[5px]">
//             <span className="magnifier text-[1.5rem] md:text-[2.2rem] mr-2 md:mr-[10px] inline-block align-middle drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
//               🔍
//             </span>
//             Check Your Eligibility in
//           </span>
//           <span className="text-[1.8rem] md:text-[3rem] font-extralight block">Seconds!</span>
//         </h3>
//         <p className="text-[1rem] md:text-[1.2rem] opacity-75 mb-4 md:mb-[35px] leading-[1.4] md:leading-[1.6] max-w-[90%] md:max-w-[600px] mx-auto text-[rgba(255,255,255,0.85)] text-center">
//           Just drop your LinkedIn profile link below, and we’ll guide you through the journey.
//         </p>
//         <div className="flex flex-col md:flex-row gap-4 md:gap-[15px] justify-center items-center max-w-[90%] md:max-w-[600px] mx-auto p-2 md:p-[6px] rounded-[50px] md:rounded-[100px]">
//           <input
//             type="text"
//             placeholder="Paste Your LinkedIn URL here..."
//             value={linkedinUrl}
//             onChange={(e) => setLinkedinUrl(e.target.value)}
//             disabled={isChecking}
//             className={`p-3 md:p-[15px_25px] rounded-[50px] md:rounded-[100px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] text-white text-[0.9rem] md:text-base shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex-1 outline-none placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-[0.8rem] md:placeholder:text-[0.95rem] ${error ? 'border-[#ff4d4d]' : ''}`}
//           />
//           <button
//             className={`bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] p-3 md:p-[15px_32px] rounded-[50px] md:rounded-[100px] text-white font-medium text-[0.9rem] md:text-[0.95rem] shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)] hover:bg-gradient-to-r hover:from-[#9461ff] hover:to-[#8b5cf6] disabled:bg-[#555] disabled:cursor-not-allowed w-full md:w-auto`}
//             onClick={handleSubmit}
//             disabled={isChecking}
//           >
//             {isChecking ? (
//               <span>
//                 Checking<span className="animate-[dots_1.5s_infinite] after:content-['.'] after:[animation:inherit] after:[animation-delay:0.2s]"></span>
//               </span>
//             ) : (
//               'Check Now'
//             )}
//           </button>
//         </div>
//         {error && <p className="text-[#ff4d4d] text-[0.8rem] md:text-[0.9rem] mt-2 md:mt-[10px] text-center">{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default EligibilityBox;

// #####################################################

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import confetti from 'canvas-confetti';
import Image from 'next/image';
import LinkedIn from '../../../public/images/linkedIn.png';
import InterShala from '../../../public/images/intershala.png';

const EligibilityBox = () => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const validateLinkedInUrl = (url) => {
    const linkedinRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/(in)\/[a-zA-Z0-9-]+\/?$/;
    return linkedinRegex.test(url);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsChecking(true);

    setTimeout(() => {
      if (validateLinkedInUrl(linkedinUrl)) {
        triggerConfetti();
        setTimeout(() => {
          router.push(`/signup?linkedinUrl=${encodeURIComponent(linkedinUrl)}`);
        }, 1500);
      } else {
        setError('Please enter a valid LinkedIn URL.');
        setIsChecking(false);
      }
    }, 2000);
  };

  return (
    <div className="relative overflow-hidden mt-12 md:mt-18">
      {/* Background Images with Responsive Positioning, hidden on mobile */}
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[20px] overflow-hidden blur-sm top-[10%] md:top-[20%] -right-[60px] md:-right-[100px] rotate-[15deg] md:block hidden">
        <Image src={LinkedIn} alt="LinkedIn" className="w-full h-full object-cover blur-sm" />
      </div>
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-[20px] overflow-hidden blur-sm bottom-[5%] md:bottom-[10%] -left-[50px] md:-left-[80px] rotate-[-10deg] md:block hidden">
        <Image src={InterShala} alt="Internshala" className="w-full h-full object-cover blur-sm" />
      </div>
      <header className="my-10 md:my-[140px_0_30px_0] max-w-[90%] md:max-w-[800px] mx-auto flex flex-col items-center">
        <div className="max-w-[90%] md:max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-3 md:px-5 py-1 md:py-2 bg-[rgba(255,255,255,0.1)] rounded-[100px] text-[0.9rem] md:text-[1.1rem] mb-4 md:mb-6 text-[rgba(255,255,255,0.9)] backdrop-blur-[5px] border border-[rgba(255,255,255,0.1)]">
            <span className="before:content-['•'] before:text-[#00a8ff] before:text-[20px] md:before:text-[24px] before:mr-2 md:before:mr-3 before:animate-[blink_2s_infinite] before:drop-shadow-[0_0_10px_rgba(0,168,255,0.5)]">
              Automate. Accelerate. Achieve.
            </span>
          </div>
          <h1 className="text-[2rem] md:text-[3.5rem] font-extralight text-white mb-4 md:mb-6 leading-[1.2] text-center">
            Unlock Your Dream Job<br />with Ease!
          </h1>
          <p className="text-[0.9rem] md:text-[1.1rem] text-[rgba(255,255,255,0.7)] leading-[1.4] md:leading-[1.6] max-w-[90%] md:max-w-[600px] mx-auto text-center">
            Boost Your Salary by $10k–$300k with our all-in-one career accelerator.
          </p>
        </div>
      </header>
      <div
        className="max-w-[80%] md:max-w-[800px] w-full mx-auto my-4 md:my-10 p-3 md:p-[40px_30px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.05)] shadow-[0_6px_20px_rgba(0,0,0,0.2)] md:shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-[12px] md:rounded-[24px] overflow-hidden border-[rgb(132,126,168)] relative before:content-[''] before:absolute before:inset-[-1px] before:rounded-[12px] md:rounded-[24px] before:bg-gradient-to-r before:from-[rgba(138,180,255,0.15)] before:via-[rgba(138,180,255,0.02)] before:to-[rgba(138,180,255,0.15)] before:shadow-[0_0_20px_rgba(138,180,255,0.1)] md:before:shadow-[0_0_30px_rgba(138,180,255,0.1)] before:border before:border-[rgb(132,126,168)] before:z-[-1]"
        id="eligibility"
      >
        <h3 className="text-[1.5rem] md:text-[3rem] mb-3 md:mb-[25px] font-bold text-white text-center flex flex-col items-center justify-center gap-1 md:gap-[5px] leading-[1.2] tracking-[-0.01em] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] md:drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <span className="flex items-center justify-center gap-1 md:gap-[10px] mb-1 md:mb-[5px]">
            <span className="magnifier text-[1.2rem] md:text-[2.2rem] mr-1 md:mr-[10px] inline-block align-middle drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] md:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              🔍
            </span>
            Check Your Eligibility in
          </span>
          <span className="text-[1.5rem] md:text-[3rem] font-extralight block">Seconds!</span>
        </h3>
        <p className="text-[0.9rem] md:text-[1.2rem] opacity-75 mb-3 md:mb-[35px] leading-[1.4] md:leading-[1.6] max-w-[90%] md:max-w-[600px] mx-auto text-[rgba(255,255,255,0.85)] text-center">
          Just drop your LinkedIn profile link below, and we’ll guide you through the journey.
        </p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-[15px] justify-center items-center max-w-[90%] md:max-w-[600px] mx-auto p-1 md:p-[6px] rounded-[40px] md:rounded-[100px]">
          <input
            type="text"
            placeholder="Paste Your LinkedIn URL here..."
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            disabled={isChecking}
            className={`p-2 md:p-[15px_25px] rounded-[40px] md:rounded-[100px] bg-[rgba(0,0,0,0.4)] border border-[rgba(255,255,255,0.1)] text-white text-[0.8rem] md:text-base shadow-[0_3px_10px_rgba(0,0,0,0.2)] md:shadow-[0_4px_15px_rgba(0,0,0,0.2)] w-full outline-none placeholder:text-[rgba(255,255,255,0.5)] placeholder:text-[0.7rem] md:placeholder:text-[0.95rem] ${error ? 'border-[#ff4d4d]' : ''}`}
          />
          <button
            className={`bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] p-2 md:p-[15px_32px] rounded-[40px] md:rounded-[100px] text-white font-medium text-[0.7rem] md:text-[0.95rem] shadow-[0_3px_10px_rgba(124,58,237,0.2)] md:shadow-[0_4px_15px_rgba(124,58,237,0.2)] transition-all duration-300 hover:-translate-y-[1px] md:hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(124,58,237,0.3)] md:hover:shadow-[0_6px_20px_rgba(124,58,237,0.3)] hover:bg-gradient-to-r hover:from-[#9461ff] hover:to-[#8b5cf6] disabled:bg-[#555] disabled:cursor-not-allowed w-24 md:w-auto`}
            onClick={handleSubmit}
            disabled={isChecking}
          >
            {isChecking ? (
              <span>
                Checking<span className="animate-[dots_1.5s_infinite] after:content-['.'] after:[animation:inherit] after:[animation-delay:0.2s]"></span>
              </span>
            ) : (
              'Check Now'
            )}
          </button>
             
        </div>
        {error && <p className="text-[#ff4d4d] text-[1rem] md:text-[0.9rem] mt-1 md:mt-[10px] text-center">{error}</p>}
      </div>
    </div>
  );
};

export default EligibilityBox;