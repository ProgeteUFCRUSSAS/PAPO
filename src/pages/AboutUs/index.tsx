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
        <div className ="textoinicial">
        <h1>Plataforma de atendimento <br />psicológico online</h1>
        <p>Essa plataforma tem como objetivo aumentar a velocidade e agendamento <br />das seções com os psicólogos.</p>
        </div>
        <div className='logo'><img src="src\assets\logoaboutus.svg" id='logo' alt="logo" /></div>
        <div className='waves'>
        <div className='wave'>
          <img src="src\assets\wave.svg" id='wavea' alt="wave1" />
        </div>
        <div className='waveb'>
          <img src="src\assets\waves.svg" id='waveb' alt="wave2" />
        </div>
        </div>
      </InicialPage>
      <OurVision>
        <div className ="OV">
          <h1>Importancia  dos cuidados com a saúde mental <br /><br /></h1>
          <h3 >Nossa Visão:</h3><br />
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
