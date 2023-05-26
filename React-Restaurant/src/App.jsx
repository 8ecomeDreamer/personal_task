import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/views/homePage";
import Folder from "@/views/folder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
