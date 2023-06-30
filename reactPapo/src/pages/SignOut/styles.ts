import styled from 'styled-components'

type buttonData = {
  active: boolean
}

export const SectionImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${props => props.theme.colors.tertiary};
    font-size: 44px;
  }

  a {
    text-decoration: none;
    width: 300px;
    height: 70px;
    background-color: ${props => props.theme.colors.quaternary};
    border-radius: 10px;
    border: 0;
    color: #ffff;
    font-size: 22px;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 15.9392px 63.7567px -19.127px #1351b4;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`

export const FormContainer = styled.div`
  width: 962px;
  height: 600px;
  display: flex;
  margin: 0 auto;
  box-shadow: 0px 3.75px 15px rgba(0, 0, 0, 0.337);
  background: none;
  border-radius: 17.5px;
`

export const PhraseContainer = styled.div`
  position: relative;
  width: 481px;
  height: 600px;
  background-color: none;
  border-radius: 27.5px 0px 0px 27.5px;
  border-right: 1px solid #d7f0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 90px 0;
  gap: 20px;

  p {
    width: 80%;
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #38b6ff;
    text-align: justify;
  }

  &::after {
    position: absolute;
    content: '';
    width: 60px;
    height: 5px;
    top: 70px;
    left: 10%;
    background: #38b6ff;
    border-radius: 4px;
  }
`

export const FormSignInOutContainer = styled.div`
  position: relative;
  width: 481px;
  height: 600px;
  background: #38b6ff;
  border-radius: 0px 17.5px 17.5px 0px;
  display: flex;
  justify-content: center;
`

export const ContainerButtons = styled.div`
  position: absolute;
  width: 100%;
  height: 90px;
  top: 0;
  background: #ffffff;
  border-radius: 0px 17.5px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 46px;
    color: #38b6ff;
  }
`

export const ButtonFormUser = styled.button<buttonData>`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-radius: 27.5px 0px 0px 0px; */
  background-color: ${props => (props.active ? '#d7f0ff' : 'transparent')};
  border: none;
  cursor: pointer;

  font-family: 'Ruda', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 46px;
  color: #38b6ff;
  transition: ease-in-out 0.3s;

  &:hover {
    opacity: 0.3;
  }
`

export const ButtonFormPsyc = styled(ButtonFormUser)`
  border-radius: 0px 17.5px 0px 0px;
`
