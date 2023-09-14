import * as S from './styles'
import ImageDefault from '../../assets/profileDefault.jpeg'
import { Button } from '../Button'

export function PsychologistCard() {
  return (
    <S.CardContainer>
      <S.DataPsyc>
        <p className="name-psyc">Nome psicolgo</p>

        <div>
          <p className="acting-area">Area | Atuação</p>
          <p className="city">Cidade</p>
          <p className="crp">CRP -</p>
        </div>

        <a href="" className="assessments">
          Ver avaliações (0)
        </a>

        <div>
          <p className="">Temas que trabalho</p>
          <p className="">Formação</p>
        </div>

        <div className="">tempo de atendimento 50 minutos</div>

        <button>Ver perfil completo</button>
        <Button variant="primary">Perfil</Button>
      </S.DataPsyc>

      <S.Schedules>
        <p className="title-schedules">Horarios disponiveis</p>
      </S.Schedules>
      <S.ImagePsyc src={ImageDefault} alt="Imagem psicologo" />
    </S.CardContainer>
  )
}
