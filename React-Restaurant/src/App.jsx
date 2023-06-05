import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/views/homePage";
import Folder from "@/views/folder";
import Login from "@/views/login";
import NotFound from "@/views/notFound";
import FolderHome from "@/components/folder/sub/folderHome.jsx";
import FolderImport from "@/components/folder/sub/FolderImport.jsx";
import FolderSlides from "@/components/folder/sub/FolderSlides.jsx";
import FolderTrash from "@/components/folder/sub/FolderTrash.jsx";
import FolderCustomized from "@/components/folder/sub/FolderCustomized.jsx";
import FolderSetting from "@/components/folder/sub/FolderSetting.jsx";
import FolderInvite from "@/components/folder/sub/FolderInvite.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/*  <Redirect from="/folder" to="/folder/home" />  <Navigate to="/folder/home" /> */}
        <Route path="/folder" exact element={<Folder />}>
          <Route path="/folder/home" element={<FolderHome />} />
          <Route path="/folder/import" element={<FolderImport />} />
          <Route path="/folder/slides" element={<FolderSlides />} />
          <Route path="/folder/trash" element={<FolderTrash />} />
          <Route path="/folder/customized" element={<FolderCustomized />} />
          <Route path="/folder/setting" element={<FolderSetting />} />
          <Route path="/folder/invite" element={<FolderInvite />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
