import React from 'react';
import { Link } from 'react-router-dom';

import * as PH from './styles';

export function PsicHero() {
	return (
		<PH.HeroSection>
			<PH.HeroWrapper>
			<PH.HeroContainer>
				<PH.HeroTitle>O controle e gestão de seus horários na palma de sua mão</PH.HeroTitle>
				<PH.HeroText>
					Nosso objetivo é fornecer qualidade e rapidez para que você consiga maior rapidez e um melhor
                    controle na gestão de seus atendimentos.
				</PH.HeroText>
				<PH.ButtonWrapper>
					<Link to="/">
					Consultar horários
					</Link>
					{/* <HeroButton></HeroButton> */}
				</PH.ButtonWrapper>
			</PH.HeroContainer>
			</PH.HeroWrapper>
		</PH.HeroSection>
	);
};


