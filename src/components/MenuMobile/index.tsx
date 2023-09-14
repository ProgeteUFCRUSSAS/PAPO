import { Container } from './styles'
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react'

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
        <a href="" onClick={() => setMenuIsVisible(prevState => !prevState)}>
          Inicio
        </a>
        <a href="" onClick={() => setMenuIsVisible(prevState => !prevState)}>
          Psicologos
        </a>
        <a href="" onClick={() => setMenuIsVisible(prevState => !prevState)}>
          Entrar
        </a>
        <a href="" onClick={() => setMenuIsVisible(prevState => !prevState)}>
          Cadastrar
        </a>
      </nav>
    </Container>
  )
}
