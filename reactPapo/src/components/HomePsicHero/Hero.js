import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroSection, HeroContainer, HeroHeader, HeroText, ButtonWrapper, HeroButton, HeroWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroWrapper>
			<HeroContainer>
				<HeroHeader>O controle e gestão de seus horários na palma de sua mão</HeroHeader>
				<HeroText>
					Nosso objetivo é fornecer qualidade e rapidez para que você consiga maior rapidez e um melhor
                    controle na gestão de seus atendimentos.
				</HeroText>
				<ButtonWrapper>
					<Link to="/">
					Quero me cadastrar
					</Link>
					{/* <HeroButton></HeroButton> */}
				</ButtonWrapper>
			</HeroContainer>
			</HeroWrapper>
		</HeroSection>
	);
};

export default Hero;
