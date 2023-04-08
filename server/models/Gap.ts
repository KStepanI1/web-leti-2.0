import { DataTypes, Model } from "sequelize";
import { db } from "../db/_index";

type GapType = {
  id?: number;
  startTime: string;
  endTime?: string;
  lessonNumber: number;
};

type GapModelType = Model<GapType>;

const Gap = db.define<GapModelType>("gap", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  startTime: { type: DataTypes.TIME, allowNull: false },
  endTime: { type: DataTypes.TIME },
  lessonNumber: { type: DataTypes.INTEGER, allowNull: false, unique: true },
});

const DEFAULT_GAPS: GapType[] = [
  {
    startTime: "8:00",
    endTime: "9:30",
    lessonNumber: 1,
  },
  {
    startTime: "9:50",
    endTime: "11:20",
    lessonNumber: 2,
  },
  {
    startTime: "11:40",
    endTime: "13:10",
    lessonNumber: 3,
  },
  {
    startTime: "13:40",
    endTime: "15:10",
    lessonNumber: 4,
  },
  {
    startTime: "15:30",
    endTime: "17:00",
    lessonNumber: 5,
  },
  {
    startTime: "17:20",
    endTime: "18:50",
    lessonNumber: 6,
  },
  {
    startTime: "19:05",
    lessonNumber: 7,
  },
];

export { Gap, DEFAULT_GAPS };
