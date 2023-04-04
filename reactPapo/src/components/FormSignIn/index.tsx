import { ContainerForm, Input, Label } from "./styles";
import LoginUserFormSchema from '../../validations/validationLogin'
import {yupResolver} from "@hookform/resolvers/yup"
import {SubmitHandler, useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
// import useAuth from "../../hooks/HookAuthContext";

type LoginUserData = {
  email: string;
  password: string;
}

export function FormularioLogin(){
  // const {signin} = useAuth()
  const [error, setError] = useState<string | boolean>()
  const navigate = useNavigate()
  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
    reset
  } = useForm<LoginUserData>({resolver: yupResolver(LoginUserFormSchema)})

  const handlerCreatedUser: SubmitHandler<LoginUserData> = async (values) => {  
      // let response = signin(values.email, values.password)

      // if(response == true){
      //   navigate("/home")
      // }else{
      //   setError(response)
      //   reset()
      // }
  }

  return(
    <ContainerForm action='' onSubmit={handleSubmit(handlerCreatedUser)}>

      <Label>Usuario</Label>
      <Input type="text" placeholder='Usuario' {...register("email")}/>
      {errors.email?.message && <p style={{color: 'red'}}>{errors.email.message}</p>}

      <Label>Senha</Label>
      <Input type="password" placeholder='Senha' {...register("password")}/>
      {errors.password?.message && <p style={{color: 'red'}}>{errors.password.message}</p>}

      <button type="submit" title='Entrar'/>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </ContainerForm>
  )
}