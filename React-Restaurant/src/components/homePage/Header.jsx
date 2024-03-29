import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { navList } from "@/Data";

import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

// 跳转
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);

  // 观察用户是否登录
  const ifLogin = false;
  // 跳转
  const navigate = useNavigate();
  const skipPage = () => {
    navigate("/folder/home");
  };

  return (
    <div
      className={`${
        scroll ? " bg-back shadow-sm" : ""
      } fixed top-0 left-0 w-full z-20`}
    >
      <nav className="relative container mx-auto flex items-center justify-around py-4 px-2">
        <div className="mr-8">
          <h4 className="text-xl font-semibold">Taste</h4>
          <span className="text-[0.65rem] font-bold opacity-70">
            Restaurant && BBQ
          </span>
        </div>
        <ul className="flex gap-4 flex-1 ">
          {navList.map((item) => {
            return (
              <a href={item.href} key={item.id}>
                <li> {item.text} </li>
              </a>
            );
          })}
        </ul>
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

        {/* <div className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative">
          <AiOutlineShoppingCart className="text-xl text-white" />
          <div className="absolute bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full">
            2
          </div>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
