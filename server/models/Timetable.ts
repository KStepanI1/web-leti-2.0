import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type TimetableModelType = Model<TimetableType>;

export type TimetableType = {
  id?: number;
  audienceNumber: number;
  isRemotely?: boolean;
  lessonId?: number;
  weekdayId?: number;
  gapId?: number;
};

const Timetable = db.define<TimetableModelType>("timetable", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  audienceNumber: { type: DataTypes.INTEGER, allowNull: true },
  isRemotely: { type: DataTypes.BOOLEAN, defaultValue: false },
});

export { Timetable };
