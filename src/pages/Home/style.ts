import styled, { css } from 'styled-components'

interface ITitleProps {
  textColor: string
}

export const Title = styled.h1<ITitleProps>`
  position: absolute;
  width: 660px;
  top: 0;
  left: calc(50% - 330px);

  display: flex;
  justify-content: center;

  font-family: 'Ruda', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 50px;
  line-height: 82px;
  display: flex;
  align-items: center;
  text-align: center;

  ${props =>
    props.textColor === 'primary'
      ? css`
          color: #ffffff;
        `
      : css`
          color: #38b6ff;
        `}
`

export const HomeContent = styled.div`
  position: relative;
  max-width: 100vw;
  display: flex;

  .content {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-around;
  }

  .waves {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 451px) {
    height: 80vh;
    align-items: center;

    .content {
      width: 100%;
      flex-direction: column;
    }

    .peoples {
      width: 100vw;
    }
  }

  @media (min-width: 600px) and (max-width: 1279px) {
    .content {
      width: 100%;
      margin-bottom: 100px;
      flex-direction: column;
    }

    .peoples {
      width: 100vw;
    }
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    height: 800px;

    .content {
      height: 100%;
    }
  }
  @media (min-width: 1440px) {
    height: 800px;

    .content {
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: space-around;
    }
  }
`

export const TextContent = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  h1 {
    font-family: 'Ruda', sans-serif;
    font-weight: 900;
    font-style: normal;
    text-align: start;
    color: #38b6ff;
  }

  p {
    font-family: 'Ruda', sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: right;
    color: #38b6ff;
  }

  @media (max-width: 451px) {
    h1 {
      font-size: 30px;
      line-height: 50px;
    }

    p {
      font-size: 20px;
      line-height: 30px;
    }
  }

  @media (min-width: 600px) and (max-width: 1279px) {
    h1 {
      font-size: 60px;
      line-height: 80px;
    }

    p {
      font-size: 35px;
      line-height: 40px;
    }
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    margin-left: 30px;

    h1 {
      font-size: 65px;
      line-height: 82px;
    }

    p {
      font-size: 31.8369px;
      line-height: 39px;
    }
  }

  @media (min-width: 1440px) {
    width: 655px;

    h1 {
      font-size: 65px;
      line-height: 82px;
    }

    p {
      font-size: 31.8369px;
      line-height: 39px;
    }
  }
`

export const AboutContent = styled(HomeContent)`
  max-width: 100vw;
  background-color: #38b6ff;

  display: flex;
  align-items: center;
  justify-content: space-around;

  .text-about-area {
    width: 60%;
    height: 50%;
    
    max-width: 60rem;
    margin: 0 auto
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 1.875rem;
  }

  p {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 3.0625rem;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  @media(max-width: 1200px) {
    .text-about-area {
      width: 60%; 
      height: 60%

    }

    .Atendent{
      width: 18em;
    }
    
    h1{
      font-size: 3rem;
    }

    p {
      font-size: 1.8rem; /* Reduza o tamanho da fonte para telas menores */
      line-height: 2.5rem; /* Ajuste a altura da linha para telas menores */
    }

  }

  @media (max-width: 919px){  
    
    .text-about-area{
      order: 1;
      height: 80%;
    }
    
    h1{
      font-size: 2.2rem;
    }

    p{
      font-size: 1.6rem;
    }

    .Atendent{
      width: 15rem;
      order: 2;
    }

    @media(max-width: 770px){

    .text-about-area{
      width: 100%
      height: 70%;
      order: 1;
      
    }
    
    h1{
      font-size: 2rem;
    }

    p{
      font-size: 1.4rem;
      line-height: 2rem;
    }

    .Atendent{
      height: 90%;
      width: 12rem;
      order: 2;
    }
  }

  @media (max-width: 610px){
      
    flex-direction: column;

    .text-about-area{
      width: 90%;
      row-gap: 10px;
      height: 20%;
      order: 1;
      
    }
    
    h1{
      font-size: 1rem;
      margin-left: 3px;

    }

    p{
      height: 280%;
      font-size: 0.8rem;
      line-height: 1rem;
    }

    .Atendent{
      width: 10rem;
      order: 2;
    }
  }
`

export const ContainerDefault = styled.div<ITitleProps>`
  position: relative;
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  .text-container {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 82px;
    text-align: center;

    ${props =>
      props.textColor === 'primary'
        ? css`
            color: #ffffff;
          `
        : css`
            color: #38b6ff;
          `}
  }

  .waves {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 455px) {
    .text-container {
      line-height: 50px;
      font-size: 40px;
    }
  }
`
