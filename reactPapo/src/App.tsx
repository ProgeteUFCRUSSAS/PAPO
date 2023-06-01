import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Router } from './Router'
import { SignIn } from './pages/SignIn'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/defaultTheme'
import AuthProvider from './contexts/authUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
