	import React from 'react';
	import { Link } from 'react-router-dom';
	import { motion } from 'framer-motion';

	// Animation Variants
	const fadeUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	};

	const container = {
		hidden: {},
		visible: {
			transition: {
			staggerChildren: 0.07,
			delayChildren: 0.2,
			},
		},
	};

	const Section1 = () => {
		return (
			<div className="relative mt-0 bg-green-50 py-16 px-3 md:px-10 xl:px-40 rounded-b-[80px] md:rounded-none pb-40">
			<motion.div
				className="max-w-3xl mx-auto text-center space-y-5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={container}
			>
			<motion.h1
				className="text-black leading-snug font-semibold text-[18px] sm:text-2xl md:text-3xl"
				variants={container}
				>
				{
					"Welcome to the 21-Day Ultimate Challenge to Reverse High Blood Pressure and Blood Sugar Naturally"
						.split(" ")
						.map((word, i) => {
						const highlight21 = word.includes("21-Day");
						const highlightSugar = word.includes("Sugar");

						return (
							<motion.span
								key={i}
								className={`inline-block mr-1 ${
								highlight21 || highlightSugar
									? "text-3xl md:text-4xl font-bold font-sans text-[#427c55]"
									: ""
								}`}
								variants={fadeUp}
							>
								{word}
							</motion.span>
						);
					})
				}
				</motion.h1>
				<motion.p
					className="text-xl text-black font-semibold font-serif italic text-[16px]"
					variants={fadeUp}
				>
					They Told You You'll Be on Drugs for Life... That Ends Now.
				</motion.p>

				<motion.p
					className="text-[16px] font-medium text-black"
					variants={fadeUp}
				>
					For years, you've been managing your blood pressure or sugar levels with medications. You've been told there's no way out. That your condition is "chronic" and lifelong.
				</motion.p>

				<motion.p
					className="text-[16px] font-medium text-black"
					variants={fadeUp}
				>
					But what if that isn't true?<br />
					What if healing naturally is possible... and someone just needs to show you how?
				</motion.p>

				<motion.div variants={fadeUp}>
					<Link to="#Register">
					<button className="mt-2 bg-[#3e7752] text-white font-semibold px-20 py-3 cursor-pointer rounded-full hover:bg-[#28613c] transition-all duration-300">
						Register Now
					</button>
					</Link>
				</motion.div>
			</motion.div>
			</div>
		);
	};

export default Section1;
