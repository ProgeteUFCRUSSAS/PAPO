import {
  AboutContent,
  HomeContent,
  TextContent,
  Title,
  ContainerDefault
} from './style'
import { Footer } from '../../components/Footer'
import { Hero } from '../../components/HomeHero'
import Waves from '../../assets/waves.svg'
import Peoples from '../../assets/psicologa.svg'
import Atendent from '../../assets/atendent.svg'
import Valores from '../../components/Valores'
import Faq from '../../components/Faq'
import { Benefits } from '../../components/Benefits'

export function Home() {
  return (
    <>
      <HomeContent>
        <div className="content">
          <TextContent>
            <h1>Plataforma de atendimento psicológico online</h1>
            <p>
              Essa plataforma tem como objetivo aumentar a velocidade e
              agendamento das seções com os psicólogos.
            </p>
          </TextContent>

          <img src={Peoples} alt="" className="peoples" />
        </div>
        <img src={Waves} alt="Imagem background ondas" className="waves" />
      </HomeContent>

      <AboutContent className="About">
        <Title textColor="primary">Como funciona o atendimento online?</Title>
        <div className="text-about-area">
          <p>
            No PAPO você encontra um ambiente 100% seguro, exclusivo para o seu
            atendimento. Somente você e o psicólogo tem acesso à sessão e aos
            dados e informações trocados nela. <br /> <br />
            Nenhuma sessão é gravada, respeitando o princípio da
            confidencialidade entre psicólogo e cliente.
            <br />
            <br />A segurança garantida pela terapia online permite que você
            converse com seu psicólogo de qualquer lugar conectado à internet,
            com tranquilidade.
          </p>
        </div>
        <img
          className="Atendent"
          src={Atendent}
          alt="Imagem pessoa sentada com uso de um computador na mesa"
          width={400}
        />
      </AboutContent>

      <ContainerDefault textColor="">
        <p className="text-container">Beneficios da terapia online</p>
        <Benefits />
        <img src={Waves} alt="Imagem background ondas" className="waves" />
      </ContainerDefault>

      <AboutContent>
        <Title textColor="primary">Valores</Title>
        {/* <Valores /> */}
      </AboutContent>

      <ContainerDefault textColor="">
        <p className="text-container">Perguntas frequentes</p>
        <Faq />
      </ContainerDefault>

      <Footer />
    </>
  )
}
