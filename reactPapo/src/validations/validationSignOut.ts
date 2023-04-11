import * as yup from 'yup'

const SignOutFormSchema = yup.object().shape({
  usuario: yup
    .string().min(3, "Usuario não pode conter menos de 3 caracteres").required("Campo usuario é obrigatório"),
  email: yup
    .string().required("Campo email é obrigatório").email("Email invalido"),
  password: yup
    .string().required("Campo senha é obrigatório").min(6, "Senha não pode conter menos que 6 caracteres")
})

export default SignOutFormSchema;