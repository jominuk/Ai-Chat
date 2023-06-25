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
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

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
