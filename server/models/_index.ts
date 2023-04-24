import { User } from "./User";
import { Lesson } from "./Lesson";
import { DEFAULT_GAPS, Gap } from "./Gap";
import { DEFAULT_WEEKDAYS, Weekday } from "./Weekday";
import { Timetable } from "./Timetable";
import { Teacher } from "./Teacher";
import { Role } from "./Role";
import { Token } from "./Token";
import { DEFAULT_LESSONTYPES, LessonType } from "./LessonType";
import { DEFAULT_SETTINGS, Settings } from "./Settings";

function initDbConnections() {
  Role.belongsTo(User);
  User.hasMany(Role);

  Timetable.belongsTo(Weekday);
  Timetable.belongsTo(Lesson);
  Timetable.belongsTo(Gap);
  Gap.hasOne(Timetable);
  Lesson.hasOne(Timetable);
  Weekday.hasOne(Timetable);

  Lesson.belongsTo(LessonType);
  LessonType.hasOne(Lesson);

  Lesson.belongsTo(Teacher);
  Teacher.hasOne(Lesson);

  Token.belongsTo(User);
  User.hasOne(Token);
}

async function initDbDefaultValues() {
  DEFAULT_GAPS.forEach((dGap) => Gap.findOrCreate({ where: dGap }));
  DEFAULT_WEEKDAYS.forEach((dWeekday) =>
    Weekday.findOrCreate({ where: dWeekday })
  );
  DEFAULT_LESSONTYPES.forEach((dLessonType) =>
    LessonType.findOrCreate({ where: dLessonType })
  );

  Settings.findOrCreate({ where: DEFAULT_SETTINGS })
}

export { initDbDefaultValues, initDbConnections };
