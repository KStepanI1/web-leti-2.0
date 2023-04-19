import React, { useMemo } from "react";
import { generateClassName } from "../../helpers/generateClassName";
import TimtetableItem from "./TimtetableItem";
import { ITimetableExpanded } from "../../types/ITimetable";
import { IWeekday } from "../../types/IWeekday";
import { pluralize } from "../../helpers/pluralize";

type Props = {
  weekday: IWeekday;
  dayItems: ITimetableExpanded[];
};

const MAIN_CLASSNAME = "timetable-card";

function TimetableCard({ dayItems, weekday }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);
  const TitleClassName = generateClassName(MAIN_CLASSNAME + "__weekday");
  const ContentClassName = generateClassName(MAIN_CLASSNAME + "__content");

  const isToday = weekday.id % 6 === new Date().getDay();
  const weekdayName = `${weekday.name} ${isToday ? "(Сегодня)" : ""}`;

  const lessonsCount = dayItems.length;
  const startTime =
    lessonsCount !== 0 && dayItems[0].gap?.startTime.slice(0, -3);
  const endTime =
    lessonsCount !== 0 && dayItems[lessonsCount - 1].gap?.endTime.slice(0, -3);
  const fromTo = `с ${startTime} до ${endTime}`;

  const hint = `${pluralize(lessonsCount, "пара", "пары", "пар")} ${
    lessonsCount ? fromTo : ""
  }`;

  const Items = useMemo(() => {
    if (!dayItems.length) return null;

    return dayItems.map((timetable) => (
      <TimtetableItem key={`t-item-${timetable.id}`} data={timetable} />
    ));
  }, [dayItems]);

  return (
    <div className={ClassName}>
      <div className={TitleClassName}>
        <h4>{weekdayName}</h4>
        <h6 className="hint">{hint}</h6>
      </div>

      {Items && <div className={ContentClassName}>{Items}</div>}
    </div>
  );
}

export default TimetableCard;
