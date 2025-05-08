import React from 'react';

const DiagonalMarquees = () => {
  return (
    <>
      <style>
        {`
          @keyframes marquee-diagonal-1 {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          @keyframes marquee-diagonal-2 {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }

          .animate-marquee-diagonal-1 {
            animation: marquee-diagonal-1 20s linear infinite;
          }

          .animate-marquee-diagonal-2 {
            animation: marquee-diagonal-2 25s linear infinite;
          }
        `}
      </style>

      <div className="relative -mt-[130px] w-full h-64 overflow-hidden bg-transparent
">
        {/* Marquee from Top-Left to Bottom-Right */}
        <div className="absolute -left-1/2 top-1/2 w-[200%] transform -rotate-5 z-10">
          <div className="w-[200%] flex animate-marquee-diagonal-1 whitespace-nowrap bg-white text-black font-bold text-xl h-14 items-center">
            {Array.from({ length: 20 }).map((_, i) => (
              <span className="px-6" key={`diag1-${i}`}>💼 HIRE ME 💼</span>
            ))}
          </div>
        </div>

        {/* Marquee from Bottom-Left to Top-Right */}
        <div className="absolute -left-1/2 top-1/2 w-[200%] transform rotate-5 z-20">
          <div className="w-[200%] flex animate-marquee-diagonal-2 whitespace-nowrap bg-lime-400 text-black font-bold text-xl h-14 items-center">
            {Array.from({ length: 20 }).map((_, i) => (
              <span className="px-6" key={`diag2-${i}`}>🔥 AVAILABLE FOR PROJECTS 🔥</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagonalMarquees;
