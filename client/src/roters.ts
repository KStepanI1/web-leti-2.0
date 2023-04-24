import React from "react";
import { ROUTERS } from "./utils/constants";

const Home = React.lazy(() => import("./pages/Home"));
const Timetable = React.lazy(() => import("./pages/Timetable"));

type RouterType = {
  path: string;
  Component: React.LazyExoticComponent<
    (() => JSX.Element) & {
      displayName: string;
    }
  >;
  index?: boolean;
};

const AUTH_ROUTERS: RouterType[] = [];

const PUBLIC_ROUTERS: RouterType[] = [
  {
    path: ROUTERS.PATH_HOME,
    Component: Home,
    index: true,
  },
  {
    path: ROUTERS.PATH_TIMETABLE,
    Component: Timetable,
  },
];

export { AUTH_ROUTERS, PUBLIC_ROUTERS };
