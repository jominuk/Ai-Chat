import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DarkMode, DarkModeContextType } from "src/type/type";

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {}, // Update the default value of setDarkMode
  toggleDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider: FC<DarkMode> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState<boolean>(storedDarkMode === "true");

  //다크모드 상태 유지를 위해 저장 위치를 만듬
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // 다크모드 버튼도 같이 context로
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
