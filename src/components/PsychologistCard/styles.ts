import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  width: 60%;
  height: 300px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  gap: 30%;
  gap: 10px;
`
export const ImagePsyc = styled.img`
  position: absolute;
  top: 30px;
  left: -60px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #fff;
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
    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.04em;
    text-align: left;
  }

  .city,
  .crp,
  .assessments {
    font-family: Ruda, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.04em;
    text-align: left;
  }

  .assessments {
    text-decoration: none;
    color: rgba(2, 146, 183, 1);
  }
`

export const Schedules = styled.div`
  position: relative;
  width: 50%;
  border-left: 2px solid rgba(56, 182, 255, 1);

  &::after {
    position: absolute;
    content: '';
    top: 40px;
    width: 100%;
    height: 1px;
    background-color: rgba(56, 182, 255, 1);
  }

  .title-schedules {
    margin-left: 0.75rem;
    font-family: Inter, sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 2.1875rem;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(2, 146, 183, 1);
  }
`
