import { useContext, useEffect, useState } from "react";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";
import TimetableCard from "../components/Timetable/TimetableCard";
import { generateClassName } from "../helpers/generateClassName";
import PageHeader from "../components/PageHeader";
import { ROUTERS, ROUTERS_NAMES, WEEK_OPTIONS } from "../utils/constants";
import PendingWrapper from "../components/PendingWrapper";
import SwitchButton from "../components/Buttons/SwitchButton";
import TimtetableModal from "../components/Modals/TimtetableModal";
import TimetableCardsWrapper from "../components/Timetable/TimetableCardsWrapper";

function Timetable() {
  const { timetables, main } = useContext(StoreContext);
  const ClassName = generateClassName("timetable-page");
  const [showTimetableModal, setShowTimetableModal] = useState(false);

  const currentWeek = main.settings?.week;
  const [week, setWeek] = useState(currentWeek);

  useEffect(() => {
    if (week) timetables.updateWeek(week);

    return () => {
      timetables.cancelUpdates();
    };
  }, [week]);

  return (
    <>
      <div className={ClassName}>
        <PageHeader title={ROUTERS_NAMES[ROUTERS.TIMETABLE]}>
          <SwitchButton
            value={
              WEEK_OPTIONS.find((opt) => opt.value === week) || WEEK_OPTIONS[0]
            }
            onChange={(e) => setWeek(e.value)}
            options={WEEK_OPTIONS}
          />
        </PageHeader>
        <PendingWrapper data={timetables.week}>
          <TimetableCardsWrapper>
            {timetables.week?.map(({ weekday, timetables }) => (
              <TimetableCard
                key={`t-card-${weekday.id}`}
                weekday={weekday}
                dayItems={timetables}
              />
            ))}
          </TimetableCardsWrapper>
        </PendingWrapper>
      </div>
      {showTimetableModal && (
        <TimtetableModal
          edit={false}
          onClose={() => setShowTimetableModal(false)}
        />
      )}
    </>
  );
}

export default observer(Timetable);
