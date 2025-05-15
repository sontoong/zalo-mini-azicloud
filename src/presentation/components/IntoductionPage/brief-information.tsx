import React from "react";
import IntroductionImage from "../../static/azicloud-introduction.png";

const BriefInformation = () => {
  return (
    <div className="flex flex-col gap-[20px] px-[16px]">
      {/* Title */}
      <div className="flex flex-col gap-[12px] text-center">
        <div className="flex flex-col gap-[4px]">
          <div className="text-lg font-normal text-[#44AEC6]">Phần mềm</div>
          <div className="text-[28px] font-semibold leading-5 text-primary5">
            POS ĐẶT LỊCH
          </div>
        </div>
        <div className="text-base font-normal">
          Quản lý lịch hẹn, khách hàng, doanh thu dễ dàng
        </div>
      </div>
      {/* Promotion */}
      <div className="flex flex-col gap-[8px] rounded-[12px] border border-senmaticred2 bg-senmaticred1 p-[16px]">
        <div className="text-lg font-medium leading-6">
          <span>🎁 Đăng ký ngay hôm nay - </span>
          <br />
          <span>Nhận </span>
          <span className="text-error3">MIỄN PHÍ 100%</span>
        </div>
        <div className="text-base font-normal leading-4 text-neutral6">
          <span>Chỉ dành cho</span>{" "}
          <span className="font-medium text-error3">100 doanh nghiệp </span>
          <span>đầu tiên.</span>
        </div>
      </div>
      {/* Image */}
      <div className="h-[270x] w-full">
        <img
          src={IntroductionImage}
          alt=""
          className="size-full object-contain"
        />
      </div>
    </div>
  );
};

export default BriefInformation;
