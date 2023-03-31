import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Weekday = db.define("weekdays", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

export { Weekday };
