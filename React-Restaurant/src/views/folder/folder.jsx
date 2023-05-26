import Header from "@/components/homePage/Header";
import Menu from "@/components/folder/Menu";
import Content from "@/components/folder/Content";
import { Layout } from "antd";

const folder = () => {
  return (
    <div className="font-poppins bg-back">
      <div class="headerWrapper" className="m-b10">
        <Header />
      </div>
      <div class="contentWrapper">
        <Layout>
          <Menu />
          <Content />
        </Layout>
      </div>
    </div>
  );
};
export default folder;
