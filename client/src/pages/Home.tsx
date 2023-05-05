import { useContext, useEffect } from "react";
import { StoreContext } from "..";
import PageHeader from "../components/PageHeader";
import { ROUTERS, ROUTERS_NAMES } from "../utils/constants";
import TimetableCard from "../components/Timetable/TimetableCard";
import { observer } from "mobx-react-lite";
import PendingWrapper from "../components/PendingWrapper";
import TimetableCardsWrapper from "../components/Timetable/TimetableCardsWrapper";
// type Props = {}

// {}: Props
function Home() {
  const { timetables } = useContext(StoreContext);
  const nearest = timetables.nearest;

  useEffect(() => {
    timetables.updateNearest();

    return () => {
      timetables.cancelUpdates();
    };
  }, []);

  return (
    <div>
      <PageHeader title={ROUTERS_NAMES[ROUTERS.HOME]} />
      <PendingWrapper data={nearest}>
        <TimetableCardsWrapper>
          {nearest?.today && (
            <TimetableCard
              dayItems={nearest.today.timetables}
              weekday={nearest.today.weekday}
            />
          )}
          {nearest?.tomorow && (
            <TimetableCard
              dayItems={nearest.tomorow.timetables}
              weekday={nearest.tomorow.weekday}
            />
          )}
        </TimetableCardsWrapper>
      </PendingWrapper>
    </div>
  );
}

export default observer(Home);
