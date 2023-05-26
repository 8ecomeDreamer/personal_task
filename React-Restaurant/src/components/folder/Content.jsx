import { Layout } from "antd";

const responsiveContent = () => {
  const { Content } = Layout;
  return (
    <Content
      style={{
        margin: "24px 16px 0",
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "white",
        }}
      >
        content
      </div>
    </Content>
  );
};

export default responsiveContent;
