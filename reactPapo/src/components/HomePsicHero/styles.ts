import styled from 'styled-components';

import BackgroundHero from "../../assets/svg/backgroundheropsic.svg"

export const HeroSection = styled.section`
	display: flex;
	
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-image: url(${BackgroundHero});
	
	font-family: 'Ruda', sans-serif;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	color: #38B6FF;
	
`;
export const HeroWrapper = styled.div`
	width: 600px;
	margin-left: 135px;
	padding-top: 80px;
	height: 700px;  
  	display: flex;
  	align-items: center;
  	height: 100%;
`;
export const HeroContainer = styled.div`
	
	width: 6000px;
	height: 600px;
	
  	border-radius: 27.3772px;
 
  	background: rgba(255, 255, 255, 0.9);
  
 	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
	

  p{
	
  }
  h2
  button{

  }
`

export const HeroTitle = styled.h1`
	color: #38B6FF;
	font-size: 40px;
	padding: 20px;
	width: 559px;
	text-align: center;
`


export const HeroText = styled.h2`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #38B6FF;
	padding: 20px;
	width: 600px;
	text-align: center;
	font-size: 30px;
	
	
`;
export const HeroBox = styled.p`

	borderRadius: 4;
	color: 38B6FF;


`
export const ButtonWrapper = styled.div`
  
	a{
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-size: 52px;
	border-radius: 95.5106px;
	width: 595px;
	height: 106px;
	color: white;
	
	background: #38B6FF;
	&:before {
		background: 38B6FF;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: black;
	}
  }
	width: 90%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
	
`;

