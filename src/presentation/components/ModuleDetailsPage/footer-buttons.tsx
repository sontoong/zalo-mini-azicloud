import React, { forwardRef } from "react";
import { ModulePopup } from "../ModulesPage/module-popup";
import { Button } from "../common/button";
import TrashCanIcon from "../../static/trash-icon-red.png";

interface FooterButtonsProps {}

const FooterButtons = forwardRef<HTMLDivElement, FooterButtonsProps>(
  (props, ref) => {
    const downloaded = true;

    return (
      <div className="fixed inset-x-0 bottom-0" ref={ref}>
        {!downloaded ? (
          <div className="w-full bg-white px-[16px] py-[12px]">
            <ModulePopup>
              {({ open }) => (
                <Button
                  text={
                    <div className="text-[13px] font-medium text-white">
                      Cài đặt
                    </div>
                  }
                  className="h-[40px] w-full flex-none rounded-[24px] bg-primary px-[6px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    open();
                  }}
                />
              )}
            </ModulePopup>
          </div>
        ) : (
          <div className="flex flex-col gap-[8px] bg-white px-[16px] py-[12px]">
            <Button
              text={
                <div className="text-[17px] font-medium text-accent5">
                  Đã cài đặt
                </div>
              }
              className="h-[40px] flex-none rounded-[24px] bg-accent1 px-[6px]"
            />
            <Button
              text={
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="text-[17px] font-normal text-error3">
                    Gỡ cài đặt
                  </div>
                  <img src={TrashCanIcon} alt="" className="size-[16px]" />
                </div>
              }
              className="h-[40px] flex-none rounded-[24px] px-[6px]"
            />
          </div>
        )}
      </div>
    );
  },
);

FooterButtons.displayName = "FooterButtons";

export default FooterButtons;
