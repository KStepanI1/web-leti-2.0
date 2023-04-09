import { IGap } from "./IGap";
import { ILesson } from "./ILesson";
import { IWeekday } from "./IWeekday";

export interface ITimetable {
  id: number;
  audienceNumber: number;
  isRemotely: boolean;
  lessonId: number | null;
  weekdayId: number | null;
  gapId: number | null;
}

export interface ITimetableExpanded extends ITimetable {
  lesson?: ILesson;
  weekday?: IWeekday;
  gap?: IGap;
}

export type ITimetableByWeeks = {
  weekName: string;
  timetables: ITimetableExpanded[];
}[];
