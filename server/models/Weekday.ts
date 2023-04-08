import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

type WeekdayType = {
  id?: number;
  name: string;
};

type WeekdayModelType = Model<WeekdayType>;

const Weekday = db.define<WeekdayModelType>("weekday", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

const DEFAULT_WEEKDAYS: WeekdayType[] = [
  {
    name: "Понедельник",
  },
  {
    name: "Вторник",
  },
  {
    name: "Среда",
  },
  {
    name: "Четверг",
  },
  {
    name: "Пятница",
  },
  {
    name: "Суббота",
  },
  {
    name: "Воскресенье",
  },
];

export { Weekday, DEFAULT_WEEKDAYS };
