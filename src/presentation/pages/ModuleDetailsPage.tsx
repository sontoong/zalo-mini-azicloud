import React, { useEffect, useState } from "react";
import { Header, Page } from "zmp-ui";
import ArrowLeftIcon from "../static/arrow-left.png";
import {
  ModuleDetailsPageFooterButtons,
  ModuleDetailsPageHead,
  ModuleDetailsPageTabs,
} from "../components/ModuleDetailsPage";

const ModuleDetailPage = () => {
  const footerRef = React.useRef<HTMLDivElement>(null);
  const [footerOffset, setFooterOffset] = useState<number>();

  useEffect(() => {
    setFooterOffset(footerRef.current?.clientHeight);
  }, []);

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#FFF]">
      <Header
        title=""
        className="topbar no-border h-auto flex-none !bg-[#FFF] !pb-[8px] !pl-[16px] !pt-[32px]"
        backIcon={<img src={ArrowLeftIcon} />}
        textColor="white"
      />
      <div
        id="moduleDetailsPageTabContainer"
        className="flex flex-1 flex-col gap-[17px] overflow-auto px-[16px] py-[12px]"
      >
        <ModuleDetailsPageHead />
        <ModuleDetailsPageTabs footerOffset={footerOffset} />
        <ModuleDetailsPageFooterButtons ref={footerRef} />
      </div>
    </Page>
  );
};

export default ModuleDetailPage;
