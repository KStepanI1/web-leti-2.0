import { useMemo, useState } from "react";
import { ROUTERS, ROUTERS_NAMES } from "../../utils/constants";
import { BreadCrumbsType } from "../../components/BreadCrumbs";
import PageWrapper from "../../components/PageWrapper";
import PlusButton from "../../components/Buttons/PlusButton";
import LessonModal from "../../components/Modals/LessonModal";

const BREADCRUMBS: BreadCrumbsType = [
  {
    name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION],
  },
];

function LessonsAdministration() {
  const [lessonModal, setLessonModal] = useState({ show: false, edit: false });

  const Plus = useMemo(() => {
    return (
      <PlusButton onClick={() => setLessonModal({ show: true, edit: false })} />
    );
  }, []);

  return (
    <>
      <PageWrapper
        title={ROUTERS_NAMES[ROUTERS.ADMINISTRATION_LESSONS]}
        breadCrumbs={BREADCRUMBS}
        pageHeaderProps={{ children: Plus }}
      ></PageWrapper>
      {lessonModal.show && (
        <LessonModal
          edit={lessonModal.edit}
          onClose={() => setLessonModal({ show: false, edit: false })}
        />
      )}
    </>
  );
}

export default LessonsAdministration;
