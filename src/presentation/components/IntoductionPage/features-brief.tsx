import React from "react";
import FeatureImg1 from "../../static/feature-1.png";

const FeaturesBrief = () => {
  return (
    <div className="flex flex-col gap-[40px] px-[16px] pb-[32px]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-[24px]">
          <img src={FeatureImg1} className="w-full object-contain" />
          <div className="flex flex-col gap-[12px]">
            <div className="text-center text-xl font-bold">
              Quản lý lịch hẹn dễ dàng
            </div>
            <div className="text-center text-sm font-normal">
              Tự động hóa quy trình đặt lịch, nhắc lịch khách hàng.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesBrief;
