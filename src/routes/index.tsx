import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from '../pages/SignIn'
import { Layout } from '../components/Layout'
import { SignOutPsicologos } from '../pages/SignOut/Psicologo'
import { SignOutUsuarios } from '../pages/SignOut/Usuario'
import { Home } from '../pages/Home'
import PageUser from '../pages/PageUser'
import Private from './Private'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/cadastro-psicologos"
              element={<SignOutPsicologos />}
            />
            <Route path="/cadastro-usuarios" element={<SignOutUsuarios />} />
          </Route>
          <Route
            path="/user"
            element={
              <Private>
                <PageUser />
              </Private>
            }
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
