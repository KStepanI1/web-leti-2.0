import { useMemo, useState } from "react";
import { ROUTERS, ROUTERS_NAMES } from "../../utils/constants";
import { BreadCrumbsType } from "../../components/BreadCrumbs";
import PageWrapper from "../../components/PageWrapper";
import PlusButton from "../../components/Buttons/PlusButton";
import TeacherModal from "../../components/Modals/TeacherModal";

const BREADCRUMBS: BreadCrumbsType = [
  {
    name: ROUTERS_NAMES[ROUTERS.ADMINISTRATION],
  },
];

function TeachersAdministration() {
  const [teachersModal, setTeachersModal] = useState({
    show: false,
    edit: false,
  });

  const Plus = useMemo(() => {
    return (
      <PlusButton
        onClick={() => setTeachersModal({ show: true, edit: false })}
      />
    );
  }, []);

  return (
    <>
      <PageWrapper
        title={ROUTERS_NAMES[ROUTERS.ADMINISTRATION_TEACHERS]}
        breadCrumbs={BREADCRUMBS}
        pageHeaderProps={{ children: Plus }}
      ></PageWrapper>
      {teachersModal.show && (
        <TeacherModal
          edit={teachersModal.edit}
          onClose={() => setTeachersModal({ show: false, edit: false })}
        />
      )}
    </>
  );
}

export default TeachersAdministration;
