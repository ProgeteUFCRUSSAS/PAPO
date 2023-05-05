import styled from 'styled-components'

export const ContentSection = styled.section`
  background-color: white;
  height: 100vh;
  font-family: 'Ruda', sans-serif;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  margin: 0 auto;
  justify-content: space-between;
  width: 1370.5px;
  height: 543.41px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
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
  width: 25vw;
  height: 100%;
  background-color: white;
  @media screen and (max-width: 768px) {
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
  color: #4b4b4b;
`
export const ContentTitle = styled.h1`
  color: #38b6ff;
`
