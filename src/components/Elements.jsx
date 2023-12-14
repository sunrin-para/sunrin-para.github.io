import styled from "styled-components";
import para_image from "../assets/PARA.png";












export const Line = styled.div`
  width: 3px;
  height: 150px;
  background: #D3D3D3;
  border-radius: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`;



export const Input = styled.input`
  width: 350px;
  height: 30px;
  font-size: 18px;
  margin: 10px 20px 10px 10px;
  border: solid;
  border-color: black;
  border-radius: 100px 100px;
  
`;
export const Select = styled.select`
  width: 50px;
  height: 30px;
  
  font-size: 20px;
  
`;

