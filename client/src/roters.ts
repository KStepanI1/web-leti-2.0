import React from "react";
import { ROUTERS } from "./utils/constants";

const Home = React.lazy(() => import("./pages/Home"));
const Timetable = React.lazy(() => import("./pages/Timetable"));
const TimetableAdministration = React.lazy(
  () => import("./pages/Administration/Timetable")
);
const LessonsAdministration = React.lazy(
  () => import("./pages/Administration/Lessons")
);

const TeachersAdministration = React.lazy(
  () => import("./pages/Administration/Teachers")
);

type RouterType = {
  path: string;
  Component: React.LazyExoticComponent<() => JSX.Element>;
  index?: boolean;
};

const PRIVATE_ROUTERS: RouterType[] = [
  {
    path: ROUTERS.ADMINISTRATION_TIMETABLE,
    Component: TimetableAdministration,
  },
  {
    path: ROUTERS.ADMINISTRATION_LESSONS,
    Component: LessonsAdministration,
  },
  {
    path: ROUTERS.ADMINISTRATION_TEACHERS,
    Component: TeachersAdministration,
  },
];

const PUBLIC_ROUTERS: RouterType[] = [
  {
    path: ROUTERS.HOME,
    Component: Home,
    index: true,
  },
  {
    path: ROUTERS.TIMETABLE,
    Component: Timetable,
  },
];

export { PRIVATE_ROUTERS, PUBLIC_ROUTERS };
