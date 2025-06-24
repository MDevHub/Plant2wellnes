import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Section2Img from '../../assets/Images/21dayImg.jpeg';

const Section2 = () => {
	const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

	useEffect(() => {
		AOS.init({
			duration: 1200, // ⚡ better: fast, smooth, professional
			once: true,
			easing: 'ease-out-cubic',
		});

		const now = new Date();
		const target = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

		const timer = setInterval(() => {
			const nowTime = new Date().getTime();
			const distance = target.getTime() - nowTime;

			if (distance < 0) return clearInterval(timer);

			setTimeLeft({
				days: Math.floor(distance / (1000 * 60 * 60 * 24)),
				hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
				mins: Math.floor((distance / (1000 * 60)) % 60),
				secs: Math.floor((distance / 1000) % 60),
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="min-h-screen flex flex-col md:flex-row overflow-hidden">
			{/* Image Side */}
			<div
				className="md:w-1/2 w-full h-80 md:h-auto relative"
				data-aos="fade-right"
			>
				<img
					src={Section2Img}
					alt="21 Day Challenge"
					className="w-full h-full object-cover object-center"
				/>
				{/* Softer, more professional gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-green-800/40 via-green-400/20 to-transparent"></div>
			</div>

			{/* Countdown Side */}
			<div className="md:w-1/2 w-full bg-gradient-to-br from-green-200 via-beige-100 to-white flex items-center justify-center px-4 md:px-12 py-12">
				<div className="max-w-lg w-full text-center space-y-6" data-aos="fade-up" data-aos-delay="800">
					<h2 className="text-2xl md:text-4xl font-bold text-green-800 leading-tight">
						Countdown to the 21-Day Challenge
					</h2>

					<div className="flex justify-center flex-wrap gap-4 mt-4">
						{['Days', 'Hours', 'Mins', 'Secs'].map((label, i) => {
							const val = [timeLeft.days, timeLeft.hours, timeLeft.mins, timeLeft.secs][i];
							return (
								<div
									key={label}
									className="flex flex-col items-center w-14 sm:w-20 h-18 sm:h-24 justify-center rounded-md shadow-md bg-white text-green-800 border border-green-300"
									data-aos="zoom-in"
									data-aos-delay={400 + i * 150} // stagger properly
								>
									<div className="text-xl md:text-2xl font-bold">{val.toString().padStart(2, '0')}</div>
									<div className="text-[10px] uppercase tracking-wide font-semibold">{label}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Section2;
