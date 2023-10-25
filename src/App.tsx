import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/Themes/defaultTheme'
import AuthProvider from './contexts/authUser'
import { PsychologistProvider } from './contexts/psychologistContext'

function App() {
  return (
    <AuthProvider>
      <PsychologistProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </PsychologistProvider>
    </AuthProvider>
  )
}

export default App
