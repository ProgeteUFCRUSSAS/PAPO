import styled from 'styled-components';
import background from '../../assets/svg/backgroundhero.svg';


export const HeroSection = styled.section`
	display: flex;
	
	
	background-position: center;
	background-size: cover;
	
	
	font-family: 'Ruda', sans-serif;
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	color: #38B6FF;
	height: calc (100vh - 100px);
	background-image: url(${background});
	overflow: auto;
	
`;
export const HeroWrapper = styled.div`
	width: 600px;
	margin: 135px;

	
  	display: flex;
  	align-items: center;
  	
	
`;
export const HeroContainer = styled.div`
	

	
	
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


export const HeroTitle = styled.p`
/* Plataforma de atendimento psicológico online */


width: 611.87px;
height: 246px;
left: 40.52px;
top: 88.7px;

font-family: 'Ruda';
font-style: normal;
font-weight: 900;
font-size: 67.6534px;
line-height: 82px;
display: flex;

text-align: center;

color: #38B6FF;
margin: 30px;

`


export const HeroText = styled.h2`
width: 611.87px;
height: 136.3px;
left: 31.76px;
top: 385.53px;

font-family: 'Ruda';
font-style: normal;
font-weight: 700;
font-size: 31.8369px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;

color: #38B6FF;
margin: 30px;

	
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
	margin: 50px;
	
`;

