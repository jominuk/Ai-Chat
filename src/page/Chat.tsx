import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { useDarkMode } from "src/context/DarkModeContext";

const Chat = () => {
  const { setDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode((prevMode: any) => !prevMode);
  };

  return (
    <>
      <StGo onClick={() => navigate("/ai")}>Chat 바로가기</StGo>

      <Toggle
        icons={{
          checked: (
            <span role="img" aria-label="moon">
              🌙
            </span>
          ),
          unchecked: (
            <span role="img" aria-label="sun">
              ☀️
            </span>
          ),
        }}
        onChange={toggleDarkMode}
      />
    </>
  );
};

export default Chat;

const StGo = styled.div`
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
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
