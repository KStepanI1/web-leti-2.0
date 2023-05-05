import { useMemo, useEffect, useContext, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import { BreadCrumbsType } from "../../components/BreadCrumbs";
import { ROUTERS, ROUTERS_NAMES } from "../../utils/constants";
import PlusButton from "../../components/Buttons/PlusButton";
import { StoreContext } from "../..";
import { observer } from "mobx-react-lite";
import TimetableCardsWrapper from "../../components/Timetable/TimetableCardsWrapper";
import TimetableCard from "../../components/Timetable/TimetableCard";
import TimetableModal from "../../components/Modals/TimtetableModal";

// interface TimetableAdministrationProps {}

const BREADCRUMBS: BreadCrumbsType = [
  {
    name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION],
  },
];

function TimetableAdministration() {
  const { timetables } = useContext(StoreContext);

  const [timetableModal, setTimetableModal] = useState({
    show: false,
    edit: false,
  });

  useEffect(() => {
    timetables.updateAll();

    return () => {
      timetables.cancelUpdates();
    };
  }, []);

  const Plus = useMemo(() => {
    return (
      <PlusButton
        onClick={() => setTimetableModal({ show: true, edit: false })}
      />
    );
  }, []);

  return (
    <>
      <PageWrapper
        title={ROUTERS_NAMES[ROUTERS.ADMINISTRATION_TIMETABLE]}
        breadCrumbs={BREADCRUMBS}
        pageHeaderProps={{ children: Plus }}
      >
        <TimetableCardsWrapper>
          {timetables.all?.map(({ weekday, timetables }) => (
            <TimetableCard
              key={`t-card-${weekday.id}`}
              weekday={weekday}
              dayItems={timetables}
            />
          ))}
        </TimetableCardsWrapper>
      </PageWrapper>
      {timetableModal.show && (
        <TimetableModal
          edit={timetableModal.edit}
          onClose={() => setTimetableModal({ show: false, edit: false })}
        />
      )}
    </>
  );
}

export default observer(TimetableAdministration);
