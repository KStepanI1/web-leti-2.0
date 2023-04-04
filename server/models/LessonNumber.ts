import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const LessonNumber = db.define("lessonnumber", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  number: { type: DataTypes.INTEGER, unique: "true" },
});

export { LessonNumber };
