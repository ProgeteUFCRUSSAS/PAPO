import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authUser'

type PrivateProps = {
  children: ReactNode
}

export default function Private({ children }: PrivateProps) {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return <div></div>
  }

  if (!signed) {
    return <Navigate to="/" />
  }

  return <> {children} </>
}
