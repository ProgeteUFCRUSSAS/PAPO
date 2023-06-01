import { ContainerForm, Input } from '../FormSignIn/styles'
import SignOutFormSchema from '../../validations/validationSignOut'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authUser'
// import useAuth from "../../hooks/HookAuthContext";

type LoginUserData = {
  usuario: string
  email: string
  password: string
}

export function FormularioSignOut() {
  const [error, setError] = useState<string | boolean>()

  const { signUp, loadingAuth } = useContext(AuthContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginUserData>({ resolver: yupResolver(SignOutFormSchema) })

  const handlerCreatedUser: SubmitHandler<LoginUserData> = async values => {
    // console.log(values)
    await signUp(values.usuario, values.email, values.password)
      .then(() => {
        console.log('Cadastro com sucesso')
      })
      .catch((error: any) => {
        console.log(error)
      })

    reset()
  }

  return (
    <ContainerForm action="" onSubmit={handleSubmit(handlerCreatedUser)}>
      <p>Usuario</p>
      <Input type="text" placeholder="Usuario" {...register('usuario')} />
      {errors.usuario?.message && (
        <p style={{ color: 'red', fontSize: '14px' }}>
          {errors.usuario.message}
        </p>
      )}

      <p>E-mail</p>
      <Input type="text" placeholder="Email" {...register('email')} />
      {errors.email?.message && (
        <p style={{ color: 'red', fontSize: '14px' }}>{errors.email.message}</p>
      )}

      <p>Senha</p>
      <Input type="password" placeholder="Senha" {...register('password')} />
      {errors.password?.message && (
        <p style={{ color: 'red', fontSize: '14px' }}>
          {errors.password.message}
        </p>
      )}

      <button type="submit" title="Entrar">
        Cadastrar
      </button>
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
    </ContainerForm>
  )
}
