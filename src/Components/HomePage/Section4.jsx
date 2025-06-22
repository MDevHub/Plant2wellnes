import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLeaf } from 'react-icons/fa';


import author1 from '../../assets/Images/author-1.jpg';
import author2 from '../../assets/Images/author-2.jpg';
import author3 from '../../assets/Images/author-3.jpg';
import author4 from '../../assets/Images/author-4.jpg';

const testimonials = [
   {
      img: author1,
      name: 'Aishat Mustapha',
      text: "This service completely exceeded my expectations. The team was professional, responsive, and the results were outstanding!"
   },
   {
      img: author2,
      name: 'Kanu Ali',
      text: "An amazing experience from start to finish. The attention to detail and customer support was exceptional. I'm incredibly pleased with the outcome!"
   },
   {
      img: author3,
      name: 'Alice Williams',
      text: "Absolutely fantastic service! They went above and beyond to make sure everything was perfect. The final product was better than I could have imagined."
   },
   {
      img: author4,
      name: 'David Brown',
      text: "I am so pleased with the quick turnaround and excellent communication. The team really cares about customer satisfaction. Highly recommended!"
   }
];

const Section4 = () => {
  const sliderRef = useRef(null);

  const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      draggable: true
  };

   return (
      <div 
         id="reviews"
         className="scroll-offset flex flex-col lg:flex-row items-start justify-between bg-green-950 px-2 md:px-6 py-10 lg:py-20 lg:px-20 gap-10 transition-all duration-500"
      >
         {/* Left Side */}
         <div className="lg:w-1/3">
            <p className='font-serif flex items-center gap-4 font-semibold text-white mb-4 text-xl md:text-3xl'>
                <div className="text-green-700 text-2xl"><FaLeaf /></div>
               TESTIMONIALS
            </p>
            <p className="text-xl md:text-3xl font-bold text-white">Hear what our customers say</p>
            <p className='mt-8 text-white italic'> 4.5 Based On 500+ Review</p>
            <div className="flex space-x-1">
               {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-green-500 text-xl italic">★</span>
               ))}
            </div>
         </div>

         {/* Right Side */}
         <div className="lg:w-2/3 w-full relative">
            {/* Fixed arrows outside the slider content */}
            <button
               onClick={() => sliderRef.current.slickPrev()}
               className="absolute top-44 sm:top-30 lg:top-40 right-16 z-10 w-8 h-8 border border-green-600 text-green-600 rounded flex items-center justify-center hover:bg-green-100"
            >
               &#10094;
            </button>
            <button
               onClick={() => sliderRef.current.slickNext()}
               className="absolute top-44 sm:top-30 lg:top-40 right-4 z-10 w-8 h-8 border border-green-600 text-green-600 rounded flex items-center justify-center hover:bg-green-100"
            >
               &#10095;
            </button>

            {/* Slider */}
            <Slider ref={sliderRef} {...settings}>
               {testimonials.map((item, idx) => (
                  <div key={idx} className="bg-transparent lg:pl-7">
                     <div className="flex space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                           <span key={i} className="text-green-400 italic text-lg">★</span>
                        ))}
                     </div>
                     <p className="italic text-white mb-4">"{item.text}"</p>
                     <hr className="border-t border-green-50 mb-4" />
                     <div className="flex items-center space-x-4">
                        <img src={item.img} alt={item.name} className="w-14 h-14 rounded-full object-cover" />
                        <p className="font-semibold text-white">{item.name}</p>
                     </div>
                  </div>
               ))}
            </Slider>
         </div>
      </div>
  );
};

export default Section4;
