import React, { useEffect, useRef, useState } from 'react';
import Section1 from './HomePage/Section1';
import Section2 from './HomePage/Section2';
import Section3 from './HomePage/Section3';
import Section4 from './HomePage/Section4';
import {
FaCalendarAlt,
FaClock,
FaVideo,
FaMoneyBillWave,
FaCheckCircle,
} from 'react-icons/fa';
import Section5 from './HomePage/Section5';

   const NAVBAR_HEIGHT = 112; // 7rem

   const MainPage = () => {
   const sidebarRef = useRef(null);
   const section3Ref = useRef(null);
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (!sidebarRef.current || !section3Ref.current) return;

         const section3Top = section3Ref.current.getBoundingClientRect().top;
         // Only fix the sidebar when Section3 scrolls past the top of the navbar
         setIsFixed(section3Top <= NAVBAR_HEIGHT);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // initial check

      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <>
         {/* Full-width sections */}
         <section className="w-full bg-gray-100">
            <Section1 />
         </section>
         <section className="w-full">
            <Section2 />
         </section>

         {/* Grid layout from Section3 */}
         <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 px-3 md:px-10 xl:px-40 pt-20">
            {/* Left content */}
            <div className="space-y-10 lg:col-span-2">
               <section ref={section3Ref} className="">
                  <Section3 />
               </section>
               <section className="">
                  <Section4 />
               </section>
               <section className="">
                  <Section5 />
               </section>
            </div>

            {/* Right sidebar */}
            <aside className="relative hidden lg:block lg:col-span-1">
               {/* Reserve space to prevent jump */}
               <div style={{ height: isFixed && sidebarRef.current ? `${sidebarRef.current.offsetHeight}px` : 'auto' }}>
                  <div
                        ref={sidebarRef}
                        className={`bg-white text-black rounded-xl shadow-lg p-6 space-y-4 z-50 transition-all duration-300 ${
                           isFixed ? 'fixed top-[7rem] w-[300px]' : 'relative w-full'
                     }`}
                     style={{ width: isFixed ? '320px' : 'auto' }}
                     >
                     <h2 className="text-[#3e7752] text-xl font-bold">
                        Ultimate Blood & Sugar Challenge
                     </h2>
                     <hr className="border-t outline-0 border-gray-400" />

                     {/* Info */}
                     <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2">
                           <FaCalendarAlt className="text-[#3e7752]" /> 10th July - 31st July 2025
                        </p>
                        <p className="flex items-center gap-2">
                           <FaClock className="text-[#3e7752]" /> Multiple time slots available
                        </p>
                        <p className="flex items-center gap-2">
                           <FaVideo className="text-[#3e7752]" /> Recording available: 24 hours
                        </p>
                        <p className="flex items-center gap-2">
                           <FaMoneyBillWave className="text-[#3e7752]" /> Contribution: As said by the host
                        </p>
                     </div>

                     {/* CTA */}
                     <button className="relative overflow-hidden bg-[#3e7752] text-white w-full py-2 rounded-full mt-2">
                        <span className="absolute inset-0 bg-white/10 blur-sm animate-pulse"></span>
                        <span className="relative z-10">Register Now</span>
                     </button>

                     {/* Benefits */}
                     <div className="space-y-2 mt-4">
                        <p className="flex items-center gap-2">
                           <FaCheckCircle className="text-[#3e7752]" /> Fully Energized and Focussed
                        </p>
                        <p className="flex items-center gap-2">
                           <FaCheckCircle className="text-[#3e7752]" /> Clear-minded with optimal weight
                        </p>
                        <p className="flex items-center gap-2">
                           <FaCheckCircle className="text-[#3e7752]" /> Full guide on diet and Hopeful.
                        </p>
                     </div>

                     {/* Highlight */}
                     <div className="bg-[#4f8a63] text-white text-center text-sm py-2 px-4 rounded-full mt-4">
                        1,000+ people already joined
                     </div>
                  </div>
               </div>
            </aside>
         </div>
      </>
   );
};

export default MainPage;
