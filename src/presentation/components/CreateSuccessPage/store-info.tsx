import React from "react";

import CopyIcon from "../../static/copy-icon.png";
import { Divider } from "antd";

const StoreInfo = () => {
  return (
    <div className="flex w-full flex-col gap-[12px]">
      <div className="flex items-end justify-between gap-[10px] px-[3px]">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[15px] font-normal text-neutral6">
            Tên cửa hàng
          </div>
          <div className="text-[16px] font-normal">Hount shop</div>
        </div>
        {/* Copy button */}
        <div
          className="size-[24px]"
          onClick={() => navigator.clipboard.writeText("Hount shop")}
        >
          <img src={CopyIcon} alt="" className="size-full object-cover" />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-end justify-between gap-[10px] px-[3px]">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[15px] font-normal text-neutral6">
            Tên đăng nhập
          </div>
          <div className="text-[16px] font-normal">093435456546</div>
        </div>
        {/* Copy button */}
        <div
          className="size-[24px]"
          onClick={() => navigator.clipboard.writeText("093435456546")}
        >
          <img src={CopyIcon} alt="" className="size-full object-cover" />
        </div>
      </div>
      <Divider className="m-0" />
      <div className="flex items-end justify-between gap-[10px] px-[3px]">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[15px] font-normal text-neutral6">Mật khẩu</div>
          <div className="text-[16px] font-normal">Hount123qzx</div>
        </div>
        {/* Copy button */}
        <div
          className="size-[24px]"
          onClick={() => navigator.clipboard.writeText("Hount123qzx")}
        >
          <img src={CopyIcon} alt="" className="size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
