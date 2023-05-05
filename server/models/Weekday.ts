import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type WeekdayType = {
  id?: number;
  name: string;
  short: string;
  engShort: string;
  number: number;
};

export type WeekdayModelType = Model<WeekdayType>;

const Weekday = db.define<WeekdayModelType>("weekday", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  short: { type: DataTypes.STRING, allowNull: false },
  engShort: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.INTEGER, allowNull: false },
});

const DEFAULT_WEEKDAYS: WeekdayType[] = [
  {
    name: "Понедельник",
    short: "Пн.",
    engShort: "Mon",
    number: 1,
  },
  {
    name: "Вторник",
    short: "Вт.",
    engShort: "Tue",
    number: 2,
  },
  {
    name: "Среда",
    short: "Ср.",
    engShort: "Wed",
    number: 3,
  },
  {
    name: "Четверг",
    short: "Чт.",
    engShort: "Thu",
    number: 4,
  },
  {
    name: "Пятница",
    short: "Пт.",
    engShort: "Fri",
    number: 5,
  },
  {
    name: "Суббота",
    short: "Сб.",
    engShort: "Sat",
    number: 6,
  },
  {
    name: "Воскресенье",
    short: "Вск.",
    engShort: "Sun",
    number: 7,
  },
];

export { Weekday, DEFAULT_WEEKDAYS };
