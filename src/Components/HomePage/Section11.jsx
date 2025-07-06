import React from 'react'
import host from '../../assets/Images/Host.jpg'

const Section11 = () => {
   return (
      <div className='bg-white rounded-xl shadow py-13 px-3 md:px-6'>
         <h1 className='text-center text-xl md:text-4xl font-semibold text-[#3e7752] '>Meet Your Coach</h1>

         <div>
            <img src={host} alt="" />
         </div>
         <h1>Ajoke <span>Certified Nutrition Coach, Herbal Formulator & Wellness Educator</span></h1>
         <p></p>
      </div>
   )
}

export default Section11