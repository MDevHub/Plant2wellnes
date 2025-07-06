import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
   {
      question: "Where is it taking place?",
      answer:
         "Online, fully guided on WhatsApp.",
   },
   {
      question: "Who shouldn't join this challenge?",
      answer:
         "You’ll get recordings and flexible daily tasks.",
   },
   {
      question: "What if I don't have access to recommended herbs?",
      answer:
         "You’ll get alternatives locally accessible ingredients.",
   },
   {
      question: "What support is available during the challenge?",
      answer:
         "No, but you’ll get a 30% discount on any product you choose to buy.",
   },
];

const Section10 = () => {
   const [openIndex, setOpenIndex] = useState(null);
   const contentRefs = useRef([]);

   const toggle = (index) => {
         setOpenIndex(openIndex === index ? null : index);
   };

return (
   <div
      id="faqs"
      className="scroll-offset w-full bg-white shadow py-12 px-3 md:px-6 rounded-xl">
      <h2 className="shimmer-text inline-block left-[45%] text-2xl md:text-3xl font-bold text-[#3e7752] text-center mb-10">
         FAQ<span className='text-lg md:text-xl'>S</span>
      </h2>

            <div className="max-w-4xl mx-auto space-y-4">
               {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

               return (
                  <div
                     key={index}
                     className="bg-white rounded-md shadow-md border border-green-100 transition-all duration-300"
                  >
                     {/* Header */}
                     <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between py-5 px-3 text-left text-[#3e7752] font-medium text-sm md:text-lg hover:bg-green-50 transition-colors duration-300"
                     >
                        <span>{faq.question}</span>
                        {isOpen ? (
                           <FaChevronUp className="text-[#3e7752] transition-transform duration-300" />
                        ) : (
                           <FaChevronDown className="text-[#3e7752] transition-transform duration-300" />
                        )}
                     </button>

                     {/* Animated Answer Section */}
                     <div
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{
                        maxHeight: isOpen
                           ? `${contentRefs.current[index]?.scrollHeight}px`
                           : '0px',
                        }}
                        className="overflow-hidden transition-all duration-500 ease-in-out px-3 text-[#3e7752] text-[16px]"
                     >
                        <div className={`py-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                           {faq.answer}
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default Section10;
