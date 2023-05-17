import * as H from './styles'
import LogoImage from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header(){
 return(
  <H.HeaderContainer>
    <Link to="/">
        <H.Logo src={LogoImage} alt='Logo Progete'/>
    </Link>

    <H.NavContainer>
        <ul>
           <li>
              <Link to="/">Inicio</Link>
           </li>
           <li>
              <Link to="/">Psicologos</Link>
           </li>
           <li>
              <Link to="/login">Entrar</Link>
           </li>
           <li>
              <Link to="/cadastro-usuarios">Cadastrar</Link>
           </li>
       </ul>
            </H.NavContainer>
   </H.HeaderContainer>
 ) 
}