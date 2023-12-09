import styled from "styled-components";
import para_image from "../assets/PARA.png";

export const Button = styled.button`
  display: inline-flex;
  width: 300px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0);
  border-color: rgba(0,0,0,0);
  border: solid 1px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: rgba(170, 170, 170, 0.5);
  }
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
`;

// 부장 쀼장 이름 텍스트
export const WanjanNameText = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 120%;
`;

export const WanjangContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
`;

export const BigWanjangContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 40px;
`;

export const JiwonButton = styled.button`
  display: inline-flex;
  width: 300px;
  height: 60px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: #440C49;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  border: none;

  &:hover {
    background: #4f0d67;
  }
`;


export const ButtonText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 30.8px */
`;

export const Text = styled.div`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 39.2px */
`;

export const CareerText = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 39.2px */
`;

export const Line = styled.div`
  width: 3px;
  height: 150px;
  background: #D3D3D3;
  border-radius: 10px;
`;

export const PeriodText  = styled.div`
  color: #000;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  margin-top: 40px;
`;
export const Image = styled.div`
    width: 120px;
    height: 120px;
  
    
    border: solid 1px;
    border-color: black;
    border-radius: 10px;
    display: flex;
    background-image: url(${para_image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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

