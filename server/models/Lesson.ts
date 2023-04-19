import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type LessonType = {
  id?: number;
  name: string;
  lessontypeId?: number;
  teacherId?: number;
};

export type LessonModelType = Model<LessonType>;

const Lesson = db.define<LessonModelType>("lesson", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
});

export { Lesson };
