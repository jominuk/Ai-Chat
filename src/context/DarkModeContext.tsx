import React, {
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DarkMode } from "src/type/type";

const DarkModeContext = createContext<any>({});

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider: FC<DarkMode> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
