import React from "react";
import styled from "styled-components";
import Top from "./Top";
import Bottom from "./Bottom";

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <Box>
      <Top></Top>
      <Bottom></Bottom>
    </Box>
  );
};

export default Header;
