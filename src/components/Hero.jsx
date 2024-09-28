import React from 'react';
import '../styles/App.css';
import cardHero from '../assets/card-hero.svg';
import iconHero from '../assets/icon-hero.svg';
import marqueeIcon from '../assets/marquee-icon.svg';
import marqueeIcon2 from '../assets/marquee-icon2.svg';
import { motion } from "framer-motion";


const Hero = () => {

	return (
		<section className="hero">
			<div className="top-hero">
				<div className="hero-left">
					<div className="hero-title">
						<p>Que le plus fort, <span style={{ fontStyle: "italic" }} > l'emporte! <img src={iconHero} alt="Icon Hero" className="hero-icon" /></span></p>
						
						
					</div>
				</div>
				<div className="hero-right">
					<img src={cardHero} alt="Card Hero" className="card" />
				</div>
			</div>
			<div className="marquee">
				<div className="track-wrapper">
					<div className="track">
						<div className="content">
							&nbsp;&lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" /> &lt;A&gt;Front les Tous! <img src={marqueeIcon} alt="Logo" /> Clash of Dev <img src={marqueeIcon2} alt="Logo" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
