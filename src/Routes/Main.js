import React from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import { Helmet } from "react-helmet";
import LogoImg from "../Img/logo.png";
import MojitoImg from "../Img/mojito.png";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Mojito = styled.img`
  height: 120px;
`;

const Button = styled(Link)`
  margin-top: 20px;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 20px;
  font-size: 12px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const ButtonA = styled.a`
  margin-top: 20px;
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 20px;
  font-size: 12px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Logo = styled.img`
  margin-top: 20px;
  position: fixed;
  opacity: 0.5;
  height: 20px;
  top: 0;
`;

const Main = () => {
  return (
    <>
      <Helmet title="Mojito Policy/Terms"></Helmet>
      <Container main={true}>
        <Box>
          <Logo src={LogoImg}></Logo>
          <Mojito src={MojitoImg}></Mojito>
          <Button to="/privacy">개인정보처리방침</Button>
          <Button to="/service">서비스이용약관</Button>
          <ButtonA href="https://teamblender.co" target="_blank">
            팀 블렌더
          </ButtonA>
        </Box>
      </Container>
    </>
  );
};

export default Main;
