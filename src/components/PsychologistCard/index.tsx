import * as S from './styles'
import ImageDefault from '../../assets/profileDefault.jpeg'

export function PsychologistCard() {
  return (
    <S.CardContainer>
      <S.ImagePsyc src={ImageDefault} alt="Imagem psicologo" />
      <S.DataPsyc>
        <p className="name-psyc">Nome psicolgo</p>

        <div>
          <p className="acting-area">Area | Atuação</p>
          <p className="city">Endereço completo:</p>
          <p className="city">Cidade:</p>
          <p className="crp">CRP -</p>
        </div>
      </S.DataPsyc>

      <S.Schedules>
        <p className="title-schedules">Biografia</p>

        <div className="container-biography-scheduling">
          <p className="text-biography">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            assumenda est magni ex? Quidem ex natus iste harum omnis labore
            veniam quasi quisquam velit. Voluptatibus quas aliquid dicta
            excepturi fugiat?
          </p>
          <button type="button" className="button-scheduling">
            Agendar consulta
          </button>
        </div>
      </S.Schedules>
    </S.CardContainer>
  )
}
