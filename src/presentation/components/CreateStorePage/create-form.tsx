import React from "react";
import { Form } from "../common/form";
import { Input } from "antd";
import { Radio } from "../common/radio";
import ShopIcon from "../../static/shop-icon.png";
import ShopIcon2 from "../../static/shop-icon-2.png";
import ShopIcon3 from "../../static/shop-icon-3.png";
import { Button } from "../common/button";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleFormFinish = () => {
    navigate("/modules");
  };

  return (
    <Form form={form} onFinish={handleFormFinish}>
      <Form.Item
        name="title"
        label={
          <div className="text-[17px] font-normal text-neutral6">
            Tên cửa hàng
          </div>
        }
      >
        <Input
          placeholder="Nhập tên cửa hàng"
          variant="underlined"
          className="bg-transparent"
        />
      </Form.Item>
      <Form.Item
        name="field"
        label={
          <div className="text-[17px] font-normal text-neutral6">
            Lĩnh vực kinh doanh
          </div>
        }
      >
        <Radio.ButtonGroup
          items={businessFields}
          activeRender={(field) => (
            <div className="flex h-[68px] items-center justify-start gap-[8px] rounded-[8px] border-[1.5px] border-primary4 bg-surface px-[10px]">
              <div className="size-[28px]">
                <img
                  src={field?.image}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-[15px] font-normal">{field?.title}</div>
            </div>
          )}
          render={(field) => (
            <div className="flex h-[68px] items-center justify-start gap-[8px] rounded-[8px] border border-[#D6D6D680] bg-white px-[10px]">
              <div className="size-[28px]">
                <img
                  src={field?.image}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="text-[15px] font-normal">{field?.title}</div>
            </div>
          )}
          className="grid grid-cols-2 gap-[12px]"
        />
      </Form.Item>
      <Button
        text={
          <div className="text-[17px] font-normal text-[#fff]">
            Bắt đầu bán hàng
          </div>
        }
        className="h-[40px] w-full rounded-[50px] bg-primary5"
      />
    </Form>
  );
};

export default CreateForm;

const businessFields = [
  {
    image: ShopIcon,
    title: "Nhà hàng",
    value: 1,
  },
  {
    image: ShopIcon2,
    title: "Quán cà phê/ Trà sữa",
    value: 2,
  },
  {
    image: ShopIcon2,
    title: "quán ăn gia đình",
    value: 3,
  },
  {
    image: ShopIcon2,
    title: "Tiệm bánh",
    value: 4,
  },
  {
    image: ShopIcon2,
    title: "Quán ăn đường phố",
    value: 5,
  },
  {
    image: ShopIcon3,
    title: "Khác",
    value: 6,
  },
];
