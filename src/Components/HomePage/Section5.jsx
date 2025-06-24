import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bonusIMG from '../../assets/Images/bonusImg.jpg';

const bonuses = [
	"Free Guide: 7 Things to Do Before the Challenge",
	"Up to ₦50,000 worth of free herbal products for 5 participants",
	"30% off herbal kits for all participants"
];

const Section5 = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			easing: 'ease-out-cubic',
			offset: 150, // Animation triggers 150px before the element fully enters
		});
	}, []);

	return (
		<div
			id="training"
			className="scroll-offset w-full flex flex-col md:flex-row"
		>
			{/* Left Side - Image with hover scale */}
			<div
				className="md:w-1/2 w-full relative overflow-hidden"
				data-aos="fade-right"
				data-aos-offset="200"
			>
				<div className="group w-full h-full rounded-2xl">
					<img
						src={bonusIMG}
						alt="Bonus"
						className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent pointer-events-none"></div>
				</div>
			</div>

			{/* Right Side - Bonuses */}
			<div
				className="md:w-1/2 w-full bg-green-50 py-12 px-4 sm:px-6 md:px-10 flex items-center"
				data-aos="fade-left"
				data-aos-offset="200"
			>
				<div className="w-full max-w-xl mx-auto space-y-8">
					<h2
						className="text-xl sm:text-2xl md:text-3xl font-bold text-green-900"
						data-aos="fade-up"
						data-aos-delay="200"
					>
						Bonus Offers You Would Get
					</h2>
					<ul className="space-y-6 ">
						{bonuses.map((item, index) => (
							<li
								key={index}
								className="flex items-start gap-3 bg-white shadow p-4 rounded-md"
								data-aos="fade-up"
								data-aos-delay={300 + index * 150}
								data-aos-offset="200"
							>
								<p className="text-green-900 font-medium md:text-lg">{item}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Section5;
