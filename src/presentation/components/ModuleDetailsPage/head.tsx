import React from "react";
import ModuleImg1 from "../../static/module-1.png";
import TrashIcon from "../../static/trash-icon.png";
import { Button } from "../common/button";
import { ModulePopup } from "../ModulesPage/module-popup";

const Head = () => {
  const downloaded = false;

  return (
    <div className="flex justify-between">
      <div className="flex gap-[12px]">
        <div className="flex size-[55px] items-center justify-center rounded-[8px] bg-senmaticorange1">
          <img src={ModuleImg1} alt="" />
        </div>
        <div className="flex flex-col justify-center gap-[6px]">
          <div className="text-xl font-medium">Menu cửa hàng F&B</div>
          <div className="text-[13px] font-normal text-neutral5">
            Được đề xuất cho ngành hàng F&B
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[10px]">
        {!downloaded ? (
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

export default Head;
