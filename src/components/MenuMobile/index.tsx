import { Container } from './styles'
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

interface IMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export function MenuMobile({
  menuIsVisible,
  setMenuIsVisible
}: IMenuMobileProps) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose
        size={44}
        onClick={() => setMenuIsVisible(prevState => !prevState)}
        style={{ color: '#38B6FF', cursor: 'pointer' }}
      />
      <nav>
        <Link to="/" onClick={() => setMenuIsVisible(prevState => !prevState)}>
          Inicio
        </Link>
        <Link
          to="/psicologos"
          onClick={() => setMenuIsVisible(prevState => !prevState)}
        >
          Psicologos
        </Link>
        <Link
          to="/login"
          onClick={() => setMenuIsVisible(prevState => !prevState)}
        >
          Entrar
        </Link>
        <Link
          to="/registrar-se"
          onClick={() => setMenuIsVisible(prevState => !prevState)}
        >
          Cadastrar
        </Link>
      </nav>
    </Container>
  )
}
