import { Button } from "antd";

const FolderInvite = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-gray-600 font-bold mb-4">邀请推荐</h1>
      <div className="w-full h-10 bg-gray-300 flex justify-between items-center px-4  py-10 mb-4">
        <span className="text-lg">邀请码</span>
        <div className="w-3/12 py-4 bg-gray-500 text-center text-xl">
          6513699
        </div>
        <Button>复制邀请链接</Button>
        <span className="text-red-700">
          注意:只有邀请朋友注册，才会获得奖励，自己其他手机可邮箱无效
        </span>
      </div>
    </div>
  );
};
export default FolderInvite;
