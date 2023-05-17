import { Link } from 'react-router-dom';
import * as H from './styles'

export function Hero(){
	return (
		<H.HeroSection>
			<H.HeroWrapper>
			<H.HeroContainer>
				<H.HeroTitle>O controle e gestão de seus horários na palma de sua mão</H.HeroTitle>
				<H.HeroText>
                Nosso objetivo é fornecer qualidade e rapidez para que você consiga maior rapidez e um melhor
                    controle na gestão de seus atendimentos.
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
