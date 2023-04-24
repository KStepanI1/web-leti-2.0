import { useContext, useEffect, useState } from "react";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";
import TimetableCard from "../components/Timetable/TimetableCard";
import { generateClassName } from "../helpers/generateClassName";
import PageHeader from "../components/PageHeader";
import { ROUTERS, ROUTERS_NAMES, WEEK_OPTIONS } from "../utils/constants";
import PendingWrapper from "../components/PendingWrapper";
import SwitchButton from "../components/Buttons/SwitchButton";

function Timetable() {
  const { timetables, main } = useContext(StoreContext);
  const ClassName = generateClassName("timetable-page");
  const ContentClassName = generateClassName("timetable-page__content");

  const currentWeek = main.settings?.week;
  const [week, setWeek] = useState(currentWeek);

  useEffect(() => {
    if (week) timetables.updateWeek(week);

    return () => {
      timetables.cancelUpdates();
    };
  }, [week]);

  return (
    <div className={ClassName}>
      <PageHeader
        title={ROUTERS_NAMES[ROUTERS.PATH_TIMETABLE]}
        justify="space-between"
      >
        <SwitchButton
          value={
            WEEK_OPTIONS.find((opt) => opt.value === week) || WEEK_OPTIONS[0]
          }
          onChange={(e) => setWeek(e.value)}
          options={WEEK_OPTIONS}
        />
      </PageHeader>
      <PendingWrapper data={timetables.week}>
        <div className={ContentClassName}>
          {timetables.week?.map(({ weekday, timetables }) => (
            <TimetableCard
              key={`t-card-${weekday.id}`}
              weekday={weekday}
              dayItems={timetables}
            />
          ))}
        </div>
      </PendingWrapper>
    </div>
  );
}

export default observer(Timetable);
