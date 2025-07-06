import React from 'react'
import { FaHeartbeat, FaPills, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { RiLeafLine } from 'react-icons/ri'
import { BiRefresh } from 'react-icons/bi'
import { MdOutlineSelfImprovement } from 'react-icons/md'

const Section8 = () => {
   return (
      <div className="bg-white rounded-xl shadow py-15 px-6">
         {/* Inline keyframes for bounce */}
         <style>
            {`
               @keyframes bounceIcon {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-8px); }
               }
               .icon-bounce {
                  animation: bounceIcon 2s ease-in-out infinite;
               }
            `}
         </style>

         <div className="space-y-15 text-center md:text-left">
            <h1 className="text-[16px] sm:text-2xl md:text-3xl font-semibold text-[#3e7752] flex items-center gap-2">
               This Course Is for You If You’re
					<FaCheckCircle className="text-[#3e7752] md:text-3xl" />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="div">
                  <FaHeartbeat className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Living with high blood pressure or high blood sugar and tired of managing symptoms with medication
                  </p>
               </div>
               <div className="div">
                  <FaPills className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Experiencing the frustrating side effects of drugs fatigue, dizziness, low libido, or more
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="div">
                  <RiLeafLine className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Seeking a safe, natural approach that gets to the root cause, not just the symptoms
                  </p>
               </div>
               <div className="div">
                  <FaShieldAlt className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Determined to prevent chronic illness before it takes control of your life
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="div">
                  <BiRefresh className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Someone who has tried other natural methods but didn’t get results
                  </p>
               </div>
               <div className="div">
                  <MdOutlineSelfImprovement className="text-[#3e7752] mx-auto text-4xl md:text-6xl icon-bounce" />
                  <p className="text-base sm:text-lg md:text-xl text-[#000000c9] mt-2">
                     Ready to take back control of your health using food, herbs, and lifestyle strategies that works
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section8
