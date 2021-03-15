import React from "react";
import styled from "styled-components";

const Box = styled.div`
  height: 45%;
  min-height: 200px;
  display: flex;
  width: 100vw;
  background-color: rgba(30, 30, 30, 1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.a`
  margin-top: 20px;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 54, 54, 1);
  border-radius: 20px;
  font-size: 12px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Bottom = () => {
  return (
    <Box>
      <Button
        href="https://apps.apple.com/kr/app/%EB%AA%A8%EC%A7%80%EB%98%90-%EB%8D%B0%EC%9D%BC%EB%A6%AC-%EC%9D%B4%EB%AA%A8%EC%A7%80-%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC/id1508866668"
        target="_blank"
      >
        애플 버전
      </Button>
      <Button
        href="https://play.google.com/store/apps/details?id=com.blender.mojito"
        target="_blank"
      >
        안드로이드 버전
      </Button>
      <Button href="https://teamblender.co" target="_blank">
        팀 블렌더
      </Button>
    </Box>
  );
};

export default Bottom;
