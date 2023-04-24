import { IWeekday } from "../types/IWeekday";

const PATH_HOME = "/";
const PATH_TIMETABLE = "/timetable";
const PATH_LOGIN = "/login";

const ROUTERS = {
  PATH_HOME,
  PATH_TIMETABLE,
  PATH_LOGIN,
} as const;

const ROUTERS_NAMES = {
  [PATH_HOME]: "Главная",
  [PATH_TIMETABLE]: "Расписание",
  [PATH_LOGIN]: "Вход в систему",
};

const SUPER_ROLE = "Super";
const ADMIN_ROLE = "Admin";
const USER_ROLE = "User";

const ROLES = {
  SUPER_ROLE,
  ADMIN_ROLE,
  USER_ROLE,
};

const WEEK_OPTIONS = [
  {
    value: 1,
    label: "Нечетная",
  },
  {
    value: 2,
    label: "Четная",
  },
];

const WEEKDAYS: IWeekday[] = [
  {
    id: 1,
    name: "Понедельник",
    short: "Пн.",
    number: 1,
  },
  {
    id: 2,
    name: "Вторник",
    short: "Вт.",
    number: 2,
  },
  {
    id: 3,
    name: "Среда",
    short: "Ср.",
    number: 3,
  },
  {
    id: 4,
    name: "Четверг",
    short: "Чт.",
    number: 4,
  },
  {
    id: 5,
    name: "Пятница",
    short: "Пт.",
    number: 5,
  },
  {
    id: 6,
    name: "Суббота",
    short: "Сб.",
    number: 6,
  },
  {
    id: 7,
    name: "Воскресенье",
    short: "Вск.",
    number: 0,
  },
];

export { ROUTERS, ROLES, ROUTERS_NAMES, WEEK_OPTIONS, WEEKDAYS };
