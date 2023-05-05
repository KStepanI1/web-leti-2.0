import { IWeekday } from "../types/IWeekday";

const HOME = "/";
const TIMETABLE = "/timetable";
const LOGIN = "/login";
const ADMINISTRATION = "/administration";
const LESSONS = "/lessons";
const TEACHERS = "/teachers";

const ADMINISTRATION_LESSONS = ADMINISTRATION + LESSONS;
const ADMINISTRATION_TIMETABLE = ADMINISTRATION + TIMETABLE;
const ADMINISTRATION_TEACHERS = ADMINISTRATION + TEACHERS;

const ROUTERS = {
  HOME,
  TIMETABLE,
  LOGIN,
  ADMINISTRATION,
  ADMINISTRATION_TIMETABLE,
  ADMINISTRATION_LESSONS,
  ADMINISTRATION_TEACHERS,
} as const;

const ROUTERS_NAMES = {
  [HOME]: "Главная",
  [TIMETABLE]: "Расписание",
  [LOGIN]: "Вход в систему",
  [ADMINISTRATION]: "Администрирование",
  [ADMINISTRATION_TIMETABLE]: "Расписание",
  [ADMINISTRATION_LESSONS]: "Предметы",
  [ADMINISTRATION_TEACHERS]: "Преподаватели",
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
    short: "Пн",
    number: 1,
  },
  {
    id: 2,
    name: "Вторник",
    short: "Вт",
    number: 2,
  },
  {
    id: 3,
    name: "Среда",
    short: "Ср",
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
    short: "Пт",
    number: 5,
  },
  {
    id: 6,
    name: "Суббота",
    short: "Сб",
    number: 6,
  },
  {
    id: 7,
    name: "Воскресенье",
    short: "Вс",
    number: 0,
  },
];

export { ROUTERS, ROLES, ROUTERS_NAMES, WEEK_OPTIONS, WEEKDAYS };
