import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { Layout } from './components/Layout'
import { SignOutPsicologos } from './pages/SignOut/Psicologo'
import { SignOutUsuarios } from './pages/SignOut/Usuario'
import { Home } from './pages/Home'
import { HomePsic } from './pages/HomePsic'
import SignOutPage from './pages/SignOut'
import { AboutUs } from './pages/AboutUs'

export function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/psicologos" element={<HomePsic />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/cadastro-psicologos"
              element={<SignOutPsicologos />}
            />
            <Route path="/cadastro-usuarios" element={<SignOutUsuarios />} />
            <Route path="/registrar-se" element={<SignOutPage />} />
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}
