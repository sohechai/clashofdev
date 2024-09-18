import React, { useRef, useState } from 'react';
import '../styles/App.css';
import cardHero from '../assets/card-hero.svg';
import iconHero from '../assets/icon-hero.svg';
import marqueeIcon from '../assets/marquee-icon.svg';
import marqueeIcon2 from '../assets/marquee-icon2.svg';
import { motion } from "framer-motion";


const Hero = () => {
	const marqueeVariants = {
		animate: {
			x: [0, -3100],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 5,
					ease: "linear",
				},
			},
		},
	};

	return (
		<section className="hero">
			<div className="top-hero">
				<div className="hero-left">
					<div className="hero-title">
						Que le plus fort,
					</div>
					<div className="hero-title">
						<img src={iconHero} alt="Icon Hero" className="hero-icon" />
						<span style={{ fontStyle: "italic" }} >l'emporte </span>
					</div>
				</div>
				<div className="hero-right">
					<img src={cardHero} alt="Card Hero" className="card" />
				</div>
			</div>
			<div className="bottom-hero">
				<motion.div
					className="track"
					variants={marqueeVariants}
					animate="animate"
				>
					{/* <div className="text-content"> */}
						{/* <h1>
							Let's Work Together. Let's Work Together. Let's Work Together. Let's
							Work Together. Let's Work Together. Let's Work Together. Let's Work
							Together
						</h1> */}
						<h1>
						&lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" />
						&lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" />
						</h1>
						{/* &lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" />
						&lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" /> */}
					{/* </div> */}

				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
