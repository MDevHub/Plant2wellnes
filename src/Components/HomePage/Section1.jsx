import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const headingLines = [
  '21-Day Ultimate Challenge to',
  'Reverse High Blood Pressure and',
  'Sugar Naturally'
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4
    }
  }
};

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
};

const Section1 = () => {
return (
   <section 
      id="home"
      className="scroll-offset relative bg-green-50 text-[#2f855a] px-6 md:px-12 py-20 min-h-[85vh] flex items-center justify-center text-center"
   >
      <div className="max-w-4xl mx-auto space-y-6">

      {/* Animated Heading */}
      <motion.h1
         className="font-bold text-2xl sm:text-3xl md:text-5xl leading-snug space-y-2"
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         {headingLines.map((line, index) => (
            <motion.span key={index} className="block" variants={lineVariants}>
            {line}
            </motion.span>
         ))}
      </motion.h1>

      {/* Divider with Leaf */}
      <div className="flex items-center gap-4 w-full max-w-xs mx-auto">
         <span className="flex-grow border-t border-[#D1A132]"></span>
            <FaLeaf className="text-[#D1A132] text-2xl" />
         <span className="flex-grow border-t border-[#D1A132]"></span>
      </div>

      {/* Subtext */}
      <p className="text-green-800 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
         A guided journey to detox, nourish, and heal using food, herbs, and lifestyle.
      </p>

      {/* CTA Button */}
      <Link to="/store-location">
         <div className="relative group inline-block">
            <div className="flex items-center gap-2 px-5 py-2 border border-green-950 rounded-full font-sans font-semibold text-base text-green-800 transition-all duration-300 overflow-hidden relative group-hover:text-white">
               <span className="relative z-10">Join the challenge Now</span>
            <span className="absolute inset-0 bg-green-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
            </div>
         </div>
      </Link>
      
      </div>   
   </section>
  );
};

export default Section1;
