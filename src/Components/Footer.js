import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: rgba(30, 30, 30, 1);
  justify-content: center;
  align-items: center;
`;

const Terms = styled(Link)`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.3);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Border = styled.div`
  font-size: 12px;
  padding: 10px;
  color: rgba(255, 255, 255, 0.3);
`;

const Header = () => {
  return (
    <Box>
      <Terms to="/privacy">개인정보처리방침</Terms>
      <Border>|</Border>
      <Terms to="/service">서비스이용약관</Terms>
    </Box>
  );
};

export default Header;
