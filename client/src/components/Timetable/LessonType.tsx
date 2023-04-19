import React from "react";
import { generateClassName } from "../../helpers/generateClassName";
import { ILessonType } from "../../types/ILessonType";

type Props = {
  lessonType?: ILessonType;
};

const MAIN_CLASSNAME = "lesson-type";

function LessonType({ lessonType }: Props) {
  const LessonTypeClassName = generateClassName(MAIN_CLASSNAME, {
    "lec-type": lessonType?.id == 1,
    "prac-type": lessonType?.id === 2,
  });

  const lessonTypeName = lessonType?.name.toLowerCase();
  return <span className={LessonTypeClassName}>{lessonTypeName}</span>;
}

export default LessonType;
