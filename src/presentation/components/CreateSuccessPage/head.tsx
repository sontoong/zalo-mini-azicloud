import React from "react";
import CreateSuccessImg from "../../static/create-success.png";

const Head = () => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      {/* Image */}
      <div className="size-[100px]">
        <img src={CreateSuccessImg} alt="" className="size-full object-cover" />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-[8px] text-center">
        <div className="text-accent6 text-[24px] font-medium">Chúc mừng!</div>
        <div className="text-[16px] font-medium">
          Bạn đã tạo cửa hàng thành công.
        </div>
      </div>
    </div>
  );
};

export default Head;
