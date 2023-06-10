import {
  FormOutlined,
  DeleteOutlined,
  CalendarOutlined,
  SettingOutlined,
  LinkOutlined,
  LeftSquareOutlined,
} from "@ant-design/icons";
import { speechList, docList } from "@/data/folder.jsx";

const FolderHome = () => {
  // 点击li切换背景色并改变下方的content
  const setActive = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full h-screen">
      {/* 标题栏以及li栏 */}
      <div
        className="bg-gradient-to-b from-fuchsia-600 via-fuchsia-400 to-fuchsia-200
       w-full h-2/5 mb-4 rounded-lg  xl:rounded-xl 
       flex justify-around items-center  flex-wrap flex-col"
      >
        <div className="m-b10  text-white lg:text-3xl md:text-base sm:text-sm   ">
          你想做什么演讲?
        </div>
        <ul className="w-4/5 flex justify-between items-center  ">
          {speechList.map((item, index) => {
            return (
              <div
                onClick={setActive}
                className="w-3/5 text-center flex flex-wrap justify-center "
                key={item.id}
              >
                <div
                  className="margin-auto lg:text-3xl md:text-2xl sm:text-1xl
                  mb-4 cursor-pointer w-10/12 h-15 bg-[#FFFFFF1A] rounded-full
                  hover:bg-white active:bg-white
                  flex justify-center items-center py-2"
                >
                  <FormOutlined />
                </div>
                <li className=" lg:text-base md:text-xs ">{item.label}</li>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 模板栏 */}
      <div
        className="bg-white h-40 w-full mb-4 rounded-lg overflow-hidden px-5 py-1
        flex justify-start items-center gap-2"
      >
        {docList.map((item) => {
          return (
            <div
              className="w-40 h-4/5 rounded-lg text-center bg-zinc-200 py-2"
              key={item.id}
            >
              <div className=" w-4/5 h-4/5  rounded-lg m-auto flex justify-center items-center">
                <span>暂无内容</span>
              </div>
              {item.label}
            </div>
          );
        })}
      </div>
      {/* 最近修改模板 */}
      <div className="w-full h-60 mb-4 rounded-lg">
        <h1 className="text-2xl mb-2">最近修改</h1>
        <div className="w-full h-60 flex justify-center items-center flex-wrap">
          <div className="w-full h-full flex justify-center items-center  flex-wrap">
            {/* <LinkOutlined /> */}
            <p className="">
              还没有创建任何文档，可以在上面创建一个空白或带模版的文栏
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FolderHome;
