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
  @media(max-width: 414px){
    position: relative;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: start;
      justify-content: space-around;
      flex-direction: column;
      
      
    }

    .waves {
      position: absolute;
      bottom: 0;
      width: 100vw;
    }
    .peoples {
      width: 100vw;
      
    }
  }

  @media(min-width: 800px) and (max-width: 1279px) {
    position: relative;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    



    .content {
      width: 100%;
      height: 100%;
      //margin-top: -200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      
      
    }

    .waves {
      position: absolute;
      bottom: 0;
    }
  }
  
  
  @media(min-width: 1280px) and (max-width: 1439px){
    position: relative;
    max-width: 100vw;
    height: 930px;
    display: flex;
    align-items: center;

    .content {
      width: 100%;
      height: 600px;
      display: flex;
      align-items: start;
      justify-content: space-around;
      
    }

    .waves {
      position: absolute;
      bottom: 0;
    }
  }
  @media(min-width: 1440px){
    position: relative;
    max-width: 100vw;
    height: 930px;
    display: flex;
    align-items: center;

    .content {
      width: 100%;
      height: 600px;
      display: flex;
      align-items: start;
      justify-content: space-around;
      
    }

    .waves {
      position: absolute;
      bottom: 0;
    }
  }
`

export const TextContent = styled.div`
  @media(max-width: 414px){
    margin-left: 50px;
    margin-top: 10px;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    h1 {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 30px;
      line-height: 50px;
      text-align: start;
      color: #38b6ff;
    }

    p {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #38b6ff;
    }
  }

  @media(min-width: 800px) and (max-width: 1279px){
    margin-top: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    text-align: center;
    

    h1 {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 60px;
      line-height: 80px;
      text-align: start;
      color: #38b6ff;
    }

    p {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 35px;
      line-height: 40px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #38b6ff;
    }
  }
  

  @media(min-width: 1280px) and (max-width: 1439px){
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-left: 30px;

    h1 {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 65px;
      line-height: 82px;
      display: flex;
      align-items: center;
      color: #38b6ff;
    }

    p {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 31.8369px;
      line-height: 39px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #38b6ff;
    }
  }
  
  @media(min-width: 1440px){
    width: 655px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    h1 {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 65px;
      line-height: 82px;
      display: flex;
      align-items: center;
      color: #38b6ff;
    }

    p {
      font-family: 'Ruda', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 31.8369px;
      line-height: 39px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #38b6ff;
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
    height: 590px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30px;
  }

  p {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 49px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`
