// components/PartnersSection.jsx
import React from 'react';
import Image from 'next/image';

import PUS from '../../../public/images/pus.png'
import Flash from '../../../public/images/flash.jpeg'
import Hitech from '../../../public/images/hitachi.png'
import Invert from '../../../public/images/invert.png'
import Snow from '../../../public/images/snow.jpeg'
import amazon from '../../../public/images/amazon.png'
import GoDaddy from '../../../public/images/godaddy.png'
import Proline from '../../../public/images/Proline.png'
import OCTOPUS from '../../../public/images/octopus.jpeg'

const partnerLogos = {
  PUS,
  Flash,
  Hitech,
  Invert,
  Snow,
  amazon,
  GoDaddy,
  Proline,
  OCTOPUS,
};

const PartnersSection = () => {
    const partnersRow1 = [
      'PUS',
      'Flash',
      'Hitech',
      'Invert',
      'Snow',
      'PUS',
      'Flash',
      'Hitech',
      'Invert',
      'Snow',
    ];
  
    const partnersRow2 = [
      'amazon',
      'GoDaddy',
      'Proline',
      'OCTOPUS',
      'amazon',
      'GoDaddy',
      'Proline',
      'OCTOPUS',
    ];
  
    return (
      <div className="my-[100px] max-w-[1500px] mx-auto px-5">
        <h2 className="text-[3.8rem] font-extralight mb-[15px] text-white text-center tracking-[-0.02em]">
          Our Trusted Partners
        </h2>
        <p className="text-[1.15rem] text-[rgba(255,255,255,0.5)] text-center max-w-[700px] mx-auto mb-[60px] leading-[1.5] font-normal tracking-[0.2px]">
          Collaborating with top industry leaders to bring you the best<br />
          resources and opportunities for career success.
        </p>
        <div className="flex flex-col gap-10 overflow-hidden relative">
          <div className="flex justify-start items-center gap-20 flex-nowrap relative w-fit animate-slideRightToLeft group">
            {partnersRow1.map((partner, index) => (
              <div
                key={index}
                className="bg-none border-none rounded-none text-[1.5rem] text-[rgba(255,255,255,0.9)] font-medium transition-all duration-300 cursor-pointer mx-5 whitespace-nowrap w-[100px] h-[100px] flex overflow-hidden hover:-translate-y-[5px] hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:[animation-play-state:paused]"
              >
                <Image
                  src={partnerLogos[partner]}
                  alt={`${partner} logo`}
                  width={100}
                  height={100}
                  className="object-contain grayscale-[50%] transition-[filter] duration-300 w-full h-full group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-start items-center gap-20 flex-nowrap relative w-fit animate-slideLeftToRight group">
            {partnersRow2.map((partner, index) => (
              <div
                key={index}
                className="bg-none border-none rounded-none text-[1.5rem] text-[rgba(255,255,255,0.9)] font-medium transition-all duration-300 cursor-pointer mx-5 whitespace-nowrap w-[100px] h-[100px] flex overflow-hidden hover:-translate-y-[5px] hover:bg-[rgba(255,255,255,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] group-hover:[animation-play-state:paused]"
              >
                <Image
                  src={partnerLogos[partner]}
                  alt={`${partner} logo`}
                  width={100}
                  height={100}
                  className="object-contain grayscale-[50%] transition-[filter] duration-300 w-full h-full group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default PartnersSection;



