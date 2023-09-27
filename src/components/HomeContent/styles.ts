import styled from 'styled-components'

export const ContentSection = styled.section`
  width: 100%;
  margin: 200px;
  background-color: white;

  font-family: 'Ruda', sans-serif;
`

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 0;
  padding: 0.25rem;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border: 1px solid red;
    justify-content: center;
    gap: 50px;
    
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
  text-align: center;
  font-size: 30px;
`
