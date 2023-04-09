import React, { useMemo } from "react";
import { generateClassName } from "../../helpers/generateClassName";
import TimtetableItem from "./TimtetableItem";
import { ITimetableExpanded } from "../../types/ITimetable";

type Props = {
  weekName: string;
  dayItems: ITimetableExpanded[];
};

function TimetableCard({ dayItems, weekName }: Props) {
  const ClassName = generateClassName("timetable-card");
  const ContentClassName = generateClassName("timetable-card-content");

  const Items = useMemo(
    () =>
      dayItems.map((timetable) => (
        <TimtetableItem key={`t-item-${timetable.id}`} data={timetable} />
      )),
    [dayItems]
  );

  return (
    <div className={ClassName}>
      <title>{weekName}</title>
      <table className={ContentClassName}>
        <tbody>{Items}</tbody>
      </table>
    </div>
  );
}

export default TimetableCard;
