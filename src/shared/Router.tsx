import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "src/ui/Layout";
import Ai from "src/page/Ai";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Ai />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
