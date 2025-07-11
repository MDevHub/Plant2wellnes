import React from 'react'
import cramps from '../../assets/Images/hunger.jpg'
import herbs from '../../assets/Images/herbs.webp'
import community from '../../assets/Images/community.jpg'
import alone from '../../assets/Images/alone.webp'

const Section9 = () => {
   const reasons = [
      { img: cramps, text: 'No hunger games, No complicated supplements.' },
      { img: herbs, text: 'Local foods, Natural herbs, Simple lifestyle shifts.' },
      { img: community, text: 'Full guidance, community support, and follow-up.' },
      { img: alone, text: 'You’re not doing this alone.' },
   ]

   return (
      <div id='training' 
         className="bg-white rounded-xl shadow py-12 px-6 space-y-6">
         <h1 className="text-xl md:text-3xl font-semibold text-[#3e7752]">
            Why This Challenge is Different?
         </h1>
         <p className="text-[15px] md:text-lg text-[#000000c9] italic">
            This is not about deprivation, You will eat, You will enjoy your meals,{' '}
            <span className="text-[#3e7752]">
               and you will learn how to choose healing over harm.
            </span>
         </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {reasons.map((item, index) => (
               <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div
                     className={`relative w-[130px] h-[160px] overflow-hidden transition-transform duration-500 hover:scale-110 egg-mask ${
                     index === 0 || index === 3 ? 'bg-[#d6f2df]' : ''
                     }`}
                  >
                     <img
                        src={item.img}
                        alt={`reason-${index}`}
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <p className="text-sm md:text-base text-[#000000c9]">{item.text}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Section9
