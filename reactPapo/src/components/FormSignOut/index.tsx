import { ContainerForm, Input } from "../FormSignIn/styles";
import SignOutFormSchema from '../../validations/validationLogin'
import {yupResolver} from "@hookform/resolvers/yup"
import {SubmitHandler, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
// import useAuth from "../../hooks/HookAuthContext";

type LoginUserData = {
  usuario: string;
  email: string;
  password: string;
}

export function FormularioSignOut(){
  // const {signin} = useAuth()
  const [error, setError] = useState<string | boolean>()
  const navigate = useNavigate()
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset
  } = useForm<LoginUserData>({resolver: yupResolver(SignOutFormSchema)})

  const handlerCreatedUser: SubmitHandler<LoginUserData> = async (values) => {  
      console.log(values)
  }

  return(
    <ContainerForm action='' onSubmit={handleSubmit(handlerCreatedUser)}>

      <p>Usuario</p>
      <Input type="text" placeholder='Usuario' {...register("usuario")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}

      <p>E-mail</p>
      <Input type="text" placeholder='Email' {...register("email")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}

      <p>Senha</p>
      <Input type="password" placeholder='Senha' {...register("password")}/>
      {errors.password?.message && <p style={{color: 'red'}}>{errors.password.message}</p>}

      <button type="submit" title='Entrar'>Cadastrar</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </ContainerForm>
  )
}