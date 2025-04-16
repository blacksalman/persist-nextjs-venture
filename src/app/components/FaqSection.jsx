"use client";
// // components/FaqSection.jsx
// import React, { useState } from 'react';

// const FaqSection = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "I am a junior/mid-level/senior developer. Is this program for me?",
//       answer: "Yes! This program is for everyone. Whether you are a junior developer looking to get your first job, or a senior developer looking to get a better job, this program is for you. We have helped developers of all levels get the job they want."
//     },
//     {
//       question: "You apply to jobs for me?",
//       answer: "Yes, we do! Our automated system applies to relevant jobs on your behalf, saving you countless hours of manual applications. We ensure each application is tailored to the specific role and company."
//     },
//     {
//       question: "How long does it take get a job with this program?",
//       answer: "While results vary based on individual circumstances, most of our participants secure interviews within 2-4 weeks and job offers within 1-3 months. Our comprehensive approach significantly reduces the typical job search timeline."
//     },
//     {
//       question: "What does Persist Ventures get?",
//       answer: "We take a small percentage of your first year's salary increase as our success fee. This means we only succeed when you succeed. Our interests are perfectly aligned - the more we help you earn, the better it is for both of us."
//     }
//   ];

//   const toggleFaq = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   // Eye SVG (shown when answer is hidden)
//   const eyeSvg = (
//     <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-white opacity-90 transition-all duration-300">
//       <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
//     </svg>
//   );

//   const eyeSlashSvg = (
//     <svg viewBox="0 0 640 512" className="w-[20px] h-[20px] fill-white opacity-90 transition-all duration-300">
//       <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
//     </svg>
//   );

//   return (
//     <div className="faq-section max-w-[1500px] mx-auto mt-30 px-5 text-center" id="faq">
//       <h2 className="text-[3.5rem] font-extralight text-white mb-5 leading-[1.1] flex flex-col gap-2.5">
//         <span>Curious? We've Got</span>
//         <span className="font-medium">Answers!</span>
//       </h2>
//       <div className="faq-grid flex flex-col max-w-[1200px] mx-auto rounded-[24px] overflow-hidden relative">
//         {faqs.map((faq, index) => (
//           <div className={`faq-item relative border-b border-[rgba(255,255,255,0.1)] ${activeIndex === index ? 'bg-[rgb(151,135,234)]' : ''}`} key={index}>
//             <div className="faq-question px-8 py-10 flex items-center justify-between cursor-pointer gap-5 relative" onClick={() => toggleFaq(index)}>
//               <h3 className="text-[1.1rem] font-normal text-[rgba(255,255,255,0.9)] text-left m-0 flex-1 leading-[1.4] flex items-center">
//                 <span className="mr-3.75 text-[1.1rem] font-medium text-[rgba(255,255,255,0.5)] opacity-70">0{index + 1}</span>
//                 {faq.question}
//               </h3>
//               <div className="faq-icon w-[32px] h-[32px] bg-[rgba(255,255,255,0.15)] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
//                 {activeIndex === index ? eyeSlashSvg : eyeSvg}
//               </div>
//             </div>
//             <div className="faq-answer max-h-0 overflow-hidden bg-[rgb(151,135,234)]">
//               <p className="px-8 py-6 pl-18 m-0 text-[1rem] text-[rgba(255,255,255,0.7)] leading-[1.6] text-left">
//                 {faq.answer}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FaqSection;

// components/FaqSection.jsx
import React, { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "I am a junior/mid-level/senior developer. Is this program for me?",
      answer: "Yes! This program is for everyone. Whether you are a junior developer looking to get your first job, or a senior developer looking to get a better job, this program is for you. We have helped developers of all levels get the job they want."
    },
    {
      question: "You apply to jobs for me?",
      answer: "Yes, we do! Our automated system applies to relevant jobs on your behalf, saving you countless hours of manual applications. We ensure each application is tailored to the specific role and company."
    },
    {
      question: "How long does it take get a job with this program?",
      answer: "While results vary based on individual circumstances, most of our participants secure interviews within 2-4 weeks and job offers within 1-3 months. Our comprehensive approach significantly reduces the typical job search timeline."
    },
    {
      question: "What does Persist Ventures get?",
      answer: "We take a small percentage of your first year's salary increase as our success fee. This means we only succeed when you succeed. Our interests are perfectly aligned - the more we help you earn, the better it is for both of us."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Eye SVG (shown when answer is hidden)
  const eyeSvg = (
    <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-white opacity-90 transition-all duration-300">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  );

  const eyeSlashSvg = (
    <svg viewBox="0 0 640 512" className="w-[20px] h-[20px] fill-white opacity-90 transition-all duration-300">
      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/>
    </svg>
  );

  return (
    <div className="faq-section max-w-[1500px] mx-auto mt-30 px-5 text-center" id="faq">
      <h2 className="text-[3.5rem] font-extralight text-white mb-5 leading-[1.1] flex flex-col gap-2.5">
        <span>Curious? We've Got</span>
        <span className="font-medium">Answers!</span>
      </h2>
      <div className="faq-grid flex flex-col max-w-[1200px] mx-auto rounded-[24px] overflow-hidden relative">
        {faqs.map((faq, index) => (
          <div className="faq-item relative border-b border-[rgba(255,255,255,0.1)]" key={index}>
            <div className={`faq-question px-8 py-10 flex items-center justify-between cursor-pointer gap-5 relative transition-all duration-300 ${activeIndex === index ? 'bg-[rgb(151,135,234)]' : ''}`} onClick={() => toggleFaq(index)}>
              <h3 className="text-[1.1rem] font-normal text-[rgba(255,255,255,0.9)] text-left m-0 flex-1 leading-[1.4] flex items-center">
                <span className="mr-3.75 text-[1.1rem] font-medium text-[rgba(255,255,255,0.5)] opacity-70">0{index + 1}</span>
                {faq.question}
              </h3>
              <div className="faq-icon w-[32px] h-[32px] bg-[rgba(255,255,255,0.15)] rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0">
                {activeIndex === index ? eyeSlashSvg : eyeSvg}
              </div>
            </div>
            <div className={`faq-answer overflow-hidden transition-max-h duration-300 ${activeIndex === index ? 'max-h-[1000px] bg-[rgb(151,135,234)]' : 'max-h-0'}`}>
              <p className="px-8 py-6 pl-18 m-0 text-[1rem] text-[rgba(255,255,255,0.7)] leading-[1.6] text-left">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;