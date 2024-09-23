import React, { useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import '../styles/App.css';
import toggleLight from '../assets/toggle-icon.svg';
import toggleDark from '../assets/toggle-icon-dark.svg';

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const { scrollYProgress } = useScroll();
	const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const roundedScrollPercentage = useTransform(scrollPercentage, value => Math.ceil(value));
	const [marginValue, setMarginValue] = useState('32px');


	useEffect(() => {
		const updateMarginValue = () => {
			const value = getComputedStyle(document.documentElement).getPropertyValue('--margin').trim();
			setMarginValue(value);
		};

		updateMarginValue();
		window.addEventListener('resize', updateMarginValue);

		return () => window.removeEventListener('resize', updateMarginValue);
	}, []);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.style.setProperty('--beige', '#262625');
			document.documentElement.style.setProperty('--black', '#F3F3F1');
			document.documentElement.style.setProperty('--white', '#262625');
		} else {
			document.documentElement.style.setProperty('--beige', '#F3F3F1');
			document.documentElement.style.setProperty('--black', '#262625');
			document.documentElement.style.setProperty('--white', '#FEFEFE');
		}
	}, [isDarkMode]);

	return (
		<nav className="navbar">
			<motion.div
				className="progress-bar"
				style={{
					scaleX: scrollYProgress,
					transformOrigin: '0%',
					height: '4px',
					backgroundColor: isDarkMode ? '#F3F3F1' : '#262625',
					width: '100vw',
					position: 'absolute',
					top: '-20px',
					left: `-${marginValue}`,
				}}
			/>

			<div className="navbar-logo">LA PISCINE</div>

			<motion.div className="navbar-center">
				<motion.span style={{ display: 'inline-block' }}>{roundedScrollPercentage}</motion.span>%
			</motion.div>

			<div className="navbar-toggle">
				<input
					type="checkbox"
					name="checkbox"
					id="input-toggle"
					className="input-toggle"
					checked={isDarkMode}
					onChange={toggleTheme}
				/>
				<div className="checkbox-container">
					<label htmlFor="input-toggle" className="label-for-toggle">
						<span className="ball">
							{
								isDarkMode ?
									<img src={toggleDark} alt="Toggle" /> :
									<img src={toggleLight} alt="Toggle" />
							}
						</span>
					</label>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
