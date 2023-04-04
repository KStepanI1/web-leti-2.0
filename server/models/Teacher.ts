import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Teacher = db.define("teacher", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
});

export { Teacher };
