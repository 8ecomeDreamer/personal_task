import { Button, Input } from "antd";
const { TextArea } = Input;
import { templateImport } from "@/data/folder.jsx";
import img from "@/assets/recipe5.jpg";
import { useState } from "react";

const changeInput = (e) => {
  console.log(e);
};
// 默认值为0
// const [activeIndex, setActiveIndex] = useState(0);
const activeIndex = 0;
const activeTemplate = templateImport.filter((el) => {
  return el.id === activeIndex;
});

const FolderImport = () => {
  console.log(activeTemplate);
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-gray-600 font-bold mb-4">导入</h1>
      <div>
        <h4 className="mb-4 text-gray-600">格式选择:</h4>
        {/* btnGroup */}
        <div className="mb-4 gap-4 flex w-full">
          {templateImport.map((item, index) => {
            return (
              <Button key={index} onClick={changeInput(index)}>
                {item.btn}
              </Button>
            );
          })}
          {/* <Button>MarkDown</Button>
          <Button>Word(.docx)</Button>
          <Button>logseq</Button>
          <Button>幕布(.md)</Button> */}
        </div>
        {/* select place */}
        <div className="h-[28rem] flex mb-4 overflow-y-auto ">
          <div className="w-5/12 border rounded  mr-4 ">
            <TextArea
              rows={20}
              placeholder="请输入或粘贴需要导入的内容"
              maxLength={6}
            />
          </div>
          <div className="w-5/12  bg-gray ">
            {templateImport.map((item, index) => {
              return (
                <div key={index} className="mb-6">
                  <h3 className="mb-2 font-bold text-base">{item.title}</h3>
                  <p className="mb-2">{item.p}</p>
                  <h4 className="mb-2 text-gray-500 text-base">格式示例:</h4>
                  <div className="w-full ">
                    <img src={img}></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button>导入创建</Button>
      </div>
    </div>
  );
};
export default FolderImport;
