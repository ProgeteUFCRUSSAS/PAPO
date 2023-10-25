import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const ContainerPsic = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  gap: 20px;

  .image-profile-psic {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 250px;
    height: 250px;
  }

  @media (max-width: 800px) {
    .image-profile-psic {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const DataPsic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 450px) {
    gap: 30px;
  }
`

export const InfosPsic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-family: Ruda, sans-serif;
  text-align: justify;
  line-height: normal;
  font-style: normal;

  h2 {
    color: #38b6ff;
    font-size: 41.702px;
    font-weight: 600;
    letter-spacing: 1.668px;
  }

  h3 {
    color: #000;
    font-size: 29.539px;
    font-weight: 700;
    letter-spacing: 1.182px;
  }

  h4 {
    color: #000;
    font-size: 29.539px;
    font-weight: 400;
    letter-spacing: 1.182px;
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 32px;
    }

    h3,
    h4 {
      font-size: 22px;
    }
  }
`

export const BiographyPsic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-family: Ruda, sans-serif;
  text-align: justify;
  line-height: normal;
  font-style: normal;

  h2 {
    color: rgba(56, 182, 255, 1);
    font-size: 34.752px;
    font-weight: 700;
    letter-spacing: 1.39px;
  }

  p {
    color: #000;
    font-size: 27.801px;
    font-weight: 400;
    letter-spacing: 1.112px;
  }
`

export const LinksSocialMedia = styled.nav`
  li {
    list-style: none;
    margin-bottom: 10px;
  }

  li a {
    color: rgba(56, 182, 255, 1);
    font-size: 48px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  li a:hover {
    color: #000;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 450px) {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }
`

export const ButtonScheduleAppoiment = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 15px;
    text-decoration: none;
    border-radius: 15px;
    color: #fff;
    font-family: Ruda, sans-serif;
    font-size: 33.759px;
    background-color: rgba(56, 182, 255, 1);
    text-align: center;
  }

  @media (max-width: 450px) {
    a {
      width: 100%;
    }
  }
`

export const FrameLocalization = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: rgba(56, 182, 255, 1);
    font-size: 34.752px;
    font-weight: 700;
    letter-spacing: 1.39px;
  }

  .frame-localization-psic {
    width: 100%;
    height: 500px;
    border: none;
  }
`
