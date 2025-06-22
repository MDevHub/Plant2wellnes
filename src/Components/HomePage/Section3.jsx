import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';

const Section3 = () => {
   const features = [
      {
         title: "Lower blood & sugar pressure",
         details: [
            "Backed by food-based healing principles",
            "No side effects or harmful chemicals",
            "Sustainable lifestyle guidance",
         ],
      },
      {
         title: "Daily support & healing strategy",
         details: [
            "Get step-by-step guidance each day",
            "Chat access for questions or help",
            "Clear structure and accountability",
         ],
      },
      {
         title: "No drugs, no stress just results!",
         details: [
            "Completely natural protocol",
            "Stress-reducing routines included",
            "Results backed by real success stories",
         ],
      },
   ];

   return (
      <div 
         id="about"
         className="scroll-offset px-2 md:px-6 py-16 md:py-30 bg-green-50 text-green-900"
      >
         <h1 className='text-2xl sm:text-3xl md:text-5xl text-center mb-6 md:mb-20 font-bold'>About</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map(({ title, details }, idx) => (
               <div
                  key={idx}
                  className="relative overflow-hidden group bg-white border border-green-100 gap-8 shadow-md rounded-lg px-6 py-10 flex flex-col items-start hover:shadow-lg transition duration-300"
               >
                  {/* Slide-up BG layer */}
                  <div className="absolute inset-0 bg-green-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

                  {/* Content */}
                  <div className="relative z-10 w-full space-y-6">
                     {/* Leaf Icon */}
                     <div className="text-green-700 text-4xl">
                        <FaLeaf />
                     </div>

                     {/* Main Heading */}
                     <p className="font-semibold text-xl ">{title}</p>

                     <hr className="border-green-200 w-full" />

                     {/* Details with Check Icons */}
                     <div className="space-y-3">
                        {details.map((detail, i) => (
                           <p
                              key={i}
                              className="flex items-center gap-2 text-sm sm:text-lg text-green-800"
                           >
                              <FiCheck className="text-green-700 items-center" />
                              {detail}
                           </p>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Section3;
