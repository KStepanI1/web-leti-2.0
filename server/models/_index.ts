import { User } from "./User";
import { Lesson } from "./Lesson";
import { Gap } from "./Gap";
import { Weekday } from "./Weekday";
import { Timetable } from "./Timetable";
import { Teacher } from "./Teacher";
import { Role } from "./Role";
import { LessonNumber } from "./LessonNumber";
import { Token } from "./Token";

Gap.belongsTo(LessonNumber);
LessonNumber.hasOne(Gap);

Role.belongsTo(User);
User.hasMany(Role);

Teacher.belongsTo(Lesson);
Lesson.hasMany(Teacher);

Timetable.belongsTo(Weekday);
Timetable.belongsTo(Lesson);
Timetable.belongsTo(Gap);
Gap.hasOne(Timetable);
Lesson.hasOne(Timetable);
Weekday.hasOne(Timetable);

Token.belongsTo(User);
User.hasOne(Token);

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
