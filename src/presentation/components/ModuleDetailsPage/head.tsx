import React from "react";
import ModuleImg1 from "../../static/module-1.png";

const Head = () => {
  return (
    <div className="flex gap-[12px]">
      <div className="flex size-[55px] items-center justify-center rounded-[8px] bg-senmaticorange1">
        <img src={ModuleImg1} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[6px]">
        <div className="text-xl font-medium">Menu cửa hàng F&B</div>
        <div className="text-[13px] font-normal text-neutral5">
          Được đề xuất cho ngành hàng F&B
        </div>
      </div>
    </div>
  );
};

export default Head;
