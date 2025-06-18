import React, { FC } from "react";
import ModuleImg1 from "../../static/module-1.png";
import ModuleImg2 from "../../static/module-2.png";
import TrashIcon from "../../static/trash-icon.png";
import { Button } from "../common/button";
import { ModulePopup } from "./module-popup";
import { useNavigate } from "react-router-dom";

const ModuleList = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col gap-[24px] px-[16px] pb-[25px] pt-[12px]">
      <div className="flex flex-col gap-[8px]">
        <div className="text-xl font-medium">Danh sách module</div>
        <div className="text-[15px] font-normal text-neutral6">
          Được đề xuất cho ngành hàng F&B
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        {data.map((module, index) => (
          <ModuleListItem key={index} module={module} />
        ))}
      </div>
      <Button
        text={
          <div className="text-[17px] font-normal text-[#fff]">Xác nhận</div>
        }
        className="mt-auto h-[40px] w-full !flex-none rounded-[50px] bg-primary5"
        onClick={() => navigate("/create-success")}
      />
    </div>
  );
};

const ModuleListItem: FC<{ module: any }> = ({ module }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between py-[12px]">
      <div
        className="flex gap-[12px]"
        onClick={() => navigate(`/modules/${module.id}`)}
      >
        <div className="flex size-[55px] items-center justify-center rounded-[8px] bg-senmaticorange1">
          <img src={module.icon} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-[6px]">
          <div className="text-[15px] font-medium">{module.name}</div>
          <div className="text-[13px] font-normal text-neutral5">
            {module.description}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[10px]">
        {!module.downloaded ? (
          <ModulePopup>
            {({ open }) => (
              <Button
                text={
                  <div className="text-[13px] font-medium text-primary5">
                    Cài đặt
                  </div>
                }
                className="h-[27px] flex-none rounded-[24px] bg-primary1 px-[6px]"
                onClick={(e) => {
                  e.stopPropagation();
                  open();
                }}
              />
            )}
          </ModulePopup>
        ) : (
          <>
            <Button
              text={
                <div className="text-[13px] font-medium text-accent5">
                  Đã cài đặt
                </div>
              }
              className="h-[27px] flex-none rounded-[24px] bg-accent1 px-[6px]"
            />
            <div className="flex items-center gap-[2px]">
              <div className="text-xs font-normal text-neutral6">
                Gỡ cài đặt
              </div>
              <img src={TrashIcon} alt="" className="size-[14px]" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModuleList;

const data = [
  {
    id: 1,
    icon: ModuleImg1,
    name: "Menu cửa hàng F&B",
    description: "Được đề xuất cho ngành hàng F&B",
    downloaded: false,
  },
  {
    id: 2,
    icon: ModuleImg2,
    name: "POS cửa hàng F&B",
    description: "Được đề xuất cho ngành hàng F&B",
    downloaded: true,
  },
];
