import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx';
import cardData from '../assets/cards-data.json';
import CardFooter from '../components/CardFooter.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
	return (
		<section className="home">
			<Navbar />
			<Hero />
			<section className='cards-wrapper'>
			{cardData.map((card, index) => (
				<Card
					key={index}
					theme={card.theme}
					bareme={card.bareme}
					title={card.title}
					judges={card.judges}
					description={card.description}
					subDescription={card.subDescription}
					color={card.color}
					image={card.image}
					icon={card.icon}
				/>
			))}
			</section>
			<CardFooter />
			<Footer />
		</section>
	);
};

export default Home;