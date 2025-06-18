import React from "react";
import { TabsProps } from "antd";
import { Tabs as OriginalTabs } from "../common/tabs";
import { Introduction } from "./intoduction";

const Tabs = () => {
  const tabs: TabsProps["items"] = [
    {
      key: "1",
      label: "Giới thiệu",
      children: <Introduction />,
    },
    {
      key: "2",
      label: "Tính năng tiêu biểu",
      children: (
        <div className="flex flex-col gap-[20px] px-[16px] py-[12px]"></div>
      ),
    },
  ];

  return (
    <OriginalTabs
      items={tabs}
      className="custom-tabs"
      tabBarStyle={{
        marginBottom: "17px",
        background: "white",
        borderBottom: "none",
      }}
      selectColor="#34499D"
    />
  );
};

export default Tabs;

type Props = {
  enableSearch: any;
};
