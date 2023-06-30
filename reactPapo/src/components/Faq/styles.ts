import styled from 'styled-components'

export const ContainerFaq = styled.div`
  width: 100%;
  min-height: 47.5rem;
  margin-top: 3.125rem;
  gap: 0;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const Card = styled.div`
  position: relative;
  width: 35.1231rem;
  height: 15.6513rem;
  border-radius: 1.25rem;
  border: 0.0625rem solid #38b6ff;
  padding: 0.925rem 0.625rem;

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
`

export const LabelCard = styled.span`
  position: absolute;
  top: -4.25rem;
  font-family: Ubuntu, sans-serif;
  font-size: 2.525rem;
  font-weight: 700;
  line-height: 3.25rem;
  text-align: center;
  color: #38b6ff;
`
