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
