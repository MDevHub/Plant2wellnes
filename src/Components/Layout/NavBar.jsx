import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FiArrowRight, FiX, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/Images/logo.png';

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	const navLinks = [
		{ path: '/', label: 'Home' },
		{ path: '/about', label: 'About' },
		{ path: '/faqs', label: 'FAQs' },
		{ path: '/reviews', label: 'Reviews' },
		{ path: '/training', label: 'Training' },
	];

	return (
		<>
			<nav className="bg-green-900 text-white px-6 md:px-12 py-2 flex justify-between items-center relative z-20">
				{/* Logo */}
				<div>
					<img
						src={logo}
						alt="Plant2Wellness Logo"
						className="w-13 md:w-18 h-auto object-cover object-center"
					/>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-10 items-center">
					<div className="flex gap-8 text-base font-sans font-medium">
						{navLinks.map(({ path, label }) => (
							<Link
								key={path}
								to={path}
								className="transition-colors duration-500 hover:text-green-600"
							>
								{label}
							</Link>
						))}
					</div>

					{/* Store Location Button */}
					<Link to="/store-location">
						<div className="relative group">
							<div className="flex items-center gap-2 px-5 py-2 border border-white outline-none text-white rounded-full font-sans font-semibold text-base overflow-hidden relative z-10 transition-all duration-500 group-hover:text-green-800">
								<span className="relative z-10">Store Location</span>
								<span className="relative z-10 bg-white text-green-800 rounded-full p-1">
									<FiArrowRight size={16} />
								</span>
								<span className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
							</div>
						</div>
					</Link>
				</div>

				{/* Hamburger Button */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-900 shadow-md hover:bg-green-100 transition-all duration-300"
					>
						{menuOpen ? <FiX size={22} /> : <HiOutlineMenuAlt3 size={24} />}
					</button>
				</div>

				{/* Mobile Dropdown Menu */}
				<div
					className={`md:hidden absolute top-full left-0 w-full bg-green-900 text-white px-6 py-4 space-y-4 transition-all duration-500 ease-in-out origin-top z-30 ${
						menuOpen
							? 'opacity-100 scale-y-100 translate-y-0'
							: 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'
					}`}
				>
					{navLinks.map(({ path, label }, index) => (
						<Link
							key={path}
							to={path}
							onClick={() => setMenuOpen(false)}
							className={`flex items-center gap-3 text-white font-medium text-base transform transition-all duration-700 ease-out hover:text-[#D1A132]
								translate-x-[-20px] opacity-0
								${menuOpen ? `translate-x-0 opacity-100 delay-${index * 100}` : ''}`}
						>
							<span
								className={`transform transition-all duration-500 ease-in-out ${
									menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
								}`}
							>
								<FiArrowRight className="text-[#D1A132]" />
							</span>
							{label}
						</Link>
					))}
				</div>
			</nav>
		</>
	);
};

export default NavBar;
