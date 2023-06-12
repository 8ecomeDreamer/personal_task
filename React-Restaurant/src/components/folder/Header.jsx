import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { navList } from "@/data/folder.jsx";
import { useState } from "react";
const { Header } = Layout;
// 跳转
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// const {
//   token: { colorBgContainer },
// } = theme.useToken();
const loginedDropDown = [
  {
    key: "账户设置",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/folder/setting">
        账户设置
      </a>
    ),
  },
  {
    key: "邀请推荐",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/folder/invite">
        邀请推荐
      </a>
    ),
    // icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "退出",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/login">
        退出
      </a>
    ),
    disabled: true,
  },
];

const responsiveHeader = () => {
  // 观察用户是否登录
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // console.log(isAuthenticated);

  // 跳转
  const navigate = useNavigate();
  const skipPage = () => {
    // 判断是否登录后跳转
    if (isAuthenticated) {
      navigate("/folder/home");
    }
    navigate("/login");
  };

  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: "white",
          margin: "0 0 0.6rem 0",
        }}
      >
        <div className="w-full flex px-10">
          <div className="mr-16">
            <a className="text-[0.65rem] font-bold opacity-70" href="/">
              Logo
            </a>
          </div>
          <ul className="flex gap-4 flex-1 ">
            {navList.map((item) => {
              return (
                <a href={item.href} key={item.id}>
                  <li> {item.label} </li>
                </a>
              );
            })}
          </ul>
          <div className="flex justify-center items-center">
            {/* 登录前为按钮 登录后为icon */}
            {isAuthenticated === true
              ? // <Dropdown
                //   menu={{
                //     loginedDropDown,
                //   }}
                // >
                //   <Avatar
                //     size={{ xs: 25, sm: 25, md: 35, lg: 35, xl: 40, xxl: 40 }}
                //     icon={<UserOutlined />}
                //     className="bg-purple-600 cursor-pointer"
                //   />
                // </Dropdown>
                1
              : // <div className="w-full h-full">
                //   <button>注册</button>
                //   <button className="rounded px-6 py-1 ml-4" onClick={skipPage}>
                //     登录
                //   </button>
                // </div>
                2}
          </div>
        </div>
      </Header>
    </div>
  );
};

export default responsiveHeader;
