import { Link } from 'react-router-dom';
import * as H from './styles'

export function Hero(){
	return (
		<H.HeroSection>
			<H.HeroWrapper>
			<H.HeroContainer>
				<H.HeroTitle>Plataforma de atendimento psicológico online</H.HeroTitle>
				<H.HeroText>
					Essa plataforma tem como objetivo aumentar a velocidade e agendamento das sessões com os psicologos
				</H.HeroText>
				<H.ButtonWrapper>
					<Link to="/">
					Consultar horários
					</Link>
					{/* <HeroButton></HeroButton> */}
				</H.ButtonWrapper>
			</H.HeroContainer>
			</H.HeroWrapper>
		</H.HeroSection>
	);
};
