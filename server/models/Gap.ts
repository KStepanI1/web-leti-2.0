import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Gap = db.define("gap", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  startTime: { type: DataTypes.TIME },
  endTime: { type: DataTypes.TIME },
});

export { Gap };
