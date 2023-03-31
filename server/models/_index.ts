// import { db } from "../db/_index";
// import { DataTypes } from 'sequelize';

import { User } from "./User";
import { Lesson } from "./Lesson";
import { Gap } from "./Gap";
import { Weekday } from "./Weekday";
import { Timetable } from "./Timetable";
import { Teacher } from "./Teacher";
import { Role } from "./Role";
import { LessonNumber } from "./LessonNumber";

Gap.hasOne(LessonNumber);
LessonNumber.belongsTo(Gap);

Role.hasMany(User);
User.belongsTo(Role);

Teacher.hasMany(Lesson);
Lesson.belongsTo(Teacher);

Timetable.hasOne(Weekday);
Timetable.hasOne(Lesson);
Timetable.hasOne(Gap);
Gap.belongsTo(Timetable);
Lesson.belongsTo(Timetable);
Weekday.belongsTo(Timetable);

export default {
  User,
  Lesson,
  Gap,
  Weekday,
  Timetable,
  Teacher,
  Role,
  LessonNumber,
};
