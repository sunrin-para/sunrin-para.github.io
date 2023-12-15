import React from "react";
import styled from 'styled-components';

const Container = styled.div`
   width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 220px;
    background: #313131;
    @media (max-width: 500px) {
      height: 110px;
    }
`;

const Footer = () => {
    return (
        <Container>
        </Container>
    );
};

export default Footer;
