import { ContentBox } from '../HomeContent/styles'
import { Card, LabelCard } from './styles'

export default function Valores() {
  return (
    <ContentBox>
      <Card>
        <LabelCard>Quanto custa?</LabelCard>
        <p>
          Atualmente estamos desenvolvendo e o uso das primeiras funções
          primordiais são totalmente gratuitas!
        </p>
      </Card>
      <Card>
        <LabelCard>Quer ajudar?</LabelCard>
        <p>Doe e financie o projeto a crescer muito mais!</p>
        <p>chave pix: progete.ufcrussas@gmail.com</p>
      </Card>
    </ContentBox>
  )
}
