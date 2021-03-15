import React from "react";
import styled from "styled-components";
import LogoImg from "../Img/logo.png";

const Box = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  opacity: 0.5;
  height: 20px;
`;

const Header = () => {
  return (
    <Box>
      <Logo src={LogoImg}></Logo>
    </Box>
  );
};

export default Header;
