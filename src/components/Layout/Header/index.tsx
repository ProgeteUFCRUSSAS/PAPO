import * as H from './styles'
import LogoImage from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri'

interface IHeaderProps {
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ setMenuIsVisible }: IHeaderProps) {
  return (
    <H.HeaderContainer>
      <Link to="/">
        <H.Logo src={LogoImage} alt="Logo Progete" />
      </Link>

      <H.NavContainer>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/psicologos">Psicologos</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/registrar-se">Cadastrar</Link>
          </li>
        </ul>
      </H.NavContainer>
      <RiMenu3Fill
        className="mobile"
        size={44}
        onClick={() => setMenuIsVisible(true)}
      />
    </H.HeaderContainer>
  )
}
