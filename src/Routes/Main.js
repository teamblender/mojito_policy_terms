import React from "react";
import styled from "styled-components";
import Container from "../Components/Container";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Center from "../Components/Center";
import { Helmet } from "react-helmet";

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  return (
    <>
      <Helmet title="Mojito Policy/Terms"></Helmet>
      <Container main={true}>
        <Box>
          <Header></Header>
          <Center></Center>
          <Footer></Footer>
        </Box>
      </Container>
    </>
  );
};

export default Main;
