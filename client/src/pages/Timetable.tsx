import { useCallback, useContext, useEffect, useMemo } from "react";
import timetableApi from "../api/Timetable";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";
import TimetableCard from "../components/Timetable/TimetableCard";
import { generateClassName } from "../helpers/generateClassName";

// type Props = {}
// {}: Props
function Timetable() {
  const { timetables } = useContext(StoreContext);
  const ClassName = generateClassName("timetable-page");
  const ContentClassName = generateClassName("timetable-page__content");

  const handleUpdate = useCallback(async () => {
    await timetableApi.getAllByWeeks({
      onComplete: (res) => timetables.setTimetables(res),
    });
  }, []);

  useEffect(() => {
    timetableApi.cancelRequests();
    handleUpdate();
  }, [handleUpdate]);

  const Cards = useMemo(() => {
    if (!timetables.all) return null;

    return timetables.all?.map(({ weekName, timetables }) => (
      <TimetableCard
        key={`t-card-${weekName}`}
        weekName={weekName}
        dayItems={timetables}
      />
    ));
  }, []);

  return (
    <div className={ClassName}>
      <div className={ContentClassName}>{Cards}</div>
    </div>
  );
}

export default observer(Timetable);
