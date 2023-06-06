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
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [openPass, setOpenPass] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const showPassModal = () => {
    setOpenPass(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  const hidePassModal = () => {
    setOpenPass(false);
  };
  const handleOk = (e) => {
    // console.log(e);
    setOpenPass(false);
  };
  const handleCancel = (e) => {
    // console.log(e);
    setOpenPass(false);
  };

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        <Button onClick={showModal}>立即升级</Button>
        {/* 升级modal框 */}
        <Modal
          open={open}
          onOk={hideModal}
          onCancel={hideModal}
          footer={[]}
          width={1000}
        >
          <div className="w-full h-[28rem] flex justify-center items-center py-8">
            <div className="w-3/12 h-full mr-2 px-4 py-4 rounded text-white bg-[rgb(31,41,55)]">
              <h3 className="mb-2">开通高级会员可享受特权:</h3>
              <li>V+模板、布局尽情享用</li>
              <li>100M升级到1G的云空间</li>
              <li>导出格式更加丰富</li>
              <li>个人商业使用授权</li>
            </div>
            <div className="flex-1 h-full px-4">
              <h3 className="font-bold text-xl text-gray-500  mb-2">
                选择你的方案
              </h3>
              <div className="w-full py-4 flex gap-4">
                <div className="border rounded w-3/12 py-4 text-center active:border-[rgb(218,112,214)]">
                  <h5>高级账户-单月</h5>
                  <p>19CNY</p>
                  <p className="line-through">29CNY</p>
                </div>
                <div className="border rounded w-3/12 py-4 text-center active:border-[rgb(218,112,214)]">
                  <h5>高级账户-单年</h5>
                  <p>99CNY</p>
                  <p className="line-through ">300CNY</p>
                </div>
              </div>
              <section className="w-full border rounded py-4 px-4">
                <h5 className="mb-4">支付方式</h5>
                <div className="mb-8">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={1}>微信支付</Radio>
                    <Radio value={2}>支付宝支付</Radio>
                  </Radio.Group>
                </div>
                <Button className="mb-10">去支付</Button>
              </section>
            </div>
          </div>
        </Modal>
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
          open={openPass}
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
