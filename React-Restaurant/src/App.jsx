import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/views/homePage";
import Folder from "@/views/folder";
import Login from "@/views/login";
import NotFound from "@/views/notFound";
import FolderHome from "@/views/FolderHome";
import FolderImport from "@/views/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/folder" element={<Folder />}>
          <Route path="/home" element={<FolderHome />} />
          {/* <Route path="/import" element={<FolderImport />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
