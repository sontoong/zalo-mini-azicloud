import React, { FC, useState } from "react";
import { createPortal } from "react-dom";
import { Sheet } from "zmp-ui";
import CloseIcon from "../../static/close-icon.png";
import CheckmarkIcon from "../../static/checkmark-icon.png";
import { Button } from "../common/button";
import { Radio } from "../common/radio";
import { Form } from "../common/form";
import { formatCurrency } from "../../utils/helpers";

const ModulePopup: FC<Props> = ({ children }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <>
      {children({ open: () => setVisible(true) })}
      {createPortal(
        <Sheet
          title={
            (
              <div className="absolute inset-x-[16px] top-[18px] flex items-center text-left">
                <span className="text-xl font-medium">Chọn gói cài đặt</span>
                <div
                  className="absolute right-0 ml-auto size-[20px]"
                  onClick={() => setVisible(false)}
                >
                  <img src={CloseIcon} alt="" />
                </div>
              </div>
            ) as unknown as string
          }
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          mask
          handler={false}
          unmountOnClose
          height={"89vh"}
          style={{ background: "#FFF", paddingTop: "18px", borderRadius: 0 }}
        >
          <Form className="flex-1" form={form}>
            <Form.Item name="package" noStyle>
              <Radio.ButtonGroup
                items={packages}
                direction="column"
                itemFlex={false}
                className="flex gap-[12px] px-[10px]"
                render={(item) => (
                  <div className="border-primary2 relative flex justify-between rounded-[14px] border px-[14px] pb-[14px] pt-[12px]">
                    {/* Best buy  */}
                    {item?.best ? (
                      <div
                        className="absolute right-[10px] top-0 flex h-[20px] -translate-y-1/2 items-center rounded-[40px] px-[4px]"
                        style={{
                          background:
                            "linear-gradient(90deg, #A1CD6F 0%, #2F861F 100%)",
                        }}
                      >
                        <div className="text-2xs font-normal text-white">
                          Lựa chọn tốt nhất
                        </div>
                      </div>
                    ) : null}
                    {/* Details */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="text-[17px] font-medium">
                        {item?.name}
                      </div>
                      {item?.features.map((feature, index) => (
                        <div
                          className="flex items-center gap-[6px]"
                          key={index}
                        >
                          <img
                            src={CheckmarkIcon}
                            alt=""
                            className="size-[14px]"
                          />
                          <div className="text-sm font-normal text-neutral7">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center">
                      {item?.price > 0 ? (
                        <div className="flex flex-col items-end gap-[5px]">
                          <div className="text-neutral5 text-xs font-normal line-through">
                            {formatCurrency(item?.price)}
                          </div>
                          <div className="text-base font-medium text-primary4">
                            {formatCurrency(item?.discountPrice)}
                          </div>
                          <div className="text-sm font-normal text-neutral6">
                            /{item?.durationUnit}
                          </div>
                        </div>
                      ) : (
                        <div className="text-neutral5 text-[15px] font-medium">
                          Miễn phí
                        </div>
                      )}
                    </div>
                  </div>
                )}
                activeRender={(item) => (
                  <div
                    className="relative flex justify-between rounded-[14px] border-[1.5px] border-[#718EFF] bg-[#FAFBFF] px-[14px] pb-[14px] pt-[12px]"
                    style={{ boxShadow: " 0px 2px 12px 0px #99999929" }}
                  >
                    {/* Best buy  */}
                    {item?.best ? (
                      <div
                        className="absolute right-[10px] top-0 flex h-[20px] -translate-y-1/2 items-center rounded-[40px] px-[4px]"
                        style={{
                          background:
                            "linear-gradient(90deg, #A1CD6F 0%, #2F861F 100%)",
                        }}
                      >
                        <div className="text-2xs font-normal text-white">
                          Lựa chọn tốt nhất
                        </div>
                      </div>
                    ) : null}
                    {/* Details */}
                    <div className="flex flex-col gap-[12px]">
                      <div className="text-[17px] font-medium">
                        {item?.name}
                      </div>
                      {item?.features.map((feature, index) => (
                        <div
                          className="flex items-center gap-[6px]"
                          key={index}
                        >
                          <img
                            src={CheckmarkIcon}
                            alt=""
                            className="size-[14px]"
                          />
                          <div className="text-sm font-normal text-neutral7">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center">
                      {item?.price > 0 ? (
                        <div className="flex flex-col items-end gap-[5px]">
                          <div className="text-neutral5 text-xs font-normal line-through">
                            {formatCurrency(item?.price)}
                          </div>
                          <div className="text-base font-medium text-primary4">
                            {formatCurrency(item?.discountPrice)}
                          </div>
                          <div className="text-sm font-normal text-neutral6">
                            /{item?.durationUnit}
                          </div>
                        </div>
                      ) : (
                        <div className="text-neutral5 text-[15px] font-medium">
                          Miễn phí
                        </div>
                      )}
                    </div>
                  </div>
                )}
              />
            </Form.Item>
          </Form>

          {/* Footer buttons */}
          <div
            className="rounded-t-[8px] px-[16px] pb-[35px] pt-[16px]"
            style={{ borderTop: "1px solid #E5E5E5" }}
          >
            <Button
              text={
                <div className="text-base font-normal text-white">Cài đặt</div>
              }
              className="bg-primary h-[38px] w-full rounded-[50px]"
              style={{ boxShadow: "0px 3px 16px 0px #0F274A1A" }}
            />
          </div>
        </Sheet>,
        document.body,
      )}
    </>
  );
};

export { ModulePopup };

type Props = {
  children: (methods: { open: () => void }) => React.ReactNode;
};

const packages = [
  {
    value: 1,
    name: "Gói miễn phí",
    price: 0,
    discountPrice: 0,
    durationUnit: "tháng",
    features: ["Tạo shop", "Trải nghiệm bán hàng cơ bản"],
    best: false,
  },
  {
    value: 2,
    name: "Gói cơ bản",
    price: 3000000,
    discountPrice: 2000000,
    durationUnit: "tháng",
    features: [
      "Tạo shop",
      "Quản lý bán hàng, lịch hẹn",
      "Quản lý thống kê báo cáo",
    ],
    best: true,
  },
  {
    value: 3,
    name: "Gói cơ bản",
    price: 4000000,
    discountPrice: 3000000,
    durationUnit: "tháng",
    features: [
      "Tạo shop",
      "Quản lý bán hàng, lịch hẹn",
      "Quản lý thống kê báo cáo",
      "Quản lý nhân viên,...",
    ],
    best: false,
  },
];
