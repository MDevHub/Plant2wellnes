import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
	const phoneNumber = '234XXXXXXXXXX'; // 👉 Replace with your WhatsApp number

	const handleClick = () => {
		window.open(`https://wa.me/${phoneNumber}`, '_blank');
	};

	return (
		<button
			onClick={handleClick}
			className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all duration-300 animate-bounce-slow"
		>
			<FaWhatsapp className="text-xl" />
			<span className="hidden sm:inline text-sm font-medium">Chat on WhatsApp</span>

			<style>
				{`
					@keyframes bounce-slow {
						0%, 100% { transform: translateY(0); }
						50% { transform: translateY(-8px); }
					}
					.animate-bounce-slow {
						animation: bounce-slow 1.5s infinite;
					}
				`}
			</style>
		</button>
	);
};

export default WhatsAppButton;
