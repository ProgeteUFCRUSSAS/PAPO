import { Fragment } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { Layout } from './components/Layout'
import { SignOutPsicologos } from './pages/SignOut/Psicologo'
import { SignOutUsuarios } from './pages/SignOut/Usuario'

export function Router(){
  return(
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* Quando a pagina inicio for criada deve 
            importar ela aqui e colocar ela no lugar de SignIn no path="/", 
            e depois desmarcar o que foi o que foi comentado apos essa linha. 
            E a cada pagina que for adicionada dever criada apenas seu caminho aqui, 
            pois o Header ira acompanhar em todas*/}
            <Route path='/' element={<SignIn />}/>
            {/* <Route path='/signIn' element={<SignIn />} /> */}
            <Route path='/cadastro-psicologos' element={<SignOutPsicologos />}/>
            <Route path='/cadastro-usuarios' element={<SignOutUsuarios />}/>
          </Route>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}