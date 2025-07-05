import React from 'react'
import hpImg from '../../assets/Images/hp.webp'
import dcImg from '../../assets/Images/dc.avif'
import comImg from '../../assets/Images/comImg.png'
import handImg from '../../assets/Images/hand.png'

   const Section4 = () => {
   const items = [
      {
         img: hpImg,
         title: 'What Happens After You Pay',
         points: [
         'You’ll be added to our private WhatsApp group immediately',
         'You’ll receive your onboarding guide, food list, and herb preparation',
         'Build a connection with people from different countries on the same journey',
         ],
      },
      {
         img: dcImg,
         title: 'Recorded Session Every Morning',
         points: [
         'Every session will be a fresh, inspiring, power-packed experience including deep knowledge, experiential activities, engaging stories, and practical tips',
         ],
      },
      {
         img: comImg,
         title: 'Community of Thousands of People',
         points: [
         'You will have a beautiful community of like-minded people from all across the world taking the challenge with you, to keep you motivated.',
         ],
      },
      {
         img: handImg,
         title: 'Handwritten Notes and Q&A’s For Every Session',
         points: [
         'During the 21 day, you will have acces to detailed notes for each session, hundreds of commonly asked questions & answers and additional resources for extra learning.',
         ],
      },
   ]

   return (
      <div>
         <style>
         {`
            @keyframes dance {
               0%, 100% {
               transform: translateY(0) rotate(0deg) scale(1);
               }
               25% {
               transform: translateY(-4px) rotate(-2deg) scale(1.05);
               }
               50% {
               transform: translateY(2px) rotate(2deg) scale(1.03);
               }
               75% {
               transform: translateY(-2px) rotate(-1deg) scale(1.04);
               }
            }
            .egg-shape {
               border-radius: 60% 60% 70% 70% / 60% 60% 40% 40%;
            }
            .animate-dance {
               animation: dance 4.5s ease-in-out infinite;
            }
         `}
         </style>

         <h1 className="text-center text-2xl md:text-3xl font-bold text-[#000000c9] mb-7">
         What’s Included?
         </h1>

         <div className="flex flex-col gap-6">
         {items.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow flex flex-col md:flex-row justify-center gap-4 md:gap-6">
               {/* Image Circle */}
               {/* Egg-shaped image container */}
               <div className="relative min-w-[130px] h-[130px] bg-[#d6f2df] flex items-center justify-center m-auto egg-shape overflow-hidden shadow-md">
                  <img
                     src={item.img}
                     alt={item.title}
                     className="w-12/13 h-12/13 object-contain animate-dance"
                  />
               </div>

               {/* Texts */}
               <div className="flex-1 space-y-1 text-center md:text-start">
                  <p className="text-base md:text-xl font-semibold text-[#000000c9]">
                     {item.title}
                  </p>
                  {item.points.map((text, i) => (
                     <p key={i} className="text-sm text-gray-700">{text}</p>
                  ))}
               </div>
            </div>
         ))}
         </div>
         <hr className='my-10 border-t outline-0 border-gray-400'/>
      </div>
   )
}

export default Section4
