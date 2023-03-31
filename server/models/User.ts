import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const User = db.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

export { User };
