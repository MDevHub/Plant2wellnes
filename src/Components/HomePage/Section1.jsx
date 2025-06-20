import React from 'react';
import HeroImg from '../../assets/Images/hero-image.png';
import { FiCheck } from 'react-icons/fi';

const Section1 = () => {
  return (
    <section className="relative overflow-hidden bg-green-50 text-green-900 px-6 md:px-12 py-16 md:py-24">
      <div className="relative flex flex-col lg:flex-row justify-between gap-12 mx-auto">
        {/* Text Block */}
        <div className="max-w-xl z-10">
          <p className="font-medium text-sm uppercase tracking-wide mb-3 text-green-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            The Natural Reversal Blueprint
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-green-800 text-4xl">21-Day</span> <br />Ultimate Challenge
          </h1>

          {/* Marked Heading */}
          <div className="flex items-start gap-3 mb-4">
            <div className="min-w-5 min-h-5 flex items-center justify-center rounded-full bg-green-700 text-white mt-1">
              <FiCheck size={16} />
            </div>
            <h2 className="text-lg md:text-2xl font-semibold text-green-900">
              Reverse High Blood Pressure & Sugar Naturally
            </h2>
          </div>

          {/* Marked Paragraph */}
          <div className="flex items-start gap-3 mb-6">
            <div className="min-w-5 min-h-5 flex items-center justify-center rounded-full bg-green-700 text-white mt-1">
              <FiCheck size={16} />
            </div>
            <p className="text-base md:text-lg text-green-800 leading-relaxed">
              A guided journey to detox, nourish, and heal using food, herbs, and lifestyle.
            </p>
          </div>

          {/* Button */}
          <button className="relative inline-flex items-center overflow-hidden px-6 py-3 rounded-full font-semibold border bg-green-800 text-white group hover:text-green-800 transition-all duration-300 mb-8">
            <span className="relative z-10">Join the Challenge</span>
            <span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-[50%] relative z-0 items-center mx-auto">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain bottom-0 right-0 md:static"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
