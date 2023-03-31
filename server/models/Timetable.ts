import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Timetable = db.define("timetable", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  audiencenumber: { type: DataTypes.INTEGER },
  isremotely: { type: DataTypes.BOOLEAN },
});

export { Timetable };
