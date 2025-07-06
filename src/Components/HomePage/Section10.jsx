import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
   {
      question: "Who is this challenge for?",
      answer:
         "This challenge is for you if you have high blood sugar, pre diabetes, diabetes, high blood pressure, high cholesterol or you are predisposed to anyone of the health conditions mentioned above, and you simply want to prevent these before the onset.",
   },
   {
      question: "Who shouldn't join this challenge?",
      answer:
         "Don’t bother to join if you’re not ready to be free from these health conditions or you are okay with just managing your health with continues use of drugs.",
   },
   {
      question: "What if I don't have access to recommended herbs?",
      answer:
         "All the herbs, spices, vegetables and fruits we are recommending can be sourced locally around you, if you’re not in Nigeria we will give you substitutes. You can also get your herbs supplies from our farm at a special discount.",
   },
   {
      question: "What support is available during the challenge?",
      answer:
         "You will have access to dedicated WhatsApp group for support where you can get a direct communication with me.",
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
      className="scroll-offset w-full bg-green-50 py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-green-900 text-center mb-10">
         Frequently Asked Questions
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
                        className="w-full flex items-center justify-between py-5 px-2 text-left text-green-800 font-medium text-lg hover:bg-green-100 transition-colors duration-300"
                     >
                        <span>{faq.question}</span>
                        {isOpen ? (
                           <FaChevronUp className="text-green-700 transition-transform duration-300" />
                        ) : (
                           <FaChevronDown className="text-green-700 transition-transform duration-300" />
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
                        className="overflow-hidden transition-all duration-500 ease-in-out px-5 text-green-900 text-[16px]"
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
