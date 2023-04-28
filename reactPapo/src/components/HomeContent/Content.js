import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import Item1 from "../../assets/svg/item1.svg"
import Item2 from "../../assets/svg/item2.svg"
import Item3 from "../../assets/svg/item3.svg"
import {ContentSection, ContentItem, ContentTitle, ContentText, ContentImg, ContentBox} from './ContentStyles';

const Content = () => {
	return (
		<ContentSection>
			<MainHeading>Beneficios da terapia online</MainHeading>
			<ContentBox>
            <ContentItem>
                <img src = {Item1} alt=''/>
                <ContentTitle>Comodidade e acessibilidade </ContentTitle>
                    
                    <ContentText>
                    Sem espera, sem sair de casa , a sua escolha. No PAPO você consegue marcar consultas presenciais ou online a sua escolha.  

                    </ContentText>
                
            </ContentItem>
            <ContentItem>
                    <img src = {Item2}></img>
                    <ContentTitle>Segurança </ContentTitle>

                    <ContentText>
                    Todos os seus dados estão seguros e serão tratados com confidencialidade pelo profissional e pelo PAPO     
                    </ContentText>
                
            </ContentItem>
            <ContentItem>
                    <img src = {Item3}></img>
                <ContentTitle>Credibilidade </ContentTitle>
                    
                    <ContentText>
                    Você psicólogo terá mais visibilidade no seu negocio e melhor gestão dos horários que tem disponíveis
                    </ContentText>
                
            </ContentItem>
            

            </ContentBox>
		</ContentSection>
	);
};

export default Content;
