import styled from 'styled-components'

export const Footer = styled.footer`
  max-width: 100vw;
  min-height: 350px;
  background: ${props => props.theme.colors.primary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    gap: 50px;
  }
`

export const SectionLinks = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  color: #ffff;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
    font-size: 20px;

    p {
      font-weight: 700;
    }

    a {
      text-decoration: none;
      color: #ffff;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 30px;
  }
`

export const SectionCopyright = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #ffff;
  margin-bottom: 10px;

  a {
    text-decoration: none;
    font-weight: 700;
    color: #ffff;
  }

  img {
    width: 60px;
    height: 60px;
  }

  span {
    font-weight: 800;
    color: #ffff;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-left: 30px;
  }
`

export const RedesSociais = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 25px;
    height: 25px;
  }
`
