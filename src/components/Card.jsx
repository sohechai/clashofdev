import React from 'react';
import '../styles/App.css';
import images from '../utils/imageLoader.jsx';
import icons from '../utils/iconLoader.jsx';
import CardJudge from './CardJudge.jsx';

const Card = ({ theme, bareme, title, judges, description, subDescription, color, image, icon }) => {
	return (
		<div className="card-wrapper" style={{ backgroundColor: `var(--${color}-light)` }}>
			<div className="theme-wrapper">
				<span>{theme}</span>
				<span>{bareme}</span>
			</div>
			<h3 className="card-title">{title}</h3>
			<div className="card-judge-wrapper">
				<CardJudge judges={judges} color={color} />
			</div>
			<div className="card-image">
				<img src={images[image]} alt={title} />
			</div>
			<div className="card-description">
				<p>
					{description.map((part, index) =>
						part.bold ? <strong key={index}>{part.text}</strong> : <span key={index}>{part.text}</span>
					)}
				</p>
				<p>
					{subDescription.map((part, index) =>
						part.bold ? <strong key={index}>{part.text}</strong> : <span key={index}>{part.text}</span>
					)}
				</p>
			</div>
			<div className="circle-card" style={{ backgroundColor: `var(--${color}-mid)` }}>
				<img src={icons[icon]} alt="Cursor" key={icon} />
			</div>
		</div>
	);
};

export default Card;