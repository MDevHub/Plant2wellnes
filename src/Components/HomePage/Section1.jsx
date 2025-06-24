import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const headingText = '21-Day Ultimate Challenge to Reverse High Blood Pressure and Sugar Naturally';
const words = headingText.split(' ');

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1], delay: 1 },
  },
};

const Section1 = () => {
  return (
    <section
      id="home"
      className="scroll-offset relative bg-green-50 text-green-800 px-4 sm:px-6 md:px-12 py-16 sm:py-20 md:py-24 min-h-[85vh] flex items-center justify-center text-center"
    >
      <motion.div
        className="max-w-4xl mx-auto space-y-6 sm:space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Heading - word by word */}
        <motion.h1
          className="font-bold text-2xl sm:text-3xl md:text-5xl leading-snug flex flex-wrap justify-center gap-x-2"
          variants={containerVariants}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Divider with Leaf - slides up */}
        <motion.div className="flex items-center gap-4 w-full max-w-xs mx-auto" variants={slideUpVariants}>
          <span className="flex-grow border-t border-[#D1A132]"></span>
          <FaLeaf className="text-[#D1A132] text-2xl" />
          <span className="flex-grow border-t border-[#D1A132]"></span>
        </motion.div>

        {/* Subtext - slides up */}
        <motion.p
          className="text-green-800 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          variants={slideUpVariants}
        >
          A guided journey to detox, nourish, and heal using food, herbs, and lifestyle.
        </motion.p>

        {/* CTA Button - slides up */}
        <motion.div variants={buttonVariants}>
          <Link to="/" className="relative group inline-block">
            <div className="flex items-center gap-2 px-6 py-2 border border-green-950 rounded-full font-sans font-semibold text-base text-green-800 transition-all duration-300 overflow-hidden relative group-hover:text-white">
              <span className="relative z-10">Join the challenge Now</span>
              <span className="absolute inset-0 bg-green-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section1;
