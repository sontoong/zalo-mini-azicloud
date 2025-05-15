import React from "react";
import { Header, Page } from "zmp-ui";
import Logo from "../static/azicloud-logo.png";
import {
  CreateStorePageCreateForm,
  CreateStorePageHead,
} from "../components/CreateStorePage.tsx";

const CreateStorePage = () => {
  return (
    <Page className="relative flex flex-1 flex-col bg-[#fafbff]">
      <div className="relative">
        <Header
          title={
            (
              <div className="h-[32px] w-[97.25px]">
                <img src={Logo} alt="" className="size-full object-cover" />
              </div>
            ) as unknown as string
          }
          className="topbar h-auto flex-none !bg-[#fafbff] !pb-[8px] !pt-[32px] pl-4"
          showBackIcon={false}
          textColor="white"
        />
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-[24px] p-[20px]">
          <CreateStorePageHead />
          <CreateStorePageCreateForm />
        </div>
      </div>
    </Page>
  );
};

export default CreateStorePage;
