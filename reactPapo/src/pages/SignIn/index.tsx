import { Link } from "react-router-dom";
import { Container, Formulario, SectionImage} from "./styles";
import Image from '../../assets/psicologa.svg'
import { FormularioLogin } from "../../components/FormSignIn";

export function SignIn(){
  return(
  <Container>
    <SectionImage>
      <h1>Faça seu cadastro</h1>
      <img src={Image} alt="" />
      {/* <button>Sou psicologo</button> */}
    </SectionImage>
    <Formulario>
      <h1>LOGIN</h1>
      <FormularioLogin />
      <p>Não tem uma conta? 
      <Link to="/signOutUsuarios"> Registrar-se.</Link></p>
    </Formulario>
  </Container>
  )
}