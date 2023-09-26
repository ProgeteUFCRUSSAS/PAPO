import styled from 'styled-components'

export const ContainerFaq = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.125rem;
  gap: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 35.1231rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export const LabelCard = styled.span`
  font-family: Ubuntu, sans-serif;
  font-size: 2.525rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: #38b6ff;

  @media (max-width: 600px) {
    font-size: 25px;
  }
`

export const TextContainer = styled.div`
  width: 35.1231rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #38b6ff;
  padding: 0.925rem 0.625rem;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-family: Ubuntu, sans-serif;
    font-size: 2.1875rem;
    font-weight: 400;
    line-height: 2.6875rem;
    text-align: left;
    color: rgba(56, 182, 255, 1);
  }

  @media (max-width: 600px) {
    width: 90%;

    p {
      font-size: 25px;
      text-align: justify;
    }
  }
`
