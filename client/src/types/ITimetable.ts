import { IGap } from "./IGap";
import { ILessonExpanded } from "./ILesson";
import { IWeekday } from "./IWeekday";

export interface ITimetable {
  id: number;
  audienceNumber: number;
  isRemotely: boolean;
  lessonId: number | null;
  weekdayId: number | null;
  gapId: number | null;
  week: number;
}

export interface ITimetableExpanded extends ITimetable {
  lesson?: ILessonExpanded;
  weekday?: IWeekday;
  gap?: IGap;
}

export type ITimetableByWeeks = {
  weekday: IWeekday;
  timetables: ITimetableExpanded[];
}[];
