import {
  FormOutlined,
  DeleteOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  LeftSquareOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("快速创建", "1", <FormOutlined />),
  getItem("导入", "2", <LeftSquareOutlined />),
  getItem("我的演示", "3", <CalendarOutlined />),
  getItem("回收站", "4", <DeleteOutlined />),
  getItem("账户设置", "5", <SettingOutlined />),
  getItem("邀请推荐", "6", <LinkOutlined />),
  // getItem("我的演示", "sub1", <AppstoreOutlined />, [
  //   getItem("Option 3", "3"),
  //   getItem("Option 4", "4"),
  //   getItem("Submenu", "sub1-2", null, [
  //     getItem("Option 5", "5"),
  //     getItem("Option 6", "6"),
  //   ]),
  // ]),
  // getItem("Navigation Three", "sub2", <SettingOutlined />, [
  //   getItem("Option 7", "7"),
  //   getItem("Option 8", "8"),
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  // ]),
  // getItem(
  //   <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //     Ant Design
  //   </a>,
  //   "link",
  //   <LinkOutlined />
  // ),
];

const responsiveMenu = () => {
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const navigate = useNavigate();
  // console.log(navigate);
  // 定义菜单跳转的实际路由/页面
  const switchPath = (path) => {
    switch (path) {
      case "1":
        navigate("/folder/home");
        break;
      case "2":
        navigate("/folder/import");
        break;
      case "3":
        navigate("/folder/slides");
        break;
      case "4":
        navigate("/folder/trash");
        break;
      case "5":
        navigate("/folder/customized");
        break;
      case "6":
        navigate("/folder/setting");
        break;
      case "7":
        navigate("/folder/invite");
        break;
      default:
        navigate(`/folder/${path}`);
        break;
    }
  };
  const onClick = (e) => {
    // console.log(e);
    const path = e.keyPath[0];
    // const url = `/folder${switchPath(path)}`;
    // console.log(url);
    switchPath(path);
  };
  return (
    <Sider style={{ background: "white" }}>
      <Menu
        style={{}}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
        items={items}
        onClick={onClick}
      />
    </Sider>
  );
};

export default responsiveMenu;
