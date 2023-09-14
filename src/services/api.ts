import axios from 'axios'

type DataUser = {
  nome?: string
  email: string
  senha: string
}

const token = import.meta.env.VITE_REACT_APP_TOKEN

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL
})

api.interceptors.request.use(config => {
  let data: any = sessionStorage.getItem('@App:S')

  if (data) {
    data = JSON.parse(window.atob(data))
  }

  if (config.headers) {
    if (!!data) {
      config.headers['Authorization'] = `Bearer ${Object.values(data).join('')}`
    } else {
      config.headers['Authorization'] = ''
    }
  }

  return config
})

export const loginUser = async ({ email, senha }: DataUser) => {
  return await api
    .post('/login', {
      email: email,
      senha: senha
    })
    .then(() => {
      sessionStorage.setItem('@App:S', window.btoa(JSON.stringify(token)))
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
  return api.get('/usuarios').then(resp => console.log(resp.data))
}

export default api
