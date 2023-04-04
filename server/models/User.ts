import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type UserModelType = Model<{
  id?: number;
  email: string;
  password: string;
}>;

const User = db.define<UserModelType>("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

export { User };
