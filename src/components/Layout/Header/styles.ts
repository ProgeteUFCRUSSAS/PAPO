import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100vw;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;

  .mobile {
    display: none;
    color: #38b6ff;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .mobile {
      display: initial;
    }

    > nav {
      display: none;
    }

    h1 {
      font-size: 30px;
    }
  }
`

export const Logo = styled.img`
  width: 320px;
  height: 50px;
`

export const NavContainer = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    gap: 25px;

    a {
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
      text-decoration: none;
      font-size: 28px;

      &:hover {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`
