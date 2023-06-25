import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Chat = () => {
  const navigate = useNavigate();

  return <StGo onClick={() => navigate("/ai")}>Chat 바로가기</StGo>;
};

export default Chat;

const StGo = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 40px;
  width: 150px;
  font-size: 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: black;
  }
`;
