import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroSection, HeroContainer, HeroHeader, HeroText, ButtonWrapper, HeroButton, HeroWrapper } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroWrapper>
			<HeroContainer>
				<HeroHeader>Plataforma de atendimento psicológico online</HeroHeader>
				<HeroText>
					Essa plataforma tem como objetivo aumentar a velocidade e agendamento das sessões com os psicologos
				</HeroText>
				<ButtonWrapper>
					<Link to="/">
					Consultar horários
					</Link>
					{/* <HeroButton></HeroButton> */}
				</ButtonWrapper>
			</HeroContainer>
			</HeroWrapper>
		</HeroSection>
	);
};

export default Hero;
