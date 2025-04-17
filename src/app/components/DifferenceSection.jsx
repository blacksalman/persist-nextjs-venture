// // components/DifferenceSection.jsx
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const DifferenceSection = () => {
//   return (
//     <div className="flex items-center justify-between max-w-[1500px] mx-auto my-20 gap-[23px]" id="about">
//       <div className="flex-1 max-w-[500px] max-h-[430px] aspect-square bg-[rgba(22,22,30,0.6)] rounded-[20px] flex items-center justify-center backdrop-blur-[20px] border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_32px_rgba(255,255,255,0.02)] relative overflow-hidden">
//         <Image
//           src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//           alt="Developer"
//           width={500}
//           height={430}
//           className="w-full h-full object-cover rounded-[16px] opacity-90"
//         />
//       </div>
//       <div className="flex-1 text-left ml-[31px] w-[1000px]">
//         <h2 className="text-[2.3rem] font-extralight leading-[1.1] mb-[25px] text-white tracking-[-0.02em]">
//           Hundreds apply for the same job - so what sets you apart?
//         </h2>
//         <p className="text-[1.15rem] text-[rgba(255,255,255,0.7)] leading-[1.5] mb-5 max-w-[580px]">
//           Truth is, everyone’s grinding LeetCode, attending bootcamps, and following the same playbook. But landing the job isn’t just about coding skills—it’s about knowing how to get hired.
//         </p>
//         <p className="text-[1.15rem] text-[rgba(255,255,255,0.7)] leading-[1.5] mb-5 max-w-[580px] last:mb-[35px]">
//           That’s why you see less-skilled candidates securing top roles while others struggle. The real advantage? Mastering the job hunt, not just the code.
//         </p>
//         <Link
//           href="#eligibility"
//           className="inline-block bg-[rgb(138,92,246)] text-white px-7 py-3 rounded-[100px] font-medium text-[0.95rem] cursor-pointer transition-all duration-300 no-underline border-none shadow-[0_4px_15px_rgba(138,92,246,0.3)] backdrop-blur-[5px] tracking-[0.3px] hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(138,92,246,0.4)] hover:bg-[rgb(150,112,255)]"
//         >
//           Get Started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default DifferenceSection;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DifferenceSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-[90%] md:max-w-[1500px] mx-auto my-5 md:my-20 gap-4 md:gap-[23px]" id="about">
      <div className="w-full md:flex-1 max-w-[300px] md:max-w-[500px] max-h-[300px] md:max-h-[430px] aspect-square bg-[rgba(22,22,30,0.6)] rounded-[12px] md:rounded-[20px] flex items-center justify-center backdrop-blur-[15px] md:backdrop-blur-[20px] border border-[rgba(255,255,255,0.08)] shadow-[0_5px_20px_rgba(0,0,0,0.2)] md:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.02)] relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Developer"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-[10px] md:rounded-[16px] opacity-90"
        />
      </div>
      <div className="w-full md:flex-1 text-center md:text-left mt-4 md:mt-0 md:ml-[31px] max-w-[90%] md:max-w-[1000px] mobile-shift-right">
        <h2 className="text-[1.5rem] md:text-[2.3rem] font-extralight leading-[1.1] mb-2 md:mb-[25px] text-white tracking-[-0.02em]">
          Hundreds apply for the same job - so what sets you apart?
        </h2>
        <p className="text-[0.9rem] md:text-[1.15rem] text-[rgba(255,255,255,0.7)] leading-[1.3] md:leading-[1.5] mb-3 md:mb-5 max-w-[90%] md:max-w-[580px]">
          Truth is, everyone’s grinding LeetCode, attending bootcamps, and following the same playbook. But landing the job isn’t just about coding skills—it’s about knowing how to get hired.
        </p>
        <p className="text-[0.9rem] md:text-[1.15rem] text-[rgba(255,255,255,0.7)] leading-[1.3] md:leading-[1.5] mb-3 md:mb-5 md:last:mb-[35px] max-w-[90%] md:max-w-[580px]">
          That’s why you see less-skilled candidates securing top roles while others struggle. The real advantage? Mastering the job hunt, not just the code.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link
            href="#eligibility"
            className="inline-block bg-[rgb(138,92,246)] text-white px-4 md:px-7 py-2 md:py-3 rounded-[50px] md:rounded-[100px] font-medium text-[0.8rem] md:text-[0.95rem] cursor-pointer transition-all duration-300 no-underline border-none shadow-[0_3px_10px_rgba(138,92,246,0.2)] md:shadow-[0_4px_15px_rgba(138,92,246,0.3)] backdrop-blur-[5px] tracking-[0.2px] md:tracking-[0.3px] hover:-translate-y-[1px] md:hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(138,92,246,0.3)] md:hover:shadow-[0_6px_20px_rgba(138,92,246,0.4)] hover:bg-[rgb(150,112,255)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DifferenceSection;