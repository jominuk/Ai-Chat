import React, { FC, createContext, useContext, useState } from "react";
import { DarkMode } from "src/type/type";

const DarkModeContext = createContext<any>({});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: FC<DarkMode> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
