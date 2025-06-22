import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import bonusIMG from '../../assets/Images/bonusImg.jpg';

const bonuses = [
"Free Guide: “7 Things to Do Before the Challenge”",
"Up to ₦50,000 worth of free herbal products for 5 participants",
"30% off herbal kits for all participants"
];

const Section5 = () => {
return (
   <div 
      id="training"
      className="scroll-offset w-full flex flex-col md:flex-row"
   >
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
      <img
            src={bonusIMG}
            alt="Bonus"
            className="w-full h-full object-cover animate-pulse"
         />
      </div>

      {/* Right Side - Bonuses */}
      <div className="md:w-1/2 w-full bg-green-50 py-12 px-6 md:px-10 flex items-center">
         <div className="w-full max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-8">🎁 Bonus Offers</h2>
            <ul className="space-y-6 text-left">
               {bonuses.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white shadow-sm p-4 rounded-md">
                     <FaCheckCircle className="text-[#D1A132] text-xl mt-1" />
                     <p className="text-green-900 font-medium text-lg">{item}</p>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   </div>
);
};

export default Section5;
