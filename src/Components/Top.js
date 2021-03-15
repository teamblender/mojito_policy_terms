import React from "react";
import styled from "styled-components";
import MojitoImg from "../Img/mojito.png";

const Box = styled.div`
  width: 100%;
  height: calc(100% - 45%);
  position: relative;
  display: flex;
  justify-content: center;
`;

const Mojito = styled.img`
  height: 120px;
  position: absolute;
  bottom: -15px;
`;

const Top = () => {
  return (
    <Box>
      <Mojito src={MojitoImg}></Mojito>
    </Box>
  );
};

export default Top;
