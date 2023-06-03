import Header from "@/components/folder/Header";
import Menu from "@/components/folder/Menu";
import Content from "@/components/folder/Content";
import { Layout, theme } from "antd";

// import React, { Fragment } from "react";
// import { Layout, Menu, theme } from "antd";

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
// import {
//   EnterOutlined
// } from "@ant-design/icons";
// import { folderSiderMenu } from '@/data/folder';

// Header
// const {  Content, Sider } = Layout;

const folder = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="">
      {/* <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      /> */}
      <Header></Header>
      <div className="flex h-screen flex-grow bg-black">
        <Layout>
          <Menu></Menu>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content></Content>
          </Layout>
        </Layout>
      </div>
    </Layout>
  );
};
export default folder;
