import styled, { css } from "styled-components";

interface ITitleProps {
    textColor: string
    backgroundColor: string
} 
export const SobreNos = styled.div<ITitleProps>`
  position: relative;
  max-width: 100vw;
  display: flex;
  flex-direction: column;

  ${props =>
    props.backgroundColor === 'primary'
      ? css`
          background-color: #ffffff;
        `
      : css`
          background-color: #38b6ff;
        `}

  .text-container {
    font-family: 'Ruda', sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 82px;
    padding-left: 80px;
    margin-top: 20px;
    

    ${props =>
      props.textColor === 'primary'
        ? css`
            color: #ffffff;
          `
        : css`
            color: #38b6ff;
          `}
  }

  .about {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }

  .text-about-area {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    width: 50%;
  }

  .text-about-area h2 {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
    color: #ffffff;
    justify-content: left;
    margin-top: 10px;
  }

  .text-about-area p {
    font-family: 'Ruda', sans-serif;
    font-style: normal;
    font-size: 30px;
    line-height: 40px;
    color: #ffffff;
    justify-content: left;
    margin-bottom: 10px;

  }

  .Time {
    width: 50%;
    height: 50%; 

  }
  
  @media (max-width: 451px) {
    .text-container {
      width: 100%;
      line-height: 20px;
      font-size: 30px;
      text-align: center;
      margin-bottom: 30px;
      padding: 0;
    }

    .Time {
      bottom: 0;
    }

    .about {
      flex-direction: column;
      align-items: center;
      width:100%;
      padding-bottom: 50px;
    }
    
    .text-about-area {
      width: 80%;
    }

    .text-about-area h2 {
      font-size: 20px;
      line-height: 20px;
      justify-content: left;
    }

    .text-about-area p {
      font-size: 15px;
      line-height: 20px;
      justify-content: left;
    }
  
  
  }
  @media (min-width: 452px) and (max-width: 599px){
    .text-container {
      width: 100%;
      line-height: 40px;
      font-size: 50px;
      text-align: center;
      margin-bottom: 30px;
      padding: 0;
    }

    .Time {
      bottom: 0;
    }

    .about {
      flex-direction: column;
      align-items: center;
      width:100%;
      padding-bottom: 50px;
    }
    
    .text-about-area {
      width: 80%;
    }

    .text-about-area h2 {
      font-size: 35px;
      line-height: 40px;
      justify-content: left;
    }

    .text-about-area p {
      font-size: 30px;
      line-height: 30px;
      justify-content: left;
    }

  }

  @media (min-width: 600px) and (max-width: 1279px) {
    .text-container {
      width: 100%;
      line-height: 40px;
      font-size: 50px;
      text-align: center;
      margin-bottom: 30px;
      padding: 0;
    }

    .Time {
      bottom: 0;
          
    }

    .about {
      flex-direction: column;
      padding-bottom: 100px;
    }
    
    .text-about-area {
      width: 80%;
    }

    .text-about-area h2 {
      font-size: 35px;
      line-height: 40px;
      justify-content: left;
    }

    .text-about-area p {
      font-size: 30px;
      line-height: 30px;
      justify-content: left;
      margin-bottom: 20px;
    }
  
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    
    .Time {
      width: 30%;
      height: 30%; 
    }
    
  }

  @media (min-width: 1440px) {
    .Time {
      width: 30%;
      height: 30%; 
    }
    
  }
 
`