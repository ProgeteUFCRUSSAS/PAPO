import React from 'react';


import Content  from '../components/Content/Content';

import Hero from '../components/Hero/Hero';
import FAQ from '../components/HomePsicFAQ/index'
import Footer from '../components/Footer/Footer';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
		<>
			<Hero />
				
			<Content />
			<FAQ />
	
		</>
	);
};

export default Home;
