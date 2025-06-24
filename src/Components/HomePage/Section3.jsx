import React, { useEffect } from 'react';
import { FaLeaf } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
	{
		title: "Lower blood & sugar pressure",
		details: [
			"Backed by food-based healing principles",
			"No side effects or harmful chemicals",
			"Sustainable lifestyle guidance",
		],
	},
	{
		title: "Daily support & healing strategy",
		details: [
			"Get step-by-step guidance each day",
			"Chat access for questions or help",
			"Clear structure and accountability",
		],
	},
	{
		title: "No drugs, no stress just results!",
		details: [
			"Completely natural protocol",
			"Stress-reducing routines included",
			"Results backed by real success stories",
		],
	},
];

const headingContainer = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const wordVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
	},
};

const Section3 = () => {
	useEffect(() => {
		AOS.init({ duration: 1200, once: true, easing: 'ease-out-cubic' });
	}, []);

	const heading = 'Benefits of the challenge';
	const words = heading.split(' ');

	return (
		<section id="about" className="scroll-offset px-4 sm:px-6 py-16 bg-green-50 text-green-900">

			{/* Heading - still Framer Motion */}
			<motion.h1
				className="text-2xl sm:text-3xl md:text-5xl text-center mb-6 md:mb-20 font-semibold text-green-700 flex flex-wrap justify-center gap-x-2"
				variants={headingContainer}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.4 }}
			>
				{words.map((word, index) => (
					<motion.span key={index} variants={wordVariant} className="inline-block">
						{word}
					</motion.span>
				))}
			</motion.h1>

			{/* Cards - now using AOS */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
				{features.map(({ title, details }, idx) => (
					<div
						key={idx}
						className="relative overflow-hidden group bg-white border border-green-100 shadow-md rounded-lg px-6 py-10 flex flex-col items-start hover:shadow-lg transition duration-300"
						data-aos="fade-up"
						data-aos-delay={idx * 150} // stagger manually using delay
					>
						{/* Slide-up BG on hover */}
						<div className="absolute inset-0 bg-green-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />

						{/* Content */}
						<div className="relative z-10 w-full space-y-6">
							{/* Leaf */}
							<div className="text-green-700 text-4xl">
								<FaLeaf />
							</div>

							{/* Card Title */}
							<p className="font-semibold text-xl">{title}</p>

							<hr className="border-green-200 w-full" />

							{/* Card Details */}
							<div className="space-y-3">
								{details.map((detail, i) => (
									<p
										key={i}
										className="flex items-center gap-2 text-sm sm:text-lg text-green-800"
									>
										<FiCheck className="text-green-700" />
										{detail}
									</p>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Section3;
