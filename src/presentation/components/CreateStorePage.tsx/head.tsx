import React from "react";
import BannerImg from "../../static/create-store.png";
import SalesIcon from "../../static/sales-icon.png";

const Head = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="h-[147px]">
        <img src={BannerImg} alt="" className="size-full object-contain" />
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="m-[18px] size-[32px]">
          <img src={SalesIcon} alt="" className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="text-[20px] font-medium text-primary5">
            Tạo cửa hàng - Pos
          </div>
          <div className="text-[15px] font-normal text-neutral6">
            Thiết lập cơ bản cho cửa hàng của bạn
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
