import { ROUTERS, ROUTERS_NAMES } from "./utils/constants";

export type NavigationItemType = {
  path: string;
  name: string;
  children?: NavigationItemType[];
};

const NAVIGATION: NavigationItemType[] = [
  {
    path: ROUTERS.HOME,
    name: ROUTERS_NAMES[ROUTERS.HOME],
  },
  {
    path: ROUTERS.TIMETABLE,
    name: ROUTERS_NAMES[ROUTERS.TIMETABLE],
  },
  {
    path: ROUTERS.ADMINISTRATION,
    name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION],
    children: [
      {
        path: ROUTERS.ADMINISTRATION_TIMETABLE,
        name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION_TIMETABLE],
      },
      {
        path: ROUTERS.ADMINISTRATION_LESSONS,
        name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION_LESSONS],
      },
      {
        path: ROUTERS.ADMINISTRATION_TEACHERS,
        name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION_TEACHERS],
      },
    ],
  },
];

export { NAVIGATION };
