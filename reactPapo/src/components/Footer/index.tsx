import * as F from './styles'
import ImageLogo from '../../assets/logoFooter.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/intagram.svg'
import Linkedin from '../../assets/linkedin.svg'

export function Footer(){
  return(
    <F.Footer>
      <F.SectionLinks>
        <ul>
          <li>
            <p>Especialidades</p>
          </li>
          <li>
            <a href="">Psicologia</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>Contato</p>
          </li>
          <li>
            <a href="mailto:progeteufc@gmail.com">progeteufc@gmail.com</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>Duvidas (psicólogo)</p>  
          </li> 
          <li>
            <a href="">Termos de uso</a>
          </li>
          <li>
            <a href="">Dúvida frequentes</a>
          </li>
          <li>
            <a href="">Pagamento e valores</a>
          </li>
        </ul>
        <ul>
          <li>
            <p>Duvidas (paciente)</p>
          </li>
          <li>
            <a href="">Termos de uso</a>
          </li>
          <li>
            <a href="">Dúvida frequentes</a>
          </li>
          <li>
            <a href="">Pagamento e valores</a>
          </li>
        </ul>
      </F.SectionLinks>

      <F.SectionCopyright>
        <img src={ImageLogo} alt="" />
        <p>
          Fale conosco: <a href="mailto:progeteufcrussas@gmail.com">progeteufcrussas@gmail.com</a>
        </p>

        <F.RedesSociais>
          <p>Siga a gente: </p>

          <a href="https://facebook.com" target='_blank'>
            <img src={Facebook} alt="Página Facebook"/>
          </a>

          <a href="https://instagram.com" target='_blank'>
            <img src={Instagram} alt="Página Instagram" />
          </a>

          <a href="https://linkedin.com" target='_blank'>
            <img src={Linkedin} alt="Página Linkedin" />
          </a>
        </F.RedesSociais>
      </F.SectionCopyright>
    </F.Footer>
  )
}