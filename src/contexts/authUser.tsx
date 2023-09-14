import { createContext, useState, useEffect, ReactNode } from 'react'

import api, { addUsuario, getUsuarios, loginUser } from '../services/api'

import { useNavigate, Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type AuthProviderProps = {
  children: ReactNode
}

type User = {
  nome: string
  email: string
}

type DataUser = {
  nome: string
  email: string
}

interface IContextProps {
  user: DataUser | any
  signIn: (email: string, senha: string) => Promise<void>
  signUp: (nome: string, email: string, senha: string) => Promise<void>
  // signout: () => void
  signed: any
  loadingAuth: boolean
  loading: boolean
  setUser: React.Dispatch<React.SetStateAction<DataUser>> | any
}

export const AuthContext = createContext<IContextProps>(null!)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<DataUser>()
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   async function loadUser() {
  //     const storageUser = localStorage.getItem('@Tickets')

  //     if (storageUser) {
  //       setUser(JSON.parse(storageUser))
  //       setLoading(false)
  //     }

  //     setLoading(false)
  //   }

  //   loadUser()
  // }, [])

  async function signIn(email: string, senha: string) {
    setLoadingAuth(true)

    // await signInWithEmailAndPassword(auth, email, password)
    //   .then(async value => {
    //     let uid = value.user.uid

    //     const docRef = doc(db, 'users', uid)
    //     const docSnap = await getDoc(docRef)

    //     let data = {
    //       uid: uid,
    //       nome: docSnap.data().nome,
    //       email: value.user.email,
    //       avatarUrl: docSnap.data().avatarUrl
    //     }

    //     setUser(data)
    //     storageData(data)
    //     setLoadingAuth(false)
    //     toast.success(`Bem-vindo(a) de volta ${docSnap.data().nome}!`)
    //     navigate('/dashboard')
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     setLoadingAuth(false)
    //     toast.error('error')
    //   })

    await loginUser({ email, senha }).then(
      (response: any) => console.log(response)
      // let data = {
      //         nome
      //       }

      //       setUser(data)
      //       storageData(data)
      //       setLoadingAuth(false)
    )
    // .then(response => {
    //   console.log(response)
    // })
  }

  async function signUp(nome: string, email: string, senha: string) {
    setLoadingAuth(true)

    await addUsuario({ nome, email, senha })
      .then(() => {
        let data = {
          nome: nome,
          email: email
        }
        setUser(data)
        setLoadingAuth(false)
        console.log('ufa')
      })
      .catch(() => {})
  }

  // function storageData(data) {
  //   localStorage.setItem('@Tickets', JSON.stringify(data))
  // }

  // async function logout() {
  //   await signOut(auth)
  //   localStorage.removeItem('@Tickets')
  //   setUser(null)
  // }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signUp,
        // logout,
        loadingAuth,
        loading,
        // storageData,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
