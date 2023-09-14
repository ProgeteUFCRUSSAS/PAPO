import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { MenuMobile } from '../MenuMobile'
import { useState } from 'react'

export function Layout() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <LayoutContainer>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Outlet />
    </LayoutContainer>
  )
}
