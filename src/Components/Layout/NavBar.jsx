import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiArrowRight, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../assets/Images/logo.png';

const navLinks = [
  { path: 'home', label: 'Home' },
  { path: 'about', label: 'About' },
  { path: 'reviews', label: 'Reviews' },
  { path: 'training', label: 'Training' },
  { path: 'faqs', label: 'FAQs' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="mb-0 fixed top-0 left-0 w-full bg-green-50 text-black font-normal py-4 flex justify-between px-5 md:px-10 xl:px-40 items-center z-50">
        
        {/* Logo */}
        <div>
          <img src={logo} alt="Plant2Wellness Logo" className="w-16 h-auto object-cover" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-14 text-base font-sans">
          {navLinks.map(({ path, label }) => (
            <ScrollLink
              key={path}
              to={path}
              smooth={true}
              offset={-100}
              duration={600}
              spy={true}
              activeClass="text-green-600"
              className="cursor-pointer transition-colors duration-300 hover:text-green-600"
            >
              {label}
            </ScrollLink>
          ))}
        </div>

        {/* Register Button */}
        <ScrollLink to="" smooth={true} offset={-100} duration={600}>
          <div className="hidden lg:block relative group overflow-hidden rounded-full border border-black cursor-pointer">
            <div className="flex items-center gap-2 px-12 py-2 font-sans text-base text-black hover:text-white hover:bg-green-800 transition-all duration-300 relative z-10">
              <span className="relative z-10">Register</span>
            </div>
          </div>
        </ScrollLink>

        {/* Mobile Register Button */}
        <ScrollLink to="" smooth={true} offset={-100} duration={900}>
          <div className="md:hidden relative group overflow-hidden rounded-full border border-black cursor-pointer">
            <div className="flex items-center gap-2 px-12 py-2 font-sans text-base text-black hover:text-white hover:bg-green-800 transition-all duration-300 relative z-10">
              <span className="relative z-10">Register</span>
            </div>
          </div>
        </ScrollLink>
      </nav>

      {/* Spacer */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default NavBar;
