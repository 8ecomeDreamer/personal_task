import { BiMap } from "react-icons/bi";
import recipe1 from "@/assets/recipe1.jpg";
import recipe2 from "@/assets/recipe2.jpg";
import recipe3 from "@/assets/recipe3.jpg";
import recipe4 from "@/assets/recipe4.jpg";
import recipe5 from "@/assets/recipe5.jpg";
import recipe6 from "@/assets/recipe6.jpg";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

// Header
export const navList = [
  {
    id: 1,
    href: "home",
    text: "首页",
  },
  {
    id: 2,
    href: "home",
    text: "PPT模版",
  },
  {
    id: 3,
    href: "home",
    text: "付费模板",
  },
  {
    id: 4,
    href: "home",
    text: "帮助",
  },
];
// Content
export const contentList = [
  {
    id: 1,
    image: recipe1,
    title: "创建简单，后续维护更加简单",
    p: "不用一页页输入文字，调整字体大小跟位置，只需要在大纲视图修改文字即可对幻灯片内容全部修改",
  },
  {
    id: 2,
    image: recipe2,
    title: "多种主题跟图示任意切换",
    p: "上百种各种类型主题一键切换，所有页面颜色及样式立刻改变，每张页面也可以使用不同的图示",
  },
  {
    id: 3,
    image: recipe3,
    title: "支持在线演示，也可导出PDF线下演示",
    p: "做好幻灯片，一键点击直接演示。如果需要演示的场所网络不好，支持导出PDF进行演示",
  },
];
// Contact
export const mainContactMenu = [
  {
    id: 1,
    href: "edit",
    text: "月度/年度总结",
    image: recipe1,
  },
  {
    id: 2,
    href: "edit",
    text: "立项报告",
    image: recipe2,
  },
  {
    id: 3,
    href: "edit",
    text: "项目复盘",
    image: recipe3,
  },
  {
    id: 4,
    href: "edit",
    text: "商业计划书",
    image: recipe4,
  },
  {
    id: 5,
    href: "edit",
    text: "OKR工作周报",
    image: recipe5,
  },
];

// Footer
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    text: "support@mindshow.fun",
  },
  {
    id: 2,
    icon: <HiOutlinePhone />,
    text: "手机:15026996774",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "上海市嘉定区科福路358 368号4幢1层EJT9915室",
  },
];
export const explores = ["@2023 MindShow.fun", "用户协议", "隐私协议"];
