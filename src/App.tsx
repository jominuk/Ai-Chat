import React from "react";
import Router from "./shared/Router";
import DarkModeProvider from "./context/DarkModeContext";

const App = () => {
  return (
    <>
      <DarkModeProvider darkMode={Boolean}>
        <Router />
      </DarkModeProvider>
    </>
  );
};

export default App;
