import React, { FC, createContext, useContext, useState } from "react";

const DarkModeContext = createContext<any>({});

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider: FC<any> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
