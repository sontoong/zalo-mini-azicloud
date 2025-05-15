import React from "react";
import { Button } from "../common/button";
import { TimeCountdown } from "../common/countdown";
import { useNavigate } from "react-router-dom";

const RegisterCard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 flex flex-col gap-[14px] bg-[#fff] px-[13px] pb-[32px] pt-[12px]"
      style={{ boxShadow: "0px 8px 32px 0px #3C3C3C40" }}
    >
      <TimeCountdown hours={8} minutes={12} seconds={12} />
      <Button
        text={
          <div className="text-[17px] font-normal text-[#fff]">
            Đăng ký ngay để không bỏ lỡ!
          </div>
        }
        className="rounded-[8px] bg-[#5DB85B] py-[7px]"
        onClick={() => navigate("/create-store")}
      />
    </div>
  );
};

export default RegisterCard;
