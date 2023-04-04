import { Link } from "react-router-dom";
import { Container, Formulario} from "./styles";
import Image from '../../assets/psicologa.svg'
import { FormularioLogin } from "../../components/FormSignIn";

export function SignIn(){
  return(
  <Container>
    {/* <SectionImage> */}
      <img src={Image} alt="" />
    {/* </SectionImage> */}
      <Formulario>
        <h1>LOGIN</h1>
        <FormularioLogin />
        <p style={{textAlign: 'center'}}>Não tem uma conta? 
        <Link 
          to="/register" 
          style={{
            textDecoration: 'none',
            color: '#ffff'
          }}
        > Registrar-se.</Link></p>
      </Formulario>
  </Container>
  )
}