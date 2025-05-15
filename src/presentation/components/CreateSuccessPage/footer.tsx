import React from "react";
import AppStoreImg from "../../static/appstore.png";
import GooglePlayImg from "../../static/googleplay.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[20px] px-[16px]">
      <div className="text-center text-sm font-normal text-neutral6">
        Tải ứng dụng để trải nghiệm và bắt đầu thiết lập và quản lý của hàng của
        bạn tại đây:
      </div>
      <div className="flex justify-center gap-[20px]">
        <img src={AppStoreImg} alt="" />
        <img src={GooglePlayImg} alt="" />
      </div>
    </div>
  );
};

export default Footer;
