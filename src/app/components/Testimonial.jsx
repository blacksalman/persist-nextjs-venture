// components/TestimonialsSection.jsx
"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const testimonials = [
  {
    name: 'Arpit S',
    position: 'Fullstack Developer',
    poster: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
  },
  {
    name: 'Aisha V',
    position: 'Backend Developer',
    poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    video: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4',
  },
  {
    name: 'Vikram S',
    position: 'Fullstack Developer',
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    video: 'https://test-videos.co.uk/vids/sintel/mp4/h264/360/Sintel_360_10s_1MB.mp4',
  },
  {
    name: 'Riya D',
    position: 'Frontend Developer',
    poster: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    video: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
  },
  {
    name: 'Karan B',
    position: 'UI/UX Designer',
    poster: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    video: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4',
  },
];

// export default function TestimonialsSection() {
//   const videoRefs = useRef(testimonials.map(() => null));
//   const [playing, setPlaying] = useState({});
//   const containerRef = useRef(null);

//   const handlePlayPause = (index) => {
//     const video = videoRefs.current[index];
//     setPlaying((prev) => {
//       const newPlaying = { ...prev };
//       Object.keys(newPlaying).forEach((key) => {
//         if (key !== index.toString() && newPlaying[key]) {
//           videoRefs.current[key]?.pause();
//           newPlaying[key] = false;
//         }
//       });
//       newPlaying[index] = !newPlaying[index];
//       return newPlaying;
//     });

//     if (playing[index]) {
//       video?.pause();
//     } else {
//       video?.play().catch((err) => console.error('Play error', err));
//     }

//     // Scroll selected card to center
//     const container = containerRef.current;
//     const card = videoRefs.current[index]?.parentElement;
//     if (container && card) {
//       const containerRect = container.getBoundingClientRect();
//       const cardRect = card.getBoundingClientRect();
//       const scrollLeft = container.scrollLeft + cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2);
//       container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="max-w-[1500px] mx-auto px-4 text-center" id="team">
//       <h2 className="text-white text-4xl md:text-5xl font-light mb-4">Real Stories, Real Impact</h2>
//       <p className="text-white text-opacity-70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
//         We help you transform your career, unlock new opportunities,<br />and achieve your full potential.
//       </p>
//       <div className="overflow-x-auto hide-scrollbar" ref={containerRef}>
//         <div className="flex gap-6 snap-x snap-mandatory px-2 pb-4">
//           {testimonials.map((t, index) => (
//             <div
//               key={index}
//               className={clsx(
//                 'flex-shrink-0 snap-start relative bg-black bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-500 transform backdrop-blur-md border border-white/10 shadow-lg',
//                 'hover:-translate-y-2 hover:shadow-2xl',
//                 index === 1 && 'hover:scale-105',
//                 'w-[280px] md:w-[380px] lg:w-[460px] md:h-[500px]'
//               )}
//             >
//               <video
//                 ref={(el) => (videoRefs.current[index] = el)}
//                 className={clsx(
//                   'w-full object-cover filter brightness-90 transition-all duration-300',
//                   index === 1 ? 'h-[680px]' : 'h-[580px]'
//                 )}
//                 poster={t.poster}
//                 playsInline
//                 controls={false}
//               >
//                 <source src={t.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white bg-gradient-to-t from-[#0f0f19fa] via-[#0f0f19e6] via-30% to-[#0f0f194d] to-70%">
//                 <div className="text-lg font-semibold text-white/95 mb-1">{t.name}</div>
//                 <div className="text-sm font-normal text-white/70">{t.position}</div>
//                 <div
//                   className="absolute bottom-6 right-6 w-11 h-11 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center cursor-pointer backdrop-blur-sm hover:scale-110 hover:bg-white/30 shadow-md"
//                   onClick={() => handlePlayPause(index)}
//                   data-playing={playing[index] || false}
//                 >
//                   {playing[index] ? (
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
//                       <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
//                     </svg>
//                   ) : (
//                     <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



export default function TestimonialsSection() {
  const videoRefs = useRef(testimonials.map(() => null));
  const [playing, setPlaying] = useState({});
  const containerRef = useRef(null);

  const handlePlayPause = (index) => {
    const video = videoRefs.current[index];
    setPlaying((prev) => {
      const newPlaying = { ...prev };
      Object.keys(newPlaying).forEach((key) => {
        if (key !== index.toString() && newPlaying[key]) {
          videoRefs.current[key]?.pause();
          newPlaying[key] = false;
        }
      });
      newPlaying[index] = !newPlaying[index];
      return newPlaying;
    });

    if (playing[index]) {
      video?.pause();
    } else {
      video?.play().catch((err) => console.error('Play error', err));
    }

    // Scroll selected card to center
    const container = containerRef.current;
    const card = videoRefs.current[index]?.parentElement;
    if (container && card) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const scrollLeft =
        container.scrollLeft +
        cardRect.left -
        containerRect.left -
        containerRect.width / 2 +
        cardRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[1500px] mx-auto px-4 text-center" id="team">
      <h2 className="text-white text-4xl md:text-5xl font-light mb-4">Real Stories, Real Impact</h2>
      <p className="text-white text-opacity-70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        We help you transform your career, unlock new opportunities,<br />and achieve your full potential.
      </p>
      <div className="overflow-x-auto hide-scrollbar" ref={containerRef}>
        <div className="flex gap-6 snap-x snap-mandatory px-2 pb-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={clsx(
                'flex-shrink-0 snap-start relative bg-black bg-opacity-70 rounded-2xl overflow-hidden transition-all duration-500 transform backdrop-blur-md border border-white/10 shadow-lg',
                'hover:-translate-y-2 hover:shadow-2xl',
                index === 1 && 'hover:scale-105',
                'w-[280px] md:w-[380px] lg:w-[460px]' // Width remains the same
              )}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className={clsx(
                  'w-full h-full object-cover filter brightness-90 transition-all duration-300' // Ensure video fully covers the container
                )}
                poster={t.poster}
                playsInline
                controls={false}
              >
                <source src={t.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white bg-gradient-to-t from-[#0f0f19fa] via-[#0f0f19e6] via-30% to-[#0f0f194d] to-70%">
                <div className="text-lg font-semibold text-white/95 mb-1">{t.name}</div>
                <div className="text-sm font-normal text-white/70">{t.position}</div>
                <div
                  className="absolute bottom-6 right-6 w-11 h-11 bg-white/20 border border-white/30 rounded-xl flex items-center justify-center cursor-pointer backdrop-blur-sm hover:scale-110 hover:bg-white/30 shadow-md"
                  onClick={() => handlePlayPause(index)}
                  data-playing={playing[index] || false}
                >
                  {playing[index] ? (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
