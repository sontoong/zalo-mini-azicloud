import React from "react";
import ArrowLeftIcon from "../static/arrow-left.png";
import { Header, Page } from "zmp-ui";
import { ModulesPageModuleList } from "../components/ModulesPage";

const ModulesPage = () => {
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
        <ModulesPageModuleList />
      </div>
    </Page>
  );
};

export default ModulesPage;
