import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Role = db.define("role", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

export { Role };
