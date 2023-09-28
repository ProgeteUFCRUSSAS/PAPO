import { ContainerFaq, Card, LabelCard, TextContainer } from './styles'

export default function Faq() {
  return (
    <ContainerFaq>
      <Card>
        <LabelCard>Quanto custa cada sessão ?</LabelCard>
        <TextContainer>
          <p>
            O valor de cada sessão é combinado com cada psicólogo, tendo seus
            próprios valores e tipos de consultas
          </p>
        </TextContainer>
      </Card>

      <Card>
        <LabelCard>Qual valor do sistema ?</LabelCard>
        <TextContainer>
          <p>
            Atualmente o sistema está disponível gratuitamente, mas temos custos
            e você pode ajudar a gente doando!
          </p>
        </TextContainer>
      </Card>

      <Card>
        <LabelCard>Como serão tratados meus dados ?</LabelCard>
        <TextContainer>
          <p>
            Seus dados são tratados com total confidencialidade e somente você e
            o psicólogo terão acessos as sessões
          </p>
        </TextContainer>
      </Card>

      <Card>
        <LabelCard>Quais futuras atualizações ?</LabelCard>
        <TextContainer>
          <p>
            Queremos implementar diversas funções que possam ajudar o psicólogo
            a facilitar a gestão
          </p>
        </TextContainer>
      </Card>
    </ContainerFaq>
  )
}
