import React from 'react'
import balanceImg from '../../assets/Images/balance.png'
import contImg from '../../assets/Images/cont.png'
import energyImg from '../../assets/Images/energy.png'
import habitsImg from '../../assets/Images/habits.jpeg'
import immuneImg from '../../assets/Images/immune.jpg'
import lightImg from '../../assets/Images/light.webp'
import liverImg from '../../assets/Images/liver.jpg'
import ToxicImg from '../../assets/Images/HeroImg2.jpg'
import freeImg from '../../assets/Images/free.webp'


	const benefitsWeek1 = [
		{ img: ToxicImg, text: 'Flush out toxins and old waste' },
		{ img: liverImg, text: 'Support your liver, kidneys, and gut' },
		{ img: lightImg, text: 'Feel lighter, clearer, and more in control' },
	];
	const benefitsWeek2 = [
		{ img: balanceImg, text: 'Balance your sugar and pressure naturally' },
		{ img: contImg, text: 'Reduce inflammation using real food and herbs' },
		{ img: energyImg, text: 'Restore energy, mood, and metabolism' },
	];
	const benefitsWeek3 = [
		{ img: habitsImg, text: 'Lock in your new habits' },
		{ img: immuneImg, text: 'Boost immunity and long-term wellness' },
		{ img: freeImg, text: 'Start living free, healthy, and empowered' },
	];

	const Section5 = () => {
	return (
		<div className="bg-transparent rounded-xl p-4 shadow py-10">
			<div className="space-y-3">
				<h1 className="text-xl sm:text-2xl md:text-3xl text-[#000000c9] font-bold text-center">
					Benefits You Will Gain
				</h1>
				<p className="text-xs sm:text-lg text-center text-[#000000c9]">by taking this challenge</p>
				
				{/* Week One Benefits */}
				<p className="text-sm sm:text-lg font-bold text-[#3e7752] text-center mt-10">WEEK (1) DETOX & CLEANSE</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
					{benefitsWeek1.map((item, index) => (
						<div key={index} className="text-center space-y-2 items-centern justify ">
							<div className="relative w-[130px] h-[160px] mx-auto overflow-hidden hover:scale-110 transition-transform duration-700">
								<img
									src={item.img}
									alt={`benefit-${index}`}
									className="w-full h-full object-cover transition-transform duration-300  egg-mask"
								/>
							</div>
							<p className="text-sm text-[#000000da] mt-4 mx-auto text-center md:max-w-[80%]">
							{item.text}
							</p>
						</div>
					))}
				</div>

				{/* Week Two Benefits */}
				<p className="text-sm sm:text-lg font-bold text-[#3e7752] text-center mt-10">WEEK (2) RESET & BALANCE</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
					{benefitsWeek2.map((item, index) => (
						<div key={index} className="text-center space-y-2 items-centern justify ">
							<div className="relative w-[130px] h-[160px] mx-auto overflow-hidden hover:scale-110 transition-transform duration-700">
								<img
									src={item.img}
									alt={`benefit-${index}`}
									className="w-full h-full object-cover transition-transform duration-300  egg-mask"
								/>
							</div>
							<p className="text-sm text-[#000000da] mt-4 mx-auto text-center md:max-w-[80%]">
							{item.text}
							</p>
						</div>
					))}
				</div>

				{/* Week Three Benefits */}
				<p className="text-sm sm:text-lg font-bold text-[#3e7752] text-center mt-10">WEEK (3) REBUILD & SUSTAIN</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
					{benefitsWeek3.map((item, index) => (
						<div key={index} className="text-center space-y-2 items-centern justify ">
							<div className="relative w-[130px] h-[160px] mx-auto overflow-hidden hover:scale-110 transition-transform duration-700">
								<img
									src={item.img}
									alt={`benefit-${index}`}
									className="w-full h-full object-conver transition-transform duration-300  egg-mask"
								/>
							</div>
							<p className="text-sm text-[#000000da] mt-4 mx-auto text-center md:max-w-[80%]">
							{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Section5


					