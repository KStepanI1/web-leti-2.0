import React from "react";
import { ILessonExpanded } from "../../types/ILesson";
import { generateClassName } from "../../helpers/generateClassName";
import LessonType from "./LessonType";

type Props = {
  lesson?: ILessonExpanded;
  isRemotely: boolean;
  audienceNumber?: string;
};

const MAIN_CLASSNAME = "t-item-lesson";

function TimetableItemLesson({ lesson, isRemotely, audienceNumber }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);
  const TitleBoxClassName = generateClassName(MAIN_CLASSNAME + "__name-box");
  const TitleClassName = generateClassName(MAIN_CLASSNAME + "__name");
  const TeacherNameClassName = generateClassName(
    MAIN_CLASSNAME + "__teacher-name",
    MAIN_CLASSNAME + "__info"
  );
  const AudienceClassName = generateClassName(
    MAIN_CLASSNAME + "__audience",
    MAIN_CLASSNAME + "__info"
  );

  return (
    <div className={ClassName}>
      <div className={TitleBoxClassName}>
        <h4 className={TitleClassName}>{lesson?.name}</h4>
        <LessonType lessonType={lesson?.lessontype} />
      </div>

      <p className={TeacherNameClassName}>{lesson?.teacher?.fullName}</p>
      <p className={AudienceClassName}>
        {!isRemotely ? audienceNumber : "Дистанционно"}
      </p>
    </div>
  );
}

export default TimetableItemLesson;
