import { generateClassName } from "../../helpers/generateClassName";
import { ITimetableExpanded } from "../../types/ITimetable";
import TimetableItemLesson from "./TimetableItemLesson";
import TimetableItemTime from "./TimetableItemTime";

type Props = {
  data: ITimetableExpanded;
};

const MAIN_CLASSNAME = "timetable-item";

function TimtetableItem({ data }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);
  const { gap, lesson, week, audienceNumber, isRemotely } = data;

  return (
    <div className={ClassName}>
      <TimetableItemTime gap={gap} week={week} />
      <TimetableItemLesson
        lesson={lesson}
        audienceNumber={audienceNumber}
        isRemotely={isRemotely}
      />
    </div>
  );
}

export default TimtetableItem;
