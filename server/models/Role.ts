import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Role = db.define("roles", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

export { Role };
