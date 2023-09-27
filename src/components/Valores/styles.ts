import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 35.1231rem;
  height: 15.6513rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #ffffff;
  padding: 0.925rem 0.625rem;

  @media (min-width: 20rem) and (max-width: 28.125rem) {
      width: 95%;
      height: 15%;
      border-radius: 1.25rem;
      padding: 0.3rem 0.425rem;
      border: 1px solid red;
  }

  @media (min-width: 37.5rem) {
    width: 80%;
    height: 20%;
    margin: 0.625rem;
    border-radius: 1.25rem;
    padding: 8rem 0.5rem;
}

  display: flex;
  align-items: top;
  flex-direction: column;

  p {
    font: Ubuntu;
    font-weight: 400;
    size: 2.8669rem;
    line-height: 3.0088rem;
  }

  @media (min-width: 20rem) and (max-width: 25.875rem) {
    p {
      font: Ubuntu;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 2rem;
    }
  }

  @media (min-width: 37.5rem) and (max-width: 64rem) {
    p {
      font: Ubuntu;
      font-weight: 400;
      font-size: 1.9rem;
      line-height: 2.5rem;
    }
}
`

export const LabelCard = styled.span`
  position: absolute;
  top: -6.25rem;
  left: 0.625rem;
  font-family: Ubuntu, sans-serif;
  font-size: 3.125rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 20rem) and (max-width: 25.875rem) {
    top: -4.25rem;
    left: 2%;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
`
