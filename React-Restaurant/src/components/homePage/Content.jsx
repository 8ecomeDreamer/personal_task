import React from "react";
import { contentList } from "@/Data";

const Content = () => {
  return (
    <div className="section" id="Content">
      {contentList.map((item) => {
        return (
          <div key={item.id} className="w-full flex justify-center items-center mb-4">
            <div className="w-5/12 mr-8">
              <img src={item.image}></img>
            </div>
            <div className="w-5/12 ">
              <h2 className="font-semibold text-[1.5rem]  mb-4">{item.title}</h2>
              <p className="font-light text-[0.8rem]">{item.p}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
