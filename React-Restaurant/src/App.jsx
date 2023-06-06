import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/views/homePage";
import Folder from "@/views/folder";
import Login from "@/views/login";
import NotFound from "@/views/notFound";
// folder子页面
import FolderHome from "@/components/folder/sub/folderHome.jsx";
import FolderImport from "@/components/folder/sub/FolderImport.jsx";
import FolderSlides from "@/components/folder/sub/FolderSlides.jsx";
import FolderTrash from "@/components/folder/sub/FolderTrash.jsx";
import FolderSetting from "@/components/folder/sub/FolderSetting.jsx";
import FolderInvite from "@/components/folder/sub/FolderInvite.jsx";

import PPtTemplates from "@/views/pptTemplates";
import PaidTemplates from "@/views/paidTemplates";
import OtherInfo from "@/views/otherInfo";
import Help from "@/views/help";

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
          <Route path="/folder/setting" element={<FolderSetting />} />
          <Route path="/folder/invite" element={<FolderInvite />} />
        </Route>
        <Route path="/templates" element={<PPtTemplates />} />
        <Route path="/paidtemplates" element={<PaidTemplates />} />
        <Route path="/otherinfo" element={<OtherInfo />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        {/* 若有其他路径 跳至notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
