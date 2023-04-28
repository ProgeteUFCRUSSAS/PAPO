import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100%;
  height: 100px;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 35px;
  margin-bottom: 35px;
`

export const Logo = styled.img`
  width: 320px;
  height: 60px;
`

export const NavContainer = styled.nav`
  
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    gap: 25px;

    a {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      text-decoration: none;
      font-size: 30px;

      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`