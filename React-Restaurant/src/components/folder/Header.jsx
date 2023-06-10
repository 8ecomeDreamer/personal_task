import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { navList } from "@/data/folder.jsx";
import { useState } from "react";
const { Header } = Layout;
// const {
//   token: { colorBgContainer },
// } = theme.useToken();

const responsiveHeader = () => {
  // 观察用户是否登录
  const ifLogin = useState(false);

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
            <span className="text-[0.65rem] font-bold opacity-70">Logo</span>
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
            {ifLogin ? (
              <Avatar
                size={{ xs: 25, sm: 25, md: 35, lg: 35, xl: 40, xxl: 40 }}
                icon={<UserOutlined />}
                className="bg-purple-600 cursor-pointer"
              />
            ) : (
              <div>
                <button>注册</button>
                <button
                  className="bg-fuchsia-700 text-white rounded px-6 py-1 ml-4  hover:bg-fuchsia-600"
                  onClick={skipPage}
                >
                  登录
                </button>
              </div>
            )}
          </div>
        </div>
      </Header>
    </div>
  );
};

export default responsiveHeader;
