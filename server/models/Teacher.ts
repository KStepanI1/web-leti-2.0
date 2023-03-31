import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Teacher = db.define("teachers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullname: { type: DataTypes.STRING },
  lastname: { type: DataTypes.STRING },
  firstname: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
});

export { Teacher };
