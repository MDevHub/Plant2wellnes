      import React from 'react'
      import cleansingImg from '../../assets/Images/cleansing.webp'
      import foodImg from '../../assets/Images/food.webp'
      import movementImg from '../../assets/Images/movement.webp'
      import relationshipImg from '../../assets/Images/relationships.webp'
      import sleepImg from '../../assets/Images/sleep.webp'

      const habits = [
         {
            img: foodImg,
            title: 'Habit 1 - Food',
            desc: 'Get step-by-step guidance on your daily diet each day',
         },
         {
            img: movementImg,
            title: 'Habit 2 - Movement',
            desc: 'Clear structure and accountability of a consistent exercise routine that you can actually follow',
         },
         {
            img: cleansingImg,
            title: 'Habit 3 - Cleansing',
            desc: 'Sustainable lifestyle guidance of the top best way to taking care of your body',
         },
         {
            img: sleepImg,
            title: 'Habit 4 - Sleep',
            desc: 'Gain practical routines on how to reduce stress, by sleeping e.t.c...',
         },
         {
            img: relationshipImg,
            title: 'Habit 5 - Relationship',
            desc: 'Learn how to build strong relationships with people from connecting to friendship',
         },
      ]

      const Section6 = () => {
      return (
         <div className="bg-white rounded-xl shadow px-3 md:px-6 py-8 space-y-6">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold text-center text-[#3e7752] mb-10">
               What are the 7 Habits I will learn?
            </h1>

            {habits.map((habit, index) => (
               <div
                  key={index}
                  className="grid grid-cols-4 items-center gap-4"
               >
                  {/* Image Section */}
                  <div className="col-span-1 sm:h-[110px] sm:p-5 rounded-md"
                        style={{ boxShadow: '4px 0 6px -2px rgba(0,0,0,0.1)' }}
                     >
                     <img src={habit.img} alt={habit.title} className="w-[110px] h-[70px] rounded-md" />
                  </div>

                  {/* Text Section */}
                  <div className="col-span-3 p-1 sm:h-[110px] sm:p-5 shadow-none sm:shadow-md rounded-md">
                     <p className="text-sm sm:text-xl font-semibold text-[#3e7752]">{habit.title}</p>
                     <p className="text-xs sm:text-sm text-[#000000c9] mt-1">{habit.desc}</p>
                  </div>
               </div>
            ))}
         </div>
      )
   }

export default Section6
