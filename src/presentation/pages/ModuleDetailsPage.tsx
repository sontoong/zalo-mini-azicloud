import React from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left.png";
import {
  ModuleDetailsPageHead,
  ModuleDetailsPageTabs,
} from "../components/ModuleDetailsPage";

const ModuleDetailPage = () => {
  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#FFF]">
      <div className="relative">
        <Header
          title=""
          className="topbar no-border h-auto flex-none !bg-[#FFF] !pb-[8px] !pt-[32px] pl-4"
          backIcon={<img src={ArrowLeftIcon} />}
          textColor="white"
        />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[17px] px-[16px] pt-[12px]">
          <ModuleDetailsPageHead />
          <ModuleDetailsPageTabs />
        </div>
      </div>
    </Page>
  );
};

export default ModuleDetailPage;
