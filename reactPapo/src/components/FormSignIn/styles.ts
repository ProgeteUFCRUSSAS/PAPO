import styled from 'styled-components'

export const ContainerForm = styled.form`
  position: absolute;
  top: 120px;
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #ffff;
    font-size: 20px;
  }

  button {
    width: 230px;
    height: 60px;
    border: 0;
    background: #1644ff;
    box-shadow: 0px 13.75px 55px -16.5px #1351b4;
    border-radius: 11px;
    margin: 0 auto;

    font-size: 18px;
    color: #ffff;
  }
`

export const Input = styled.input`
  width: 400px;
  height: 50px;
  padding: 10px;
  border: 0;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 13.75px;

  :focus {
    outline: 0;
  }
`
