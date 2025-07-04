import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiArrowRight, FiX } from 'react-icons/fi';
import logo from '../../assets/Images/logo.png';

const navLinks = [
	{ path: '#home', label: 'Home' },
	{ path: '#about', label: 'About' },
	{ path: '#reviews', label: 'Reviews' },
	{ path: '#training', label: 'Training' },
	{ path: '#faqs', label: 'FAQs' }, 
];

const NavBar = () => {
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			<nav className="mb-0 fixed top-0 left-0 w-full bg-green-100 text-black font-normal py-4 flex justify-between px-5 md:px-10 xl:px-40 items-center z-50">
				
				{/* Logo */}
				<div>
					<img src={logo} alt="Plant2Wellness Logo" className="w-16 h-auto object-cover" />
				</div>

				{/* Desktop Menu */}
				{/* <div className="hidden md:flex gap-10 items-center"> */}
					<div className="hidden md:flex gap-14 text-base font-sans ">
						{navLinks.map(({ path, label }) => (
							<a
								key={path}
								href={path}
								onClick={() => setMenuOpen(false)}
								className="transition-colors duration-300 hover:text-green-600"
							>
								{label}
							</a>
						))}
					</div>

					{/* Store Location Button */}
					<a href="#store-location" className='hidden lg:block'>
						<div className="relative group overflow-hidden rounded-full border border-black">
							{/* Button Content */}
							<div className="flex items-center gap-2 px-12 py-2 font-sans text-base text-black hover:text-white hover:bg-green-800 transition-all duration-300  relative z-10">
								<span className="relative z-10">Register</span>
							</div>
						</div>

						{/* Inline animation styles */}
						<style>
							{`
								@keyframes shimmer {
								0% {
									transform: translateX(-100%) skewX(-12deg);
								}
								100% {
									transform: translateX(100%) skewX(-12deg);
								}
								}

								.animate-shimmer {
								animation: shimmer 2.5s linear infinite;
								}
							`}
						</style>
					</a>
				{/* </div> */}

				<div className="md:hidden relative group overflow-hidden rounded-full border border-black">
					{/* Button Content */}
					<div className="flex items-center gap-2 px-12 py-2 font-sans text-base text-black hover:text-white hover:bg-green-800 transition-all duration-300  relative z-10">
						<span className="relative z-10">Register</span>
					</div>
				</div>
			</nav>

			{/* Spacer to prevent content from hiding behind fixed nav */}
			<div className="h-20 md:h-24"></div>
   	</>
	);
};

export default NavBar;
