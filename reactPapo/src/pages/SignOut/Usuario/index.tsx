import { Link } from "react-router-dom";
import { Container, Formulario, TextAviso } from "../../SignIn/styles";
import { SectionImage } from '../styles'
import Image from '../../../assets/psicologa.svg'
import { FormularioSignOut } from "../../../components/FormSignOut";

export function SignOutUsuarios(){
  return(
  <Container>
    <Formulario>
      <h1>Cadastro</h1>
      <FormularioSignOut />
      <TextAviso>*Ao clicar em cadastrar você aceita a politica de privacidade e os termos de uso*</TextAviso>
    </Formulario>
    <SectionImage>
      <h1>Faça seu cadastro</h1>
      <img src={Image} alt="imagem psicologo com paciente" />
      <Link to="/SignOutUsuarios">Sou paciente</Link>
    </SectionImage>
  </Container>
  )
}