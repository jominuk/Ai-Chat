import React, { FC } from "react";
import styled from "styled-components";
import { LayoutProps } from "src/type/type";
import { useDarkMode } from "src/context/DarkModeContext";

const Layout: FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <StBackLay darkMode={darkMode}>
      <StLayout>{children}</StLayout>
    </StBackLay>
  );
};

export default Layout;

const StBackLay = styled.div<{ darkMode: any }>`
  background-color: ${({ darkMode }) => (darkMode ? "black" : "powderblue")};
  min-height: 100vh; /* Set the minimum height of the container to 100% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLayout = styled.div`
  margin: auto;
  border-radius: 10px;
`;
