import Header from "@/components/folder/Header";
import Footer from "@/components/homePage/Footer";
import { selector, newTemplate, hotTemplate } from "@/data/pptTemplates";
import { Select } from "antd";
import { Input } from "antd";
import { useState } from "react";
import src from "@/assets/about.png";

const PPtTemplates = () => {
  const [placement, SetPlacement] = useState("topLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  return (
    <div>
      <Header></Header>
      <div
        className="w-full h-80 bg-gradient-to-r from-[rgb(50,35,172)] to-[rgb(221,74,156)] 
        text-center leading-normal pt-20"
      >
        <h1 className="text-[2rem] text-white mb-2">你想要做的演讲是什么?</h1>
        <p className="text-white mb-4">
          海量设计模版，覆盖多种设计场景，丰富的模版素材库供你挑选
        </p>
        <div className="w-6/12 m-auto">
          <Input placeholder="搜索成百上千的演示模版" />
        </div>
      </div>
      <section className="flex justify-center items-center py-4 gap-4 ">
        <div>
          <Select
            defaultValue="HangZhou"
            style={{
              width: 120,
            }}
            popupMatchSelectWidth={false}
            placement={placement}
            options={selector}
          />
        </div>
        <div>
          <Select
            defaultValue="HangZhou"
            style={{
              width: 120,
            }}
            popupMatchSelectWidth={false}
            placement={placement}
            options={selector}
          />
        </div>
        <a href="">工作总结</a>
        <a href="">商业计划书</a>
        <a href="">培训课件</a>
        <a href="">节日庆典</a>
        <a href="">竞聘述职</a>
        <a href="">毕业答辩</a>
        <a href="">发布会</a>
      </section>
      <hr className="mb-20" />
      <div className="mb-8 w-8/12 m-auto">
        <h1 className="text-2xl text-gray-600 font-bold mb-4">最新主题</h1>
        <div className="w-full flex flex-wrap justify-between gap-2 text-center">
          {newTemplate.map((item, index) => {
            return (
              <div className="w-3/12 m-auto mb-8 cursor-pointer" key={index}>
                <div className="w-full">
                  <img src={src}></img>
                </div>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-8 w-8/12 m-auto">
        <h1 className="text-2xl text-gray-600 font-bold mb-8">热门主题</h1>
        <div className="w-full flex flex-wrap justify-between gap-2 text-center">
          {hotTemplate.map((item, index) => {
            return (
              <div className="w-3/12 m-auto mb-8 cursor-pointer" key={index}>
                <div className="w-full">
                  <img src={src}></img>
                </div>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-10/12"></div>
      <Footer></Footer>
    </div>
  );
};

export default PPtTemplates;
