import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #FFFF;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img{
    height: 500px;
    width: 750px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const SectionImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    color: ${props => props.theme.colors.tertiary};
    font-size: 44px;
  }

  button{
    width: 300px;
    height: 70px;
    background-color: ${props => props.theme.colors.quaternary};
    border-radius: 10px;
    border: 0;
    color: #FFFF;
    font-size: 22px;
    text-transform: uppercase;
    cursor: pointer;

    box-shadow: 0px 15.9392px 63.7567px -19.127px #1351B4;
  }

  @media (max-width: 900px){
    width: 100%;
    height: 50%;
  }
`

export const Image = styled.img`
  height: 500px;
  width: 500px;
  
  @media (max-width: 450px){
    display: none;
  }
`

export const SectionFormulario = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.cinza};

  @media (max-width: 900px){
    width: 100%;
    height: 50%;
  }
`

export const Formulario = styled.div`
  width: 450px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 30px;
  color: #FFFF;

  a{
    text-decoration: none;
    color: #FFFF;
  }

  @media (max-width: 450px){
    position: absolute;
    top: 20%;
    background-color: ${(props) => props.theme.colors.cinza};
  }
`

export const TextAviso = styled.p`
  width: 250px;
  text-align: center;
  font-size: 16px;
`