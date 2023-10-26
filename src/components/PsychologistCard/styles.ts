import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 60%;
  min-height: 300px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  justify-content: center;
  gap: 30%;
  gap: 10px;

  @media (max-width: 500px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const ImagePsyc = styled.img`
  position: absolute;
  top: 30px;
  left: -60px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #fff;

  @media (max-width: 500px) {
    left: -35px;
  }
`

export const DataPsyc = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 80px;
  gap: 5px;

  .name-psyc {
    width: 100%;
    font-family: Ruda, sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 48px;
    letter-spacing: 0.04em;
    text-align: left;
    color: rgba(56, 182, 255, 1);
  }

  .acting-area {
    font-family: Ruda, sans-serif;
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 0.625rem;
  }

  .city,
  .crp,
  .assessments {
    font-family: Ruda, sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 0.625rem;
  }

  .assessments {
    text-decoration: none;
    color: rgba(2, 146, 183, 1);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Schedules = styled.div`
  width: 50%;
  border-left: 2px solid rgba(56, 182, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 15px;

  .title-schedules {
    width: 100%;
    font-family: Inter, sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(2, 146, 183, 1);
    border-bottom: 2px solid rgba(56, 182, 255, 1);
  }

  .container-biography-scheduling {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  .text-biography {
    width: 90%;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.04em;
    text-align: justify;
  }

  .button-scheduling {
    height: 40px;
    padding: 0 20px;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 20px;
    color: #fff;
    font-size: 24px;
    transition: 0.25s ease-in-out;
  }

  .button-scheduling:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.25s ease-in-out;
  }

  @media (max-width: 900px) {
    width: 100%;
    border: none;

    .button-scheduling {
      width: 100%;
    }
  }
`
