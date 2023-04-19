import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type TeacherType = {
  id?: number;
  fullName: string;
  lastName: string;
  firstName: string;
  patronymic: string;
};

export type TeacherModelType = Model<TeacherType>;

const Teacher = db.define<TeacherModelType>("teacher", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fullName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  firstName: { type: DataTypes.STRING },
  patronymic: { type: DataTypes.STRING },
});

export { Teacher };
