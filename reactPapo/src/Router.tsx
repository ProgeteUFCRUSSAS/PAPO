import { Fragment } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignIn } from './pages/SignIn'

export function Router(){
  return(
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<SignIn />}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}