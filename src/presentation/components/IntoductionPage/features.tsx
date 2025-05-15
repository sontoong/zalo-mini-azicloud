import React, { FC } from "react";
import CalendarIcon from "../../static/calendar-icon.png";
import LightBulbIcon from "../../static/light-bulb-icon.png";

const Features = () => {
  return (
    <div className="flex gap-[12px] overflow-auto px-[16px] py-[20px] hide-scrollbar">
      {features.map((item, index) => (
        <FeatureItem key={index} image={item.image} title={item.title} />
      ))}
    </div>
  );
};

const FeatureItem: FC<TFeatureItem> = ({ image, title }) => {
  return (
    <div
      className="flex w-[160px] shrink-0 gap-[12px] rounded-[8px] bg-[#fff] px-[10px] py-[12px]"
      style={{ boxShadow: "2px 4px 8px 0px #75757529" }}
    >
      <div className="size-[28px] shrink-0">
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      <div className="text-neutral7 text-sm font-normal">{title}</div>
    </div>
  );
};

export default Features;

type TFeatureItem = {
  image: string;
  title: string;
};

const features = [
  { image: CalendarIcon, title: "Tự động quản lý lịch hẹn" },
  { image: LightBulbIcon, title: "Tối ưu hiệu suất vận hành" },
  { image: LightBulbIcon, title: "Tối ưu hiệu suất vận hành" },
  { image: LightBulbIcon, title: "Tối ưu hiệu suất vận hành" },
];
