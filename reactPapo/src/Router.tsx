import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { Layout } from './components/Layout'
import { SignOutPsicologos } from './pages/SignOut/Psicologo'
import { SignOutUsuarios } from './pages/SignOut/Usuario'
import { Home } from './pages/Home'
import { HomePsic } from './pages/HomePsic'
import SignOutPage from './pages/SignOut'
SignOutPage

export function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home-psicologo" element={<HomePsic />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/cadastro-psicologos"
              element={<SignOutPsicologos />}
            />
            <Route path="/cadastro-usuarios" element={<SignOutUsuarios />} />
            <Route path="/signOut" element={<SignOutPage />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
