import axios from 'axios'

type DataUser = {
  nome?: string
  email: string
  senha: string
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2ODU1ODA3OTQsInVzdWFyaW9JZCI6MX0.0H0DYTPP43dM-H4MQgNchY6GvPbDtSHAKitu4sTyktM'

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export const loginUser = ({ email, senha }: DataUser) => {
  return api.post('/login', {
    email: email,
    senha: senha
  })
}

export const addUsuario = ({ nome, email, senha }: DataUser) => {
  return api.post('/usuarios', {
    nome: nome,
    email: email,
    senha: senha
  })
}

export const getUsuarios = () => {
  return api.get('/usuarios', {
    headers: {
      Authorization: `Bearer token ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

export default api
