import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import {
	FaCalendarAlt,
	FaClock,
	FaVideo,
	FaMoneyBillWave,
	FaCheckCircle,
} from 'react-icons/fa';

const renderer = ({ days, hours, minutes, seconds }) => {
	const timeBoxes = [
		{ label: 'days', value: days },
		{ label: 'hours', value: hours },
		{ label: 'mins', value: minutes },
		{ label: 'secs', value: seconds },
	];

	return (
		<div className="grid grid-cols-4 md:grid-cols-4 gap-3">
			{timeBoxes.map((t, idx) => (
				<div key={idx} className="bg-white text-center py-2 px-4 md:px-6 rounded-xl shadow-sm">
					<p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3e7752]">{t.value}</p>
					<span className="text-[14px] sm:text-[18px] md:text-xl text-gray-600">{t.label}</span>
				</div>
			))}
		</div>
	);
};

const Section3 = () => {
	const countdownTarget = new Date('2025-07-10T00:00:00');
	const sectionRef = useRef(null);
	const stickyRef = useRef(null);
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sectionTop = sectionRef.current.offsetTop;
			const sectionHeight = sectionRef.current.offsetHeight;
			const scrollY = window.scrollY;
			const viewportHeight = window.innerHeight;

			// Stick when scrolled into section, and unstick near the end of it
			if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight - viewportHeight / 2) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="flex flex-col items-center justify-center text-center relative">
			<h1 className="text-2xl md:text-3xl font-bold text-[#000000c9] mb-5">
				Workshop Starting In
			</h1>

			<div
				ref={sectionRef}
				className="relative w-full py-6 px-6 bg-[#3e7752] rounded-xl text-white flex items-center justify-center overflow-hidden"
			>
				{/* Glowing Circle Background */}
				<div className="absolute inset-0 flex items-center justify-center z-0">
					<div className="w-100 h-72 bg-white rounded-full opacity-20 blur-3xl"></div>
				</div>

				{/* Countdown Content */}
				<div className="relative z-10 grid md:grid-cols-3 items-center justify-center text-center">
					<div className="md:col-span-3">
						<Countdown date={countdownTarget} renderer={renderer} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section3;
