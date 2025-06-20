import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi';
import { BiSend } from 'react-icons/bi';


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      {/* Top Bar: Brand + Socials */}
      <div className="bg-green-800 px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-lg md:text-xl">Plant2Wellness</span>
        <div className="flex gap-4">
          {[FiFacebook, FiInstagram, FiMail, FiPhone].map((Icon, i) => (
            <Link
              key={i}
              to="#"
              className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-green-900 transition"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>
      </div>

      {/* Main Section: Newsletter + Contact */}
      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* Newsletter */}
      <div>
         <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
         <p className="text-white/70 mb-4 text-sm">
            Stay informed about wellness tips, healthy recipes, and upcoming events from Plant2Wellness.
         </p>

         <form className="flex max-w-md w-full items-center relative group">
            {/* Email input with clean border */}
            <input
               type="email"
               placeholder="Your email address"
               className="flex-1 px-4 py-2 rounded-full text-green-900 border border-green-200 bg-white focus:outline-none placeholder:text-sm"
            />

            {/* Send Button with Telegram-style icon */}
            <button
               type="submit"
               className="ml-2 relative z-10 w-10 h-10 rounded-full bg-white text-green-800 flex items-center justify-center overflow-hidden group-hover:text-white transition-colors duration-300"
            >
            <span className="z-10 outline-none transform -rotate-30">
               <BiSend size={20} className='rotate-[-45]'/>
            </span>

            {/* Hover background animation */}
            <span className="outline-none absolute inset-0 bg-green-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 rounded-full z-0" />
            </button>
         </form>
      </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <FiPhone className="text-white" />
              </div>
              <span className="text-white/80">+234 810 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <FiMail className="text-white" />
              </div>
              <span className="text-white/80">hello@plant2wellness.com</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <FiMapPin className="text-white" />
              </div>
              <span className="text-white/80">Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <hr className="border-white/10 mx-6 md:mx-16" />
      <div className="text-center text-xs text-white/50 py-4">
        &copy; {new Date().getFullYear()} Plant2Wellness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
