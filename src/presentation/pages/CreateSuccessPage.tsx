import React from "react";
import { Header, Page } from "zmp-ui";
import {
  CreateSuccessPageFooter,
  CreateSuccessPageHead,
  CreateSuccessPageStoreInfo,
} from "../components/CreateSuccessPage";

const CreateSuccessPage = () => {
  return (
    <Page
      className="relative flex flex-1 flex-col bg-[#fafbff]"
      style={{
        background: "linear-gradient(180deg, #E9F3FF 0%, #FFFFFF 53.39%)",
      }}
    >
      <Header
        title=""
        className="topbar no-border h-auto flex-none !bg-transparent !pb-[50px] !pt-[32px] pl-4"
        showBackIcon={false}
        textColor="white"
      />
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[40px] px-[16px] pt-[30px]">
          <CreateSuccessPageHead />
          <CreateSuccessPageStoreInfo />
          <CreateSuccessPageFooter />
        </div>
      </div>
    </Page>
  );
};

export default CreateSuccessPage;
