import { Footer } from '../../components/Footer'
import { SobreNos } from './styles'
import Time from '../../assets/time.png'

export function AboutUs() {
  return (
    <div>
      <SobreNos textColor="primary" backgroundColor="">
        

        <div className="about">   
          <div className="text-about-area">
            <h1 className="text-container">Quem somos</h1>
            <h2>Nossa missão:</h2>
            <p>
                {' '} 
              Somos um grupo apaixonado por psicologia e 
              comprometido com o constante aprimoramento da 
              prática profissional. Movidos pela visão de
              promover o bem-estar mental e emocional em 
              em nossa sociedade, concebemos a "Plataforma de 
              Atendimento psocológico Online". {' '} 
            </p>
            <h2>Nossa Comunidade:</h2>
            <p>
                {' '}
              Somos uma equipe diversificada e multidisciplinar,
              composta por mentes inquisitivas e corações 
              compassivos. Ruenimos psicológos experientes,
              entusiastas da tecnologia e criativos visionários,
              todos unidos por um propósito comum: capacitar 
              os psicológos e fortalecer a comunidade de saúde 
              mental em um ambiente acadêmico. {' '}
            </p>
          </div>
          <img
            className="Time"
            src={Time}
            alt="Imagem do Time do Projeto"
            width={400}
          />
        </div>
      </SobreNos>
      AboutUs
      <Footer />
    </div>
  )
}
