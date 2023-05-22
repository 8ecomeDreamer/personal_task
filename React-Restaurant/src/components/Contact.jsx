import React from "react";
import { mainContactMenu } from "../Data";

const Contact = () => {
  return (
    <div className="section" id="contact">
      {/* flex flex-wrap justify-center items-end */}
      <div className=" border-solid text-center bg-fuchsia-300  text-fuchsia-800 rounded-md  pt-4 pb-8 gap-4 ">
        <div>
          <h3 className="font-semibold text-[2rem] mb-4">开始制作幻灯片</h3>
          <div className="flex justify-between gap-8 mb-16 w-11/12 m-auto">
            {mainContactMenu.map((item) => {
              return (
                <div
                  className="w-1/5 p-4 bg-transparent shadow-lg hover:shadow transition-all duration-300 cursor-pointer text-center"
                  key={item.id}
                >
                  <div className="w-full mb-2">
                    <a href={item.href}>
                      <img src={item.image} alt="" className="rounded-lg" />
                    </a>
                  </div>
                  <div className=" flex items-center justify-center  w-full ">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="font-semibold text-[1rem] mb-10 text-black ">
            或者
          </p>
          <button className="bg-fuchsia-700 hover:bg-fuchsia-600 rounded-3xl px-10 py-4 text-white">导入创建</button>
        </div>

        {/* <div className="">
          <h5 className="font-semibold text-[2rem] mb-4">或者</h5>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
