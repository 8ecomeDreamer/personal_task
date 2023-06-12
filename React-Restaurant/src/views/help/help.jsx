import Header from "@/components/folder/Header";
import Footer from "@/components/homePage/Footer";
import { questions } from "@/data/help.jsx";

import { Input } from "antd";
import { useNavigate } from "react-router-dom";
const Help = () => {
  const navigate = useNavigate();

  const skipPage = () => {
    navigate("/helpDetail");
  };

  return (
    <div>
      <Header></Header>
      <div
        className="w-full h-80 bg-gradient-to-r from-[rgb(240,240,240)] to-[rgb(204,204,204)] 
        text-center leading-normal pt-20"
      >
        <h1 className="text-[2rem] text-black mb-4">请问需要什么帮助？</h1>
        <div className="w-6/12 m-auto mb-8">
          <Input placeholder="输入问题关键字搜索" />
        </div>
        <h4 className=" text-black ">
          最新信息和问题反馈，可以关注公众号：
          <span className="text-red-400  cursor-pointer hover:underline">
            Mindshow所思所见
          </span>
        </h4>
      </div>
      <div className="w-10/12 m-auto flex flex-wrap flex-center gap-4 py-4 ">
        {questions.map((item, index) => {
          return (
            <div className="w-5/12 m-auto " key={index}>
              <div className="w-full bg-gray-200  py-2 px-2 rounded">
                <span>{index + 1}</span>
                <span>.</span>
                <span>{item.title}</span>
              </div>
              <ul className="w-full py-5 px-10 h-60 border mb-4 overflow-auto">
                {item.liChildren.map((el, idx) => {
                  return (
                    <li
                      key={idx}
                      className="list-disc cursor-pointer hover:underline "
                      onClick={skipPage}
                    >
                      {el.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Help;
