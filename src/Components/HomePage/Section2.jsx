	import React, { useState } from 'react';
	import {
	FaCalendarAlt,
	FaClock,
	FaLanguage,
	FaHandHoldingHeart,
	FaRegCalendarCheck,
	} from 'react-icons/fa';

	const cards = [
		{
			icon: <FaRegCalendarCheck className="text-3xl md:text-5xl text-[#3e7752] mr-6 md:mr-0 transition-transform duration-300 hover:scale-110" />,
			front: ['Start Date', '10th, July 2025'],
			back: ['Mark your calendar!', 'The workshop starts soon.'],
		},
		{
			icon: <FaClock className="text-3xl md:text-5xl text-[#3e7752] mr-6 md:mr-0 transition-transform duration-300 hover:scale-110" />,
			front: ['Duration', '21 Days'],
			back: ['Because it takes 3 weeks to build a habit.'],
		},
		{
			icon: <FaLanguage className="text-3xl md:text-5xl text-[#3e7752] mr-6 md:mr-0 transition-transform duration-300 hover:scale-110" />,
			front: ['Language', 'English'],
			back: ['So simple and fluent language that would be understandable.'],
		},
		{
			icon: <FaHandHoldingHeart className="text-3xl md:text-5xl text-[#3e7752] mr-6 md:mr-0 transition-transform duration-300 hover:scale-110" />,
			front: ['Contribution', '₦990 – ₦2,990'],
			back: ['Select the amount you would like to contribute for this workshop.'],
		},
	];

	const Section2 = () => {
	const [openIdx, setOpenIdx] = useState(null);
	const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

	return (
		<div className="-mt-20 bg-transparent px-5 md:px-10 xl:px-40 relative z-10">
			<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
			{cards.map((card, i) => {
				const isOpen = openIdx === i;
				return (
						<div
							key={i}
							className="perspective"
							onClick={() => toggle(i)}
						>
						<div
							className={` transition-transform duration-700 transform-style-preserve-3d ${
								isOpen ? 'rotate-y-180' : ''
							}`}
						>
							{/* Front Face */}
							<div className="bg-white rounded-xl shadow-md p-4 pl-6 md:pl-0 md:py-10 flex items-center md:flex-col md:items-center justify-start md:text-center backface-hidden">
								{card.icon}
								<div >
									<h4 className="mt-2 text-lg font-semibold">{card.front[0]}</h4>
									{card.front.slice(1).map((line, idx) => (
									<p key={idx} className="text-sm font-semibold text-[#3e7752]">
										{line}
									</p>
									))}
								</div>
							</div>
							{/* Back Face */}
							<div className="absolute inset-0 bg-[#3e7752] text-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center rotate-y-180 backface-hidden">
								{card.back.map((line, idx) => (
								<p key={idx} className="text-lg">
									{line}
								</p>
								))}
							</div>
						</div>
					</div>
				);
			})}
			</div>

			{/* flip-card CSS */}
			<style>{`
			.perspective {
				perspective: 1000px;
			}
			.transform-style-preserve-3d {
				transform-style: preserve-3d;
			}
			.backface-hidden {
				backface-visibility: hidden;
			}
			.rotate-y-180 {
				transform: rotateY(180deg);
			}
			`}</style>
		</div>
	);
	};

export default Section2;
