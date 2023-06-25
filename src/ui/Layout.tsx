import React, { FC } from "react";
import styled from "styled-components";
import { DarkMode, LayoutProps } from "src/type/type";
import { useDarkMode } from "src/context/DarkModeContext";
import Toggle from "react-toggle";
import "react-toggle/style.css";

const Layout: FC<LayoutProps> = ({ children }) => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode((prevMode: any) => !prevMode);
  };

  return (
    <StBackLay darkMode={darkMode}>
      <StLayout>
        {/* <StToggle onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </StToggle> */}

        <ToggleContainer>
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
            checked={darkMode}
          />
        </ToggleContainer>

        {children}
      </StLayout>
    </StBackLay>
  );
};

export default Layout;

const StBackLay = styled.div<{ darkMode: DarkMode }>`
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

const ToggleContainer = styled.div`
  margin: 0 0 30px 50px;
`;

// const StToggle = styled.div`
//   margin: 0 0 30px 50px;
// `;
