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
  height: 930px;
  display: flex;
  align-items: center;

  .waves {
    position: absolute;
    bottom: 0;
  }
`

export const TextContent = styled.div`
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
