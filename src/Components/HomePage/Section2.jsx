import React, { useEffect, useState } from 'react';
import Section2Img from '../../assets/Images/21dayImg.jpeg';

const Section2 = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const now = new Date();
    const target = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now

    const timer = setInterval(() => {
      const nowTime = new Date().getTime();
      const distance = target.getTime() - nowTime;

      if (distance < 0) return clearInterval(timer);

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        mins: Math.floor((distance / (1000 * 60)) % 60),
        secs: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="scroll-offset relative text-white py-20 px-6 md:px-16 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${Section2Img})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop"></div>

      {/* Countdown Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Countdown to the 21-Day Challenge</h2>

        <div className="flex justify-center gap-6 md:gap-10 text-white font-bold text-lg md:text-xl">
          {['Days', 'Hours', 'Mins', 'Secs'].map((label, i) => {
            const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][i];
            return (
              <div
                key={label}
                className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[60px]"
              >
                <div className="text-3xl">{val.toString().padStart(2, '0')}</div>
                <span className="text-sm uppercase tracking-wide">{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section2;
