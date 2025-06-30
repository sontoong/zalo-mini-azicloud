import React, { FC } from "react";
import { Anchor } from "antd";
import { Introduction } from "./intoduction";
import { Introduction2 } from "./introduction-2";

const Tabs: FC<{ footerOffset: any }> = ({ footerOffset }) => {
  const items = [
    {
      key: "part-1",
      href: "#part-1",
      title: <div className="text-base">Giới thiệu</div>,
    },
    {
      key: "part-2",
      href: "#part-2",
      title: <div className="text-base">Tính năng tiêu biểu</div>,
    },
  ];

  return (
    <div
      className="flex flex-col gap-[17px]"
      style={{ paddingBottom: footerOffset }}
    >
      <Anchor
        items={items}
        direction="horizontal"
        getContainer={() =>
          document.getElementById("moduleDetailsPageTabContainer") ||
          document.body
        }
        replace
        className="bg-white"
      />
      <div className="flex flex-col gap-[17px]">
        <div id="part-1">
          <Introduction />
        </div>
        <div id="part-2">
          <Introduction2 />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
