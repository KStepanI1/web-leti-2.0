import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type SettingsType = {
  id?: number;
  week: number;
};

export type SettingsModelType = Model<SettingsType>;

const Settings = db.define<SettingsModelType>("settings", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  week: { type: DataTypes.INTEGER },
});

export { Settings };
