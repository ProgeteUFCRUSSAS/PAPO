import { Link } from 'react-router-dom'
import { Container, Formulario, SectionImage } from './styles'
import Image from '../../assets/psicologa.svg'
import { FormularioLogin } from '../../components/FormSignIn'
import * as Styles from '../SignOut/styles'

export function SignIn() {
  return (
    // <Container>
    //   <SectionImage>
    //     <h1>Faça seu cadastro</h1>
    //     <img src={Image} alt="" />
    //     {/* <button>Sou psicologo</button> */}
    //   </SectionImage>
    //   <Formulario>
    //     <h1>LOGIN</h1>
    //     <FormularioLogin />
    //     <p>Não tem uma conta?
    //     <Link to="/signOutUsuarios"> Registrar-se.</Link></p>
    //   </Formulario>
    // </Container>
    <Styles.FormContainer>
      <Styles.PhraseContainer>
        <p>Construindo pontes para o bem-estar mental.</p>
        <p>
          Junte-se a nós e faça a diferença na vida das pessoas, como um
          psicólogo acolhedor ou como alguém que busca apoio e crescimento
          pessoal.
        </p>
      </Styles.PhraseContainer>
      <Styles.FormSignInOutContainer>
        <Styles.ContainerButtons>
          <h1>Entrar agora</h1>
        </Styles.ContainerButtons>

        <FormularioLogin />
      </Styles.FormSignInOutContainer>
    </Styles.FormContainer>
  )
}
