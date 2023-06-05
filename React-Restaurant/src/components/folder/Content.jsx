import {
  FormOutlined,
  DeleteOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  LeftSquareOutlined,
} from "@ant-design/icons";

import { Layout } from "antd";
import { speechList, docList } from "@/data/folder";
import { PlayCircleFilled } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const responsiveContent = () => {
  const { Content } = Layout;
  // 点击li切换背景色并改变下方的content
  const setActive = (e) => {
    console.log(e);
  };
  return <Content style={{}}>{/* <Outlet></Outlet> */}</Content>;
};

export default responsiveContent;
