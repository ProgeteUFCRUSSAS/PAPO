import * as C from './styles'

export function Content(){
	return (
		<C.ContentSection>
			<C.ContentTitle>Valores</C.ContentTitle>
			<C.ContentBox>
            <C.ContentItem>
                
                <C.ContentTitle>Quanto custa? </C.ContentTitle>
                    <C.ContentCost>
                    <C.ContentText>
                    Atualmente estamos desenvolvendo e o uso das primeiras funcoes primordias sao totalmente gratuitas
                    </C.ContentText>
                    </C.ContentCost>
                
            </C.ContentItem>
            <C.ContentItem>
                  
                    <C.ContentTitle>Quer ajudar? </C.ContentTitle>
                    <C.ContentDonate>
                    <C.ContentText>
                    Doe e financie o projeto a crescer muito mais  
                    </C.ContentText>
                    </C.ContentDonate>
                
            </C.ContentItem>
            
            

            </C.ContentBox>
		</C.ContentSection>
	);
};
