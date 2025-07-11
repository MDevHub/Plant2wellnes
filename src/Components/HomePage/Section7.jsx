   import React from 'react'
   import review1 from '../../assets/Images/testimonial1.jpg'
   import review2 from '../../assets/Images/testimonial2.jpg'
   import review3 from '../../assets/Images/testimonial3.jpg'
   import man1 from '../../assets/Images/author-1.jpg'
   import man2 from '../../assets/Images/author-2.jpg'
   import man3 from '../../assets/Images/author-4.jpg'
   import { FaStar } from 'react-icons/fa'

   const Section7 = () => {
   return (
      <div id='reviews' 
         className="bg-white rounded-xl p-5">
         {/* Title */}
         <div className="py-10 space-y-3">
            <h1 className="text-2xl md:text-3xl text-[#3e7752] font-semibold text-center">
               Review from People
            </h1>
            <p className="text-sm sm:text-[14px] text-[#000000c9] text-center font-semibold">
               1,000+ people have already completed the 21 Day Ultimate Health Challenge
            </p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Highlighted Review */}
            <div className="bg-[#f5faf7] p-3 rounded-xl flex flex-col items-center text-center space-y-4 shadow">
               <p className="bg-white shimmer-text px-3 py-1 rounded-full inline-block">
                  Highlighted Review
               </p>
               <img src={man1} alt="highlighted" className="w-24 h-24 object-cover rounded-full border" />
               <p className="text-[#000000c9] font-semibold">Boluwatife 32, Lagos</p>
               <div className="flex justify-center text-yellow-400 text-lg">
                  {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                  ))}
               </div>
               <p className="text-sm text-[#000000da] leading-relaxed">
                  I was on medication for over 23 years... I had series of symptoms and my doctor said I just have to endure it, I thought it was my fate. But after joining Ajoke's program, I stopped my medications within one month. And my numbers? Perfect. I now sleep better and wake up energized. I wish I knew all these earlier.
               </p>
            </div>

               {/* Other Reviews */}
               <div className="lg:col-span-2 flex flex-col gap-6">
                  {[{ img: man2, name: 'Kasali Adeyemi', age: '22, Ogun State', reviewImg: review1 },
                     { img: man1, name: 'Aisha Bello', age: '29, Abuja', reviewImg: review2 },
                     { img: man3, name: 'John Okafor', age: '35, Enugu', reviewImg: review3 }
                  ].map((item, i) => (
                  <div key={i} className="bg-[#fdfdfd] p-4 rounded-xl shadow-md space-y-3">
                     {/* Top Section */}
                     <div className="flex items-center gap-4">
                        <div className="min-w-[60px] min-h-[60px] rounded-full overflow-hidden bg-[#d6f2df] flex items-center justify-center">
                           <img
                           src={item.img}
                           alt="user"
                           className="w-[60px] h-[60px] object-cover rounded-full hover:scale-105 transition-transform duration-300"
                           />
                        </div>
                     <div>
                     <div className="flex text-yellow-400 text-sm">
                        {[...Array(4)].map((_, j) => (
                           <FaStar key={j} />
                        ))}
                     </div>
                     <p className="text-[#3e7752] font-bold">{item.name}</p>
                     <p className="text-[#000000c9] text-sm">{item.age}</p>
                  </div>
               </div>
               {/* Review Image */}
               <div className="overflow-hidden rounded-lg max-w-full">
                  <img
                     src={item.reviewImg}
                     alt="review"
                     className="rounded-lg w-full max-h-[300px] object-cover hover:scale-105 transition-transform duration-300"
                  />
               </div>
               </div>
            ))}
         </div>
         </div>
      </div>
   )
   }

   export default Section7
