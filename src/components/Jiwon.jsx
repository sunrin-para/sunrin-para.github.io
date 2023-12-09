import React, {useRef, useState} from "react";

import {Button, JiwonButton, TitleText, ButtonText,
    Text, CareerText, Line, PeriodText,
    BigWanjangContainer, WanjangContainer,
    WanjanNameText, Image,
    } from "./Elements";

import styled from "styled-components";

const Container = styled.div`
  height: 110vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Jiwon = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    let startTime = new Date("2023-12-15");
    let endTime = new Date("2023-12-27");

    function toParaInsta(){
        window.open("https://www.instagram.com/sunrin_para/", "_blank", "noreferrer");
    }
    function msToTime(s) {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;

        return `지원 기간 : 12월 15일 ~ 12월 27일<br>
        지원 시작까지 남은 시간 : ${parseInt(hrs / 24)}일 ${hrs % 24}시간 ${mins}분 ${secs}초`;//hrs + ':' + mins + ':' + secs + '.' + ms;
    }
    const TimeUpdate = ()=>{
        let currentTime = new Date();
        let period = document.getElementById("Period");
        if(period == null) return;
        let result = ""
        if(startTime.getFullYear() !== currentTime.getFullYear() ||
            endTime.getDate() < currentTime.getDate()){
            result = "시간이 이미 모두 지났습니다."
            clearInterval(timer);
        }
        else result = msToTime(startTime - currentTime);
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

            <Button onClick={toParaInsta} style={{marginTop:'20px'}}>
                <ButtonText style={{color: "black"}}>인스타그램으로 문의</ButtonText>
            </Button>

            <JiwonButton onClick={() => {setModalIsOpen(true);}}>
                <ButtonText>PARA 지원하기</ButtonText>
            </JiwonButton>

        </Container>
    )
}

export default Jiwon;
