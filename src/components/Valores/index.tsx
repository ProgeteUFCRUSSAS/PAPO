import { Card, LabelCard, ContainerValores, TextContainer } from './styles'

export default function Valores() {
  return (
    <ContainerValores>
      <Card>
        <LabelCard>Quanto custa?</LabelCard>
        <TextContainer>
          <p>
            Atualmente estamos desenvolvendo e o uso das primeiras funções
            primordiais são totalmente gratuitas!
          </p>
        </TextContainer>
      </Card>
      <Card>
        <LabelCard>Quer ajudar?</LabelCard>
        <TextContainer>
          <p>Doe e financie o projeto a crescer muito mais!</p>
          <p>chave pix: progete.ufcrussas@gmail.com</p>
        </TextContainer>
      </Card>
    </ContainerValores>
  )
}
