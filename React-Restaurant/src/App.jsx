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
import PPtEdit from "@/views/pptEdit";
import PaidTemplates from "@/views/paidTemplates";
import Help from "@/views/help";
import HelpDetail from "@/views/helpDetail";
// import PPtDetail from "@/views/pptDetail";

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
        <Route path="/help" element={<Help />} />
        <Route path="/helpDetail" element={<HelpDetail />} />
        {/* <Route path="/pptDetail" element={<PPtDetail />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/edit/?:templateld" element={<PPtEdit />}></Route>
        {/* 若有其他路径 跳至notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
