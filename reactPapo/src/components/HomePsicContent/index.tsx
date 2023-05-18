import React from 'react';
import * as PC from './styles'
export function PsicContent(){
	return(
		<PC.ContentSection>
			<PC.ContentHeader>Valores</PC.ContentHeader>
			<PC.ContentBox>
            <PC.ContentItem>
                
                <PC.ContentTitle>Quanto custa? </PC.ContentTitle>
                    <PC.ContentCost>
                    <PC.ContentText>
                    Atualmente estamos desenvolvendo e o uso das primeiras funcoes primordias sao totalmente gratuitas
                    </PC.ContentText>
                    </PC.ContentCost>
                
            </PC.ContentItem>
            <PC.ContentItem>
                  
                    <PC.ContentTitle>Quer ajudar? </PC.ContentTitle>
                    <PC.ContentDonate>
                    <PC.ContentText>
                    Doe e financie o projeto a crescer muito mais  
                    </PC.ContentText>
                    </PC.ContentDonate>
                
            </PC.ContentItem>
            
            

            </PC.ContentBox>
		</PC.ContentSection>
    )
};


