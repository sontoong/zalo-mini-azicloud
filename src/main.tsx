/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import { App as AntdApp, ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import dayjs from "dayjs";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { App, Box, SnackbarProvider } from "zmp-ui";

import { getBasePath } from "./presentation/utils/zma";

import { validateMessages } from "./presentation/constants/validate-messages";
import IntroductionPage from "./presentation/pages/IntroductionPage";
import CreateStorePage from "./presentation/pages/CreateStorePage";
import CreateSuccessPage from "./presentation/pages/CreateSuccessPage";
import ModulesPage from "./presentation/pages/ModulesPage";
import ModuleDetailPage from "./presentation/pages/ModuleDetailsPage";

import "dayjs/locale/vi";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
//change to vietnamese
dayjs.locale("vi");
//add plugins
dayjs.extend(utc);
dayjs.extend(timezone);

import { AppProvider } from "./presentation/context/AppContext";

const Layout = () => {
  return (
    <Box flex flexDirection="column" className="h-screen">
      <Box className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
        <ToastContainer style={{ marginTop: "48px" }} />
      </Box>
    </Box>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <IntroductionPage />,
        },
        {
          path: "/create-store",
          element: <CreateStorePage />,
        },
        {
          path: "/create-success",
          element: <CreateSuccessPage />,
        },
        {
          path: "/modules",
          element: <ModulesPage />,
        },
        {
          path: "/modules/:moduleId",
          element: <ModuleDetailPage />,
        },
      ],
    },
  ],
  { basename: getBasePath() },
);

const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#34499D      ",
              fontFamily:
                "Roboto, 'Inter',-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
            },
          }}
          form={{ validateMessages }}
          locale={viVN}
        >
          <AntdApp>
            <SnackbarProvider>
              <AppProvider>
                <RouterProvider router={router} />
              </AppProvider>
            </SnackbarProvider>
          </AntdApp>
        </ConfigProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;
