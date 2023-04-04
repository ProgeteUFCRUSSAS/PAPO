import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`

export const Input = styled.input`
  width: 300px;
  height: 50px;
  padding: 5px;
  background-color: #AAACAF;
  color: rgb(150,150,150);
  border: 0;
  font-size: 16px;
  border-radius: 5px;
`

export const Label = styled.p`
  color: #ffff;
  display: block;
  text-align: start;
`