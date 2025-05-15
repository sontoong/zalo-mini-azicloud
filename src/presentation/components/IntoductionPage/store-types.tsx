import React, { FC } from "react";
import StoreType1 from "../../static/store-type-1.png";
import StoreType2 from "../../static/store-type-2.png";

const StoreTypes = () => {
  return (
    <div className="flex flex-col gap-[20px] py-[20px]">
      <div className="text-center text-xl font-semibold text-primary5">
        Dành riêng cho các cửa hàng
      </div>
      <div className="flex gap-[20px] overflow-auto px-[16px] hide-scrollbar">
        {storeTypes.map((item, index) => (
          <StoreTypeItem key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

const StoreTypeItem: FC<TStoreTypeItem> = ({ image, title }) => {
  return (
    <div className="flex flex-col gap-[5.78px]">
      <div className="size-[57.81px]">
        <img src={image} alt="" className="size-full object-cover" />
      </div>
      <div className="whitespace-nowrap text-center text-xs font-medium">
        {title}
      </div>
    </div>
  );
};

export default StoreTypes;

type TStoreTypeItem = {
  image: string;
  title: string;
};

const storeTypes = [
  { image: StoreType1, title: "Spa" },
  { image: StoreType1, title: "Tiện tóc nam" },
  { image: StoreType2, title: "Tiệm tóc nữ" },
  { image: StoreType2, title: "Tiệm nail" },
  { image: StoreType2, title: "Thẩm mỹ viện" },
];
