import { User } from "./User";
import { Lesson } from "./Lesson";
import { DEFAULT_GAPS, Gap } from "./Gap";
import { DEFAULT_WEEKDAYS, Weekday } from "./Weekday";
import { Timetable } from "./Timetable";
import { Teacher } from "./Teacher";
import { Role } from "./Role";
import { Token } from "./Token";

function initDbConnections() {
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
}

function initDb() {
  initDbConnections();

  User;
  Lesson;
  Gap;
  Weekday;
  Timetable;
  Teacher;
  Role;

  DEFAULT_GAPS.forEach((dGap) => Gap.findOrCreate({ where: dGap }));
  DEFAULT_WEEKDAYS.forEach((dWeekday) =>
    Weekday.findOrCreate({ where: dWeekday })
  );
}

export { initDb };
