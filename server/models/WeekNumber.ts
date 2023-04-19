import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type WeekNumberType = {
  id?: number;
  value: string;
  number: number;
};

export type WeekNumberModelType = Model<WeekNumberType>;

const WeekNumber = db.define<WeekNumberModelType>("weeknumber", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.STRING },
  number: { type: DataTypes.INTEGER },
});

export { WeekNumber };
