import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  height: ${(props) => (props.main ? "100vh" : "")};
`;

const SmallBox = styled.div`
  max-width: 500px;
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Container = ({ children, main }) => {
  return (
    <Box main={main}>
      <SmallBox main={main}>{children}</SmallBox>
    </Box>
  );
};

export default Container;
