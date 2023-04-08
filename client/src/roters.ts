import Home from "./components/pages/Home";
import Timetable from "./components/pages/Timetable";
import { ROUTERS } from "./utils/constants";

type RouterType = {
  path: string;
  Component: () => JSX.Element;
  index?: boolean;
};

const AUTH_ROUTERS: RouterType[] = [
  {
    path: ROUTERS.PATH_TIMETABLE,
    Component: Timetable,
  },
];

const PUBLIC_ROUTERS: RouterType[] = [
  {
    path: ROUTERS.PATH_HOME,
    Component: Home,
    index: true,
  },
];

export { AUTH_ROUTERS, PUBLIC_ROUTERS };
