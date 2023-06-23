import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Ai from "src/page/Ai";
import Chat from "src/page/Chat";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/ai"
            element={<Ai darkMode={""} children={undefined} />}
          />
          <Route path="/" element={<Chat />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
