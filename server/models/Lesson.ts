import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Lesson = db.define("lessons", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

export { Lesson };
