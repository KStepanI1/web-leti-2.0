import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Gap = db.define("gaps", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  starttime: { type: DataTypes.TIME },
  endtime: { type: DataTypes.TIME },
});

export { Gap };
