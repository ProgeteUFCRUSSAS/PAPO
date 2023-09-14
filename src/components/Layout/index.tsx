import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}