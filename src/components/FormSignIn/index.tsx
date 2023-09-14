import { ContainerForm, Input } from './styles'
import LoginUserFormSchema from '../../validations/validationLogin'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/authUser'

type LoginUserData = {
  email: string
  password: string
}

export function FormularioLogin() {
  const { signIn, loadingAuth } = useContext(AuthContext)

  const [error, setError] = useState<string | boolean>()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginUserData>({ resolver: yupResolver(LoginUserFormSchema) })

  const handlerCreatedUser: SubmitHandler<LoginUserData> = async values => {
    await signIn(values.email, values.password)
      .then(() => navigate('/'))
      .catch(() => setError('Email ou senha invalida'))
  }

  return (
    <ContainerForm action="" onSubmit={handleSubmit(handlerCreatedUser)}>
      <p>Usuario</p>
      <Input type="text" placeholder="Usuario" {...register('email')} />
      {errors.email?.message && (
        <p style={{ color: 'red' }}>{errors.email.message}</p>
      )}

      <p>Senha</p>
      <Input type="password" placeholder="Senha" {...register('password')} />
      {errors.password?.message && (
        <p style={{ color: 'red' }}>{errors.password.message}</p>
      )}

      <button type="submit" title="Entrar">
        Entrar
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </ContainerForm>
  )
}
