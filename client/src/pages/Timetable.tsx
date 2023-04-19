import { useCallback, useContext, useEffect } from "react";
import timetableApi from "../api/Timetable";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";
import TimetableCard from "../components/Timetable/TimetableCard";
import { generateClassName } from "../helpers/generateClassName";
import PageHeader from "../components/PageTitle";

// type Props = {}
// {}: Props
function Timetable() {
  const { timetables, main } = useContext(StoreContext);
  const ClassName = generateClassName("timetable-page");
  const ContentClassName = generateClassName("timetable-page__content");

  const handleUpdate = useCallback(async () => {
    await main.updateWeekNumber();
    await timetableApi.getAllByWeeks({
      onComplete: (res) => timetables.setTimetables(res),
      filter: { week: main.weekNumber?.number },
    });
  }, []);

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate]);

  return (
    <div className={ClassName}>
      <PageHeader title="Расписание" />
      <div className={ContentClassName}>
        {timetables.all?.map(({ weekday, timetables }) => (
          <TimetableCard
            key={`t-card-${weekday.id}`}
            weekday={weekday}
            dayItems={timetables}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(Timetable);
