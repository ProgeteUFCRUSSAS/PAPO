import{
  InicialPage,
  OurVision
}
from './styles'
import { Footer } from '../../components/Footer'

export function AboutUs() {
  return (
    <div>
      <InicialPage>
        <div class ="textoinicial">
        <h1>Plataforma de atendimento <br />psicológico online</h1>
        <p>Essa plataforma tem como objetivo <br />aumentar a velocidade e agendamento <br />das seções com os psicólogos.</p>
        </div>
        <img src="src\assets\logoaboutus.svg" class ="logo" alt="logo PAPO" />
        <img src="src\assets\waves.svg" class ="waveb" alt="wave azul" />    
        <img src="src\assets\wave.svg" class ="wave" alt="wave" />
      </InicialPage>
      <OurVision>
        <div class ="text">
          <h1>Importancia  dos cuidados com a saúde mental <br /><br /></h1>
          <h3 class ="OV">Nossa Visão:</h3><br />
              <p>Acreditamos que a saúde mental é a base do bem-estar e da qualidade<br />de vida. Na era contemporânea, enfrentamos desafios únicos que <br />
              podem afetar nossa paz interior e equilíbrio emocional. Portanto, a <br />"Plataforma de Desenvolvimento Profissional para Psicólogos" não <br /> 
              apenas se dedica ao aprimoramento dos profissionais, mas também a <br />promover uma mentalidade saudável e cuidados com a saúde mental <br />
              em toda a nossa comunidade.</p>
        </div>
      </OurVision>
      <Footer />
    </div>
  )
}
