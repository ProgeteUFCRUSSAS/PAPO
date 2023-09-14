import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  width: 35.1231rem;
  height: 15.6513rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #ffffff;
  padding: 0.925rem 0.625rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font: Ubuntu;
    font-weight: 400;
    size: 2.8669rem;
    line-height: 3.0088rem;
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
`
