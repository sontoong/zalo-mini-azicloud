import React from "react";
import IntroductionImg from "../../static/module-introduction.png";

export const Introduction2 = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="text-base font-medium text-primaryblack">
        Tính năng tiêu biểu
      </div>
      <div className="flex flex-col gap-[20px]">
        <div className="text-sm font-normal text-primaryblack">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <img src={IntroductionImg} alt="" className="w-full object-contain" />
      </div>
    </div>
  );
};
