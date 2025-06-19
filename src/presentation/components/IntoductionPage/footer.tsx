import React from "react";
import Logo from "../../static/azicloud-logo-white.png";
import AppStore from "../../static/appstore.png";
import GooglePlay from "../../static/googleplay.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-start gap-[12px] bg-[#58B6FF] px-[16px] pb-[154px] pt-[24px]">
      <img src={Logo} alt="" className="h-[28px] object-contain" />
      <div className="flex h-[24px] gap-[12px]">
        <img src={AppStore} alt="" className="h-full object-contain" />
        <img src={GooglePlay} alt="" className="h-full object-contain" />
      </div>
      <div className="text-sm font-normal text-white">
        Copyright @AziCloud 2025. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
