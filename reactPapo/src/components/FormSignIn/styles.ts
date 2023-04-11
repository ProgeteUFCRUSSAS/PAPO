import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p{
    color: #ffff;
    font-size: 20px;
  }
  
  button{
    width: 230px;
    height: 60px;
    border: 0;
    background: #1644FF;
    box-shadow: 0px 13.75px 55px -16.5px #1351B4;
    border-radius: 11px;
    margin: 0 auto;

    font-size: 18px;
    color: #FFFF;
  }
`

export const Input = styled.input`
  width: 400px;
  height: 60px;
  padding: 5px;
  border: 0;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 10px;
  
  background: #FFFFFF;
  box-shadow: 0px 13.75px 55px rgba(0, 0, 0, 0.337);
  border-radius: 13.75px;

  :focus{
    outline: 0;
  }
`