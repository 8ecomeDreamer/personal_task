import { templateSlides } from "@/data/folder.js";

const FolderSlides = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-2xl text-gray-600 font-bold">我的演示</h1>
      <div className="w-full  py-4 flex">
        {templateSlides.map((item, index) => {
          return (
            <div className="mr-4  h-full cursor-pointer " key={item.id}>
              <div
                className="bg-gray-200 w-full h-full text-center flex justify-center items-center mb-2 "
                style={{ width: "200px", height: "150px" }}
              >
                <img className="w-full h-full"></img>
              </div>
              <li className="lg:text-base md:text-xs list-none text-left">
                {item.title}
              </li>
              {/* lg:text-base md:text-xs */}
              <li className=" list-none text-left text-gray-500 text-sm">
                创建于{item.date}天前
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FolderSlides;
