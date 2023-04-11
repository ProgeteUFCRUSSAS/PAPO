import styled from "styled-components";

export const SectionImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    color: ${props => props.theme.colors.tertiary};
    font-size: 44px;
  }

  a{
    text-decoration: none;
    width: 300px;
    height: 70px;
    background-color: ${props => props.theme.colors.quaternary};
    border-radius: 10px;
    border: 0;
    color: #FFFF;
    font-size: 22px;
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0px 15.9392px 63.7567px -19.127px #1351B4;
  }

  @media (max-width: 900px){
    width: 100%;
    height: 50%;
  }
`