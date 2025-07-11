import React from 'react'
import host from '../../assets/Images/Host.jpg'

const Section11 = () => {
  return (
    <div className="bg-white rounded-xl shadow-md py-12 px-4 md:px-10 space-y-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-[#3e7752]">
        Meet Your Coach
      </h1>

      {/* Image */}
      <div className="flex justify-center">
        <div className="group w-full h-auto md:w-full md:h-auto rounded-xl overflow-hidden border-4 border-[#d6f2df] shadow-lg">
          <img src={host} alt="Ajoke" className="group-hover:scale-110 transition-all ease-in-out duration-1000 w-full h-full object-cover" />
        </div>
      </div>

      {/* Name + Title */}
      <div className="text-center space-y-1">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Ajoke
        </h2>
        <p className="text-sm md:text-base text-[#3e7752] font-medium">
          Certified Nutrition Coach, Herbal Formulator & Wellness Educator
        </p>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-[#000000c9] text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
        <p>
          Ajoke combines African herbal wisdom, food-based healing, and coaching to help people reverse chronic health conditions naturally. Her methods are practical, powerful, and people-centered.
        </p>
        <p>
          Ajoke is a certified Nutrition Coach, trained by the internationally accredited Food Matters Institute, renowned for its comprehensive online nutrition programs based in Australia.
        </p>
        <p>
          She is also a proud member of the Confident Herbalist Tribe from the Healing Harvest Homestead School of Botanical Arts & Sciences (HHH SOBAS), located in Orofino, Idaho, USA.
        </p>
        <p>
          Furthering her commitment to natural health, Ajoke studied at the Green Centre Institute of Natural Medicine in Lagos, Nigeria.
        </p>
        <p>
          With this diverse background, Ajoke brings a unique blend of nutritional science, herbal wisdom, and sustainable living to her coaching, empowering clients to achieve optimal health naturally.
        </p>
      </div>
    </div>
  )
}

export default Section11
