import React from "react";
import HomePage from "./pages/Home/Home";
import Overview from "./pages/Overview/Overview";
import NotFound from "./pages/NotFound/NotFound";
import AdLogin from "./pages/AdLogin/AdLogin";
import DieuCanBiet from "./pages/DieuCanBiet/DieuCanBiet";
import PageNews from "./pages/PageNew/PageNews";
import AdManagePatients from "./pages/AdManagePatients/AdManagePatients";
import AdManageOverview from "./pages/AdManageOverview/AdManageOverview";
import AdManageDeclarers from "./pages/AdManageDeclarers/AdManageDeclarers";
import AdChangePassword from "./pages/AdChangePassword/AdChangePassword";
//import auth from "./auth";

export const routes = [
  {
    protected: false,
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    protected: false,
    path: "/overview",
    exact: true,
    main: () => <Overview />,
  },
  {
    protected: false,
    path: "/can-biet",
    exact: true,
    main: () => <DieuCanBiet />,
  },
  {
    protected: false,
    path: "/news",
    exact: true,
    main: () => <PageNews />,
  },
  {
    protected: false,
    path: "/admin",
    exact: true,
    main: ({location}) => <AdLogin location={location}/>,
  },
  {
    protected: true,
    path: "/admin/manage-patients",
    exact: true,
    main: () => <AdManagePatients />,
  },
  {
    protected: true,
    path: "/admin/manage-overview",
    exact: true,
    main: () => <AdManageOverview />,
  },
  {
    protected: true,
    path: "/admin/manage-declarers",
    exact: true,
    main: () => <AdManageDeclarers />,
  },
  {
    protected: true,
    path: "/admin/change-password",
    exact: true,
    main: () => <AdChangePassword />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
