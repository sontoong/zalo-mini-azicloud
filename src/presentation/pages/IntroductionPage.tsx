import React, { FC, useContext, useState } from "react";
import { Header, Page } from "zmp-ui";
import Logo from "../static/azicloud-logo.png";
import {
  IntroductionPageBriefInformation,
  IntroductionPageFeatures,
  IntroductionPageFeaturesBrief,
  IntroductionPageFooter,
  IntroductionPageFooterImage,
  IntroductionPageRegisterCard,
  IntroductionPageStoreTypes,
} from "../components/IntoductionPage";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="page-content relative flex flex-1 flex-col bg-[#fafbff]">
      <div className="relative">
        <Header
          title={
            (
              <div
                className="h-[32px] w-[97.25px]"
                onClick={() => navigate("/")}
              >
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
        <div className="flex flex-col py-[20px]">
          <IntroductionPageBriefInformation />
          <IntroductionPageFeatures />
          <IntroductionPageStoreTypes />
          <IntroductionPageFeaturesBrief />
          <IntroductionPageFooterImage />
          <IntroductionPageFooter />
        </div>
        <IntroductionPageRegisterCard />
      </div>
    </Page>
  );
};

export default HomePage;
