import item1 from '../../assets/svg/itemcomodidade.svg'
import item2 from '../../assets/svg/itemcredibilidade.svg'
import item3 from '../../assets/svg/itemseguranca.svg'
import * as C from './styles'

export function Benefits() {
  return (
    <C.ContentBox>
      <C.ContentItem>
        <img src={item1} alt="IMAGEM ITEM" />
        <C.ContentTitle>Comodidade e acessibilidade </C.ContentTitle>

        <C.ContentText>
          Sem espera, sem sair de casa , a sua escolha. No PAPO você consegue
          marcar consultas presenciais ou online a sua escolha.
        </C.ContentText>
      </C.ContentItem>

      <C.ContentItem>
        <img src={item2} alt="IMAGEM ITEM"></img>
        <C.ContentTitle>Segurança </C.ContentTitle>

        <C.ContentText>
          Todos os seus dados estão seguros e serão tratados com
          confidencialidade pelo profissional e pelo PAPO
        </C.ContentText>
      </C.ContentItem>

      <C.ContentItem>
        <img src={item3} alt="IMAGEM ITEM"></img>
        <C.ContentTitle>Credibilidade </C.ContentTitle>

        <C.ContentText>
          Você psicólogo terá mais visibilidade no seu negocio e melhor gestão
          dos horários que tem disponíveis
        </C.ContentText>
      </C.ContentItem>
    </C.ContentBox>
  )
}
