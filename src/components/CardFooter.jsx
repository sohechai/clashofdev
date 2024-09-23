import React, { useEffect, useRef, useState } from 'react';
import icons from '../utils/iconLoader.jsx';
import { motion } from "framer-motion";
import videoFile from '../assets/video/video.mp4';

const CardFooter = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isVideoVisible, setIsVideoVisible] = useState(false);
	const videoRef = useRef(null);

	const handleEnterNextLevel = () => {
		setIsVideoVisible(true);
	};

	const handleVideoEnded = () => {
		setIsVideoVisible(false);
	};

	useEffect(() => {
		console.log(document.getElementById('videoGlitch'));
		const video = document.getElementById('videoGlitch');
		if (video)
			video.volume = 0.1;
	}, [isVideoVisible]);

	return (
		<>
			<div
				className={'card-wrapper'}
				style={{ backgroundColor: 'var(--black)', color: 'var(--white)', height: 'calc(100vh - 200px)', marginBottom: '40px' }}
				id='card-footer'
			>
				<div className="little-title">
					/FINALE02
				</div>
				<div className="big-title">

					Click Me <span
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
						style={{ display: 'inline-block', transform: isHovered ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
					>
						?
					</span>   Might enter the finals
					<svg width="54" height="50" viewBox="0 0 91 83" fill="white" style={{ marginLeft: "100px" }}>
						<path d="M0.68 52.584L16.369 48.545C16.77 48.441 17.179 48.683 17.282 49.084L21.284 64.624C21.387 65.026 21.146 65.435 20.744 65.538L5.055 69.578C4.654 69.681 4.245 69.439 4.141 69.038L0.14 53.498C0.037 53.097 0.278 52.688 0.68 52.584Z" />
						<path d="M69.725 34.805L85.415 30.766C85.816 30.662 86.225 30.904 86.328 31.305L90.33 46.846C90.433 47.247 90.191 47.656 89.79 47.759L74.101 51.799C73.7 51.902 73.291 51.661 73.187 51.259L69.186 35.719C69.083 35.318 69.324 34.909 69.725 34.805Z" />
						<path d="M22.2 65.162L72.649 52.172C73.051 52.069 73.46 52.311 73.563 52.712L77.564 68.252C77.668 68.654 77.426 69.063 77.025 69.166L26.575 82.156C26.174 82.259 25.765 82.018 25.661 81.616L21.66 66.076C21.557 65.675 21.798 65.266 22.2 65.162Z" />
						<path d="M8.871 13.399L24.56 9.359C24.961 9.256 25.37 9.497 25.474 9.898L29.475 25.439C29.578 25.84 29.337 26.249 28.935 26.352L13.246 30.392C12.845 30.495 12.436 30.254 12.333 29.852L8.331 14.312C8.228 13.911 8.47 13.502 8.871 13.399Z" />
						<path d="M43.633 4.449L59.322 0.409C59.723 0.306 60.132 0.547 60.235 0.949L64.237 16.489C64.34 16.89 64.098 17.299 63.697 17.403L48.008 21.442C47.607 21.546 47.198 21.304 47.094 20.903L43.093 5.362C42.99 4.961 43.231 4.552 43.633 4.449Z" />
					</svg>
				</div>
				<div className="button-wrapper">
					<motion.button
						drag
						dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
						className="footer-button"
						onClick={handleEnterNextLevel}>
						<img src={icons['motion-icon.svg']} alt="Cursor" />
						<img src={icons['code-icon.svg']} alt="Cursor" />
						<img src={icons['responsive-icon.svg']} alt="Cursor" />
						Enter Next Level
					</motion.button>
				</div>

			</div >
			{isVideoVisible && (
				<div className='video-wrapper' >
					<video
						ref={videoRef}
						src={videoFile}
						autoPlay
						className='video'
						onEnded={handleVideoEnded}
						id='videoGlitch'
					/>
				</div>
			)}
		</>
	);
};

export default CardFooter;
