import styled from 'styled-components'

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  gap: 0;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 770px) and (max-width: 800px) {
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
`
export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background: #a6b8b9;
  padding: 1rem;
  width: 30%;
  height: 100%;
  background-color: white;

  @media (max-width: 800px) {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  img {
    width: 400.94px;
    height: 277.38px;
  }
`

export const ContentText = styled.p`
  width: 100%;
  color: #4b4b4b;
  text-align: center;

  @media (max-width: 800px) and (min-width: 599px) {
    width: 50%;
  }
`
export const ContentTitle = styled.h1`
  color: #38b6ff;
  text-align: center;
  font-size: 30px;
`
