import React, {useRef, useState} from "react";

import {Line} from "./Elements";

import styled from "styled-components";
import para_image from "../assets/PARA.png";

const Container = styled.div`
  height: 110vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const TitleText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  @media (max-width: 800px) {
    font-size: 26px;
  }
`;

const BigWanjangContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 40px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;

const PeriodText  = styled.div`
  color: #000;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  margin-top: 40px;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

// 부장 쀼장 이름 텍스트
const WanjanNameText = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 120%;
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const WanjangContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
`;

const Text = styled.div`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 39.2px */
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;


const CareerText = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 39.2px */
`;

const Image = styled.div`
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
    @media (max-width: 800px) {
      display: none;
    }
`;


const Button = styled.button`
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

  @media (max-width: 800px) {
    width: 200px;
    height: 40px;
    border-radius: 10px;  
  }
`;


const JiwonButton = styled.button`
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
  @media (max-width: 800px) {
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
`;

const ButtonText = styled.div`
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 30.8px */
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Jiwon = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const startTime = new Date('2023-12-15T00:00:00');

    const endTime = new Date("2023-12-27T23:59:59");
    function toParaInsta(){
        window.open("https://www.instagram.com/sunrin_para/", "_blank", "noreferrer");
    }

    const TimeUpdate = ()=>{

        let currentTime = new Date();

        let period = document.getElementById("Period");
        if (period == null) return;

        let result = "";
        if (startTime.getFullYear() !== currentTime.getFullYear() || endTime.getDate() < currentTime.getDate()) {
            result = "시간이 이미 모두 지났습니다.";
            clearInterval(timer);
        } else {
            let timeDiff = startTime - currentTime;
            let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            result = `지원 기간 : 12월 15일 ~ 12월 27일<br>
                지원 시작까지 남은 시간 : ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
        }

        period.innerHTML = result;

    }
    let timer = setInterval(TimeUpdate, 1000);

    return(
        <Container>

            <TitleText> 지원 안내 및 문의 </TitleText>
            <PeriodText id={"Period"}> 지원 기간 : 12월 15일 ~ 12월 27일 </PeriodText>
            <BigWanjangContainer>
                <WanjangContainer>
                    <Image/>
                    <WanjanNameText>동아리 문의 연락처</WanjanNameText>
                    <Text>Insta : @sunrin_para<br/>
                    facebook : 미개설</Text>
                </WanjangContainer>
                <Line/>
                <WanjangContainer>
                    <WanjanNameText>부장 이정훈</WanjanNameText>
                    <Text>Insta : @compy07&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Tell : 01012341234</Text>
                    <WanjanNameText style={{marginTop:"30px"}}>쀼장 유채호</WanjanNameText>
                    <Text>Insta : @chaeho_yu&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Tell : 01012341234</Text>
                    <CareerText>
                    </CareerText>
                </WanjangContainer>

            </BigWanjangContainer>

            <Button onClick={toParaInsta} style={{marginTop:'40px'}}>
                <ButtonText style={{color: "black"}}>인스타그램으로 문의</ButtonText>
            </Button>

            <JiwonButton onClick={() => {setModalIsOpen(true);}}>
                <ButtonText>PARA 지원하기</ButtonText>
            </JiwonButton>

        </Container>
    )
}

export default Jiwon;
