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
			<nav className="fixed top-0 left-0 w-full bg-[#14532d] text-white px-6 md:px-12 py-3 flex justify-between items-center shadow-md z-50">
				
				{/* Logo */}
				<div>
					<img src={logo} alt="Plant2Wellness Logo" className="w-16 h-auto object-cover" />
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-10 items-center">
					<div className="flex gap-8 text-base font-sans font-medium">
						{navLinks.map(({ path, label }) => (
							<a
								key={path}
								href={path}
								onClick={() => setMenuOpen(false)}
								className="transition-colors duration-300 hover:text-[#d1a132]"
							>
								{label}
							</a>
						))}
					</div>

					{/* Store Location Button */}
					<a href="#store-location">
						<div className="relative group">
							<div className="flex items-center gap-2 px-5 py-2 border border-white rounded-full font-sans font-semibold text-base text-white transition-all duration-300 overflow-hidden relative group-hover:text-[#14532d]">
								<span className="relative z-10">Store Location</span>
								<span className="relative z-10 bg-white text-[#14532d] rounded-full p-1">
									<FiArrowRight size={16} />
								</span>
								<span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
							</div>
						</div>
					</a>
				</div>

				{/* Hamburger */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#14532d] shadow-md hover:bg-green-100 transition-all duration-300 "
					>
						{menuOpen ? <FiX size={22} /> : <HiOutlineMenuAlt3 size={24}/>}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden fixed top-16 left-0 w-full bg-[#14532d] text-white px-6 py-4 space-y-4 transition-all duration-500 ease-in-out z-40 ${
						menuOpen
						? 'opacity-100 scale-y-100 translate-y-0'
						: 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'
					}`}
				>
					{navLinks.map(({ path, label }, index) => (
						<a
							key={path}
							href={path}
							onClick={() => setMenuOpen(false)}
							className={`flex items-center gap-3 text-white font-medium text-base transform transition-all duration-700 ease-out hover:text-[#d1a132]
							translate-x-[-20px] opacity-0
							${menuOpen ? `translate-x-0 opacity-100 delay-${index * 75}` : ''}`}
						>
							<FiArrowRight className="text-[#d1a132]" />
							{label}
						</a>
					))}
				</div>
			</nav>

			{/* Spacer to prevent content from hiding behind fixed nav */}
			<div className="h-20 md:h-24"></div>
   	</>
	);
};

export default NavBar;
