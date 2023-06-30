import { AboutContent, HomeContent, TextContent, Title } from './style'
import { Footer } from '../../components/Footer'
import { Content } from '../../components/HomeContent'
import { Hero } from '../../components/HomeHero'
import Waves from '../../assets/waves.svg'
import Peoples from '../../assets/psicologa.svg'
import Atendent from '../../assets/atendent.svg'
import Valores from '../../components/Valores'
import Faq from '../../components/Faq'

export function Home() {
  return (
    <>
      <HomeContent>
        <div
          style={{
            width: '100%',
            height: '600px',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-around'
          }}
        >
          <TextContent>
            <h1>Plataforma de atendimento psicológico online</h1>
            <p>
              Essa plataforma tem como objetivo aumentar a velocidade e
              agendamento das seções com os psicólogos.
            </p>
          </TextContent>

          <img src={Peoples} alt="" />
        </div>
        <img src={Waves} alt="Imagem background ondas" className="waves" />
      </HomeContent>

      <AboutContent>
        <Title textColor="primary">Como funciona o atendimento online?</Title>
        <div className="text-about-area">
          <p>
            No PAPO você encontra um ambiente 100% seguro, exclusivo para o seu
            atendimento. Somente você e o psicólogo tem acesso à sessão e aos
            dados e informações trocados nela.
          </p>
          <p>
            Nenhuma sessão é gravada, respeitando o princípio da
            confidencialidade entre psicólogo e cliente.
          </p>
          <p>
            A segurança garantida pela terapia online permite que você converse
            com seu psicólogo de qualquer lugar conectado à internet, com
            tranquilidade.
          </p>
        </div>

        <img
          src={Atendent}
          alt="Imagem pessoa sentada com uso de um computador na mesa"
          width={400}
        />
      </AboutContent>

      <HomeContent>
        <Title textColor="">Beneficios da terapia online</Title>
        <Content />
        <img src={Waves} alt="Imagem background ondas" className="waves" />
      </HomeContent>

      <AboutContent>
        <Title textColor="primary">Valores</Title>
        <Valores />
      </AboutContent>

      <HomeContent>
        <Title textColor="">Perguntas frequentes</Title>
        <Faq />
      </HomeContent>

      <Footer />
    </>
  )
}
