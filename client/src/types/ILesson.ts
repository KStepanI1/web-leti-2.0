import { ILessonType } from "./ILessonType";
import { ITeacher } from "./ITeacher";

export interface ILesson {
  id: number;
  name: string;
  lessontypeId: number | null;
  teacherId: number | null;
}

export interface ILessonExpanded extends ILesson {
  lessontype: ILessonType;
  teacher: ITeacher;
}
