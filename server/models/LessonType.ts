import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

export type LessonTypeType = {
  id?: number;
  name: string;
  shortName: string;
};

export type LessonTypeModelType = Model<LessonTypeType>;

const LessonType = db.define<LessonTypeModelType>("lessontype", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  shortName: { type: DataTypes.STRING },
});

const DEFAULT_LESSONTYPES: LessonTypeType[] = [
  {
    id: 1,
    name: "Лекция",
    shortName: "Лек.",
  },
  {
    id: 2,
    name: "Практика",
    shortName: "Пр.",
  },
];

export { LessonType, DEFAULT_LESSONTYPES };
