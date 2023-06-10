import {
  Avatar,
  Button,
  Dropdown,
  Modal,
  Radio,
  Checkbox,
  Form,
  Input,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import PayLoad from "@/components/common/payModal";

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
  // 升级modal框;
  const [PayModal, setPayModal] = useState(false);

  function showPayModal() {
    setPayModal(true);
  }

  function hidePayModal() {
    setPayModal(false);
  }

  const [passModal, setPassModal] = useState(false);

  // const payModalRef = useRef(null);
  // const showPayModal = () => {
  //   setPayModal(true);
  // };

  const showPassModal = () => {
    setPassModal(true);
  };

  const hidePassModal = () => {
    setOpenPass(false);
  };
  const handleOk = (e) => {
    // console.log(e);
    setPassModal(false);
  };
  const handleCancel = (e) => {
    // console.log(e);
    setPassModal(false);
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

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
        <Button onClick={showPayModal}>立即升级</Button>
        {/* 升级modal框 */}
        {PayModal && <PayModal></PayModal>}
        {/* {PayModal ? <PayModal ref={payModalRef}></PayModal> : null} */}
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
          <Button onClick={showPassModal}>修改密码</Button>
        </div>
        {/* 修改密码modal框 */}
        <Modal
          title="修改密码"
          // title="Basic Modal"
          open={passModal}
          // onOk={handleOk}
          // onCancel={handleCancel}
          width={1000}
          footer={[
            // 定义右下角 按钮的地方 可根据需要使用 一个或者 2个按钮
            <Button key="back" onClick={handleCancel}>
              取消
            </Button>,
            <Button
              key="submit"
              type="primary"
              style={{ background: "blue" }}
              onClick={handleOk}
            >
              确定
            </Button>,
          ]}
        >
          {/* onFinish={onFinish} */}
          {/* onFinishFailed={onFinishFailed} */}
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item label="旧密码">
              <Input.Password />
            </Form.Item>
            <Form.Item label="新密码">
              <Input.Password />
            </Form.Item>
            <Form.Item label="再次输入">
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
        <hr />
      </div>
      <Button>退出</Button>
    </div>
  );
};
export default FolderSetting;
