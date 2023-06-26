import React, { useState, useRef, useEffect, FormEvent } from "react";
import { Configuration, OpenAIApi } from "openai";
import { styled } from "styled-components";
import { Message, Sender } from "src/type/type";
import { useDarkMode } from "src/context/DarkModeContext";

const Ai = () => {
  const { darkMode } = useDarkMode();

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newMessage: Message = { content: inputValue, sender: "me" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue("");

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY || "",
    });
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: inputValue,
        // ai 에게 질문 보내는 코드
        temperature: 1,
        //0 ~ 1수준의 응답의 창의성을 나타냄 결국 0은 아주 짧게 1은 길게 ~
        max_tokens: 256,
        // 최대 토큰 입력해준다. ex 1토큰에 영문 4자 답변을 해준다. 이 길이만큼 출력을 제한됨
        top_p: 1,
        // 1과 같은 높을 숫자일 수록 다양한 응답이 생성
        frequency_penalty: 1,
        presence_penalty: 0,
      })
      .then((result) => {
        // 답변은 result변수에 잘 들어있음
        const response = result.data.choices[0].text || "";
        const newResponseMessage: Message = {
          content: response,
          sender: "ai",
        };
        setMessages((prevMessages) => [...prevMessages, newResponseMessage]);
      });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <StForm onSubmit={handleSendMessage} darkMode={darkMode}>
        <StChatContainer>
          {messages.map((message, index) => (
            <StMessageContainer key={index} sender={message.sender}>
              <StMessage sender={message.sender}>{message.content}</StMessage>
            </StMessageContainer>
          ))}
          <div ref={messagesEndRef} />
        </StChatContainer>
        <StInputContainer>
          <StInput
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            placeholder="메시지 입력..."
          />
          <StButton type="submit">전송</StButton>
        </StInputContainer>
      </StForm>
    </>
  );
};

export default Ai;

const StForm = styled.form<{ darkMode: any }>`
  background-color: ${({ darkMode }) => (darkMode ? "#333" : "#f2f2f2")};
  width: 350px;
  height: 600px;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #b0c8ea; /* 스크롤바의 색상 */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(137, 180, 43, 0.24); /*스크롤바 뒷 배경 색상*/
  }

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const StChatContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StMessageContainer = styled.div<Sender>`
  display: flex;
  justify-content: ${({ sender }) =>
    sender === "me" ? "flex-end" : "flex-start"};
  margin-bottom: 10px;
`;

const StMessage = styled.div<Sender>`
  background-color: ${({ sender }) =>
    sender === "me" ? "#DCF8C6" : "#E8E8E8"};
  color: ${({ sender }) => (sender === "me" ? "#000" : "#333")};
  padding: 8px 12px;
  border-radius: 10px;
`;

const StInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 2px solid #ddd;
`;

const StInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 3px;
`;

const StButton = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;

  // 주석을 한 이유는 이렇게도 사용이 가능하다는걸 보여주고 싶은 경우
  /* transition: background-color 0.3s; */

  &:hover {
    /* background-color: #1a671e; */
    color: black;
  }
`;
