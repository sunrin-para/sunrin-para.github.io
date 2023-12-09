import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: fixed;
  top: ${({ isScrolled }) => (isScrolled ? '0' : '-200px')};
  transition: top 0.5s ease-in-out;
  width: 100%;
  z-index: 1000;
  display: flex;
  padding: 15px 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 100px;
  background: rgba(255, 255, 255, 0.30);
  backdrop-filter: blur(2px);
`;

const Button = styled.button`
  display: flex;
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0);
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: rgba(170, 170, 170, 0.5);
  }
`;

const ButtonText = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const move = (seq)  => {
        window.scrollTo({
            top:window.innerHeight * seq,
            behavior: "smooth"
        });

    }
    return (
        <Container isScrolled={isScrolled}>
            <Button onClick={() => {move(0);}}>
                <ButtonText >Home</ButtonText>
            </Button>
            <Button onClick={() => {move(1);}}>
                <ButtonText>Introduce</ButtonText>
            </Button>
            <Button onClick={() => {move(2);}}>
                <ButtonText>Curriculum</ButtonText>
            </Button>
            <Button onClick={() => {move(3);}}>
                <ButtonText>Apply & Inquiry</ButtonText>
            </Button>
        </Container>
    );
};

export default Header;
