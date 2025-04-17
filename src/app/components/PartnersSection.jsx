import React from 'react';
import Image from 'next/image';

const partnerLogos = {
  Google: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  Microsoft: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  Apple: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  Amazon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  Facebook: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  Slack: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', // Replaced Twitter with Slack
  Netflix: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  Spotify: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg', // Replaced Adobe with Spotify
  IBM: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
};

const PartnersSection = () => {
  const partnersRow1 = [
    'Google',
    'Microsoft',
    'Apple',
    'Amazon',
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'Amazon',
    'Facebook',
  ];

  const partnersRow2 = [
    'Slack', // Replaced Twitter
    'Netflix',
    'Spotify', // Replaced Adobe
    'IBM',
    'Slack',
    'Netflix',
    'Spotify',
    'IBM',
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