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

  const currentDay = new Date().getDay();
  const isToday = weekday.id % 7 === currentDay;
  const isTomorow = weekday.id % 7 === (currentDay + 1) % 7;
  const nameHint = isToday ? "(Сегодня)" : isTomorow ? "(Завтра)" : "";
  const weekdayName = `${weekday.name} ${nameHint}`;

  const lessonsCount = dayItems.length;
  const startTime =
    lessonsCount !== 0 && dayItems[0]?.gap?.startTime;
  const endTime =
    lessonsCount !== 0 && dayItems[lessonsCount - 1]?.gap?.endTime;
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
        <small className="hint">{hint}</small>
      </div>

      {Items && <div className={ContentClassName}>{Items}</div>}
    </div>
  );
}

export default TimetableCard;
