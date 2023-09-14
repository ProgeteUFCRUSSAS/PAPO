import { useState } from 'react'
import * as Styles from './styles'
import { FormularioLogin } from '../../components/FormSignIn'
import { FormularioSignOut } from '../../components/FormSignOut'

export default function SignOutPage() {
  const [isActiveUser, setIsActiveUser] = useState(true)
  const [isActivePsyc, setIsActivePsyc] = useState(false)

  const handleClickUser = () => {
    setIsActiveUser(true)

    if (isActivePsyc === true) setIsActivePsyc(false)
  }

  const handleClickPsyc = () => {
    setIsActivePsyc(true)

    if (isActiveUser === true) setIsActiveUser(false)
  }

  return (
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
          <Styles.ButtonFormUser
            active={isActiveUser}
            onClick={handleClickUser}
          >
            Usuario
          </Styles.ButtonFormUser>
          <Styles.ButtonFormPsyc
            active={isActivePsyc}
            onClick={handleClickPsyc}
          >
            Psicologo
          </Styles.ButtonFormPsyc>
        </Styles.ContainerButtons>

        {isActiveUser ? <FormularioLogin /> : <FormularioSignOut />}
      </Styles.FormSignInOutContainer>
    </Styles.FormContainer>
  )
}
