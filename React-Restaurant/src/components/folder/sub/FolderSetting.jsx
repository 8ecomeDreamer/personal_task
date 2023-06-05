import { Avatar, Button, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "简体中文",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "英文",
    key: "2",
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const FolderSetting = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-gray-600 font-bold mb-4">账户设置</h1>
      <div className="w-full h-10 bg-gray-300 flex justify-between items-center px-4  py-4 mb-4">
        <div>
          <Avatar
            size={{ xs: 25, sm: 25, md: 25, lg: 25, xl: 25, xxl: 25 }}
            icon={<UserOutlined />}
            className="bg-purple-600 cursor-pointer"
          />
        </div>
        <Button>立即升级</Button>
      </div>
      <div className="mb-4">
        <h3 className="text-2xl text-gray-600 font-bold mb-4">语言</h3>
        <h4 className="mb-2 text-gray-600">改变界面使用语言</h4>
        <div className="mb-4">
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
            简体中文
          </Dropdown.Button>
        </div>
        <hr />
      </div>
      <div className="mb-4">
        <h3 className="text-2xl text-gray-600 font-bold mb-4">修改登录密码</h3>
        <h4 className="mb-2 text-gray-600">修改登录密码，需要输入旧密码</h4>
        <div className="mb-4">
          <Button>修改密码</Button>
        </div>
        <hr />
      </div>
      <Button>退出</Button>
    </div>
  );
};
export default FolderSetting;
