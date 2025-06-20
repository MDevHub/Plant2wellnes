import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const move = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', move);
		return () => window.removeEventListener('mousemove', move);
	}, []);

	return (
		<>
			{/* Soft glow trail */}
			<div
				className="fixed top-0 left-0 w-10 h-10 rounded-full bg-green-600 opacity-10 blur-2xl pointer-events-none z-[9998] transition-transform duration-300 ease-out"
				style={{
					transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
				}}
			></div>

			{/* Main dot */}
			<div
				className="fixed top-0 left-0 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-600 pointer-events-none z-[9999] transition-transform duration-150 ease-out"
				style={{
					transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
				}}
			></div>
		</>
	);
};

export default CursorFollower;
