import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import { ROUTERS } from "./utils/constants";

type RouterType = {
  path: string;
  Component: () => JSX.Element;
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
