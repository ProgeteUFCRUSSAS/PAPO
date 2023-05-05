import * as C from './styles'

export function Content(){
	return (
		<C.ContentSection>
			<h1>Beneficios da terapia online</h1>
			<C.ContentBox>
            <C.ContentItem>
                <img  alt='IMAGEM ITEM'/>
                <C.ContentTitle>Comodidade e acessibilidade </C.ContentTitle>
                    
                    <C.ContentText>
                    Sem espera, sem sair de casa , a sua escolha. No PAPO você consegue marcar consultas presenciais ou online a sua escolha.  

                    </C.ContentText>
                
            </C.ContentItem>
            <C.ContentItem>
                    <img  alt='IMAGEM ITEM'></img>
                    <C.ContentTitle>Segurança </C.ContentTitle>

                    <C.ContentText>
                    Todos os seus dados estão seguros e serão tratados com confidencialidade pelo profissional e pelo PAPO     
                    </C.ContentText>
                
            </C.ContentItem>
            <C.ContentItem>
                    <img  alt='IMAGEM ITEM'></img>
                <C.ContentTitle>Credibilidade </C.ContentTitle>
                    
                    <C.ContentText>
                    Você psicólogo terá mais visibilidade no seu negocio e melhor gestão dos horários que tem disponíveis
                    </C.ContentText>
                
            </C.ContentItem>
            

            </C.ContentBox>
		</C.ContentSection>
	);
};
