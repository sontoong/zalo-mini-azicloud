import React from "react";
import FooterImage from "../../static/phone-img.png";

const FooterImageContainer = () => {
  return (
    <div
      className="h-[375px]"
      style={{
        background: "linear-gradient(180deg, #A8D9FF 0%, #70C0FF 100%)",
      }}
    >
      <img src={FooterImage} alt="" className="w-full object-contain" />
    </div>
  );
};

export default FooterImageContainer;
