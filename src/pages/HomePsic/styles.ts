import styled from 'styled-components'

export const PagePsyc = styled.div`
  max-width: 100vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const TitleWithIconFilter = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: Ruda, sans-serif;
    font-size: 54px;
    font-weight: 600;
    line-height: 66px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(56, 182, 255, 1);
  }

  .icon {
    width: 72.38px;
    height: 72.38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 38px;
    color: #fff;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    border: none;
  }
`

export const FilterPsyc = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
`
