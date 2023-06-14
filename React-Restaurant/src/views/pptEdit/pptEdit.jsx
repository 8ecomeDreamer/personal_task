import LiTree from "@/components/pptEdit/LiTree.jsx";
import {
  CloudOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { Button, Carousel, Image, Tabs } from "antd";

const pptEdit = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div className="w-full h-screen flex">
      <div className="flex-1 h-full px-4 py-4">
        <div className="mb-10 flex justify-around items-center">
          {/* <div className="flex justify-around items-center">
            <span className="inline-block mr-1 ">&lt;</span>
            <span className="inline-block mb-6 ">返回</span>
          </div> */}
          <div className="flex justify-around items-center gap-4 ">
            <CloudOutlined />
            <span>自动保存</span>
            <MinusCircleOutlined />
            <PlusCircleOutlined />
          </div>
        </div>
        <div className="w-6/12 m-auto">
          <h1 className="text-bold text-[2rem] text-center mb-8">
            20XX月度/年度总结
          </h1>
          <ul className="px-2 py-4 rounded bg-slate-100 mb-8">
            <li>副标题:</li>
            <li>演讲者:</li>
            <li>演讲时间:</li>
          </ul>
          <LiTree></LiTree>
        </div>
      </div>
      <div className="w-4/12 h-full bg-[rgb(237,240,242)] px-4 py-4">
        <div className="mb-8 flex justify-around items-center gap-4">
          <div>演示预览</div>
          <div className="flex gap-2">
            <Button icon={<CloudOutlined />}>下载</Button>
            <Button icon={<PoweroffOutlined />}>演示</Button>
          </div>
        </div>
        <div className="mb-8 ">
          <Carousel autoplay>
            <div>
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
            <div>
              <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </div>
          </Carousel>
        </div>
        <div>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default pptEdit;
