import Modal, { CreateUpdateModalProps } from "./Modal";
import { IGap } from "../../types/IGap";
import { IWeekday } from "../../types/IWeekday";
import lessonApi from "../../api/Lesson";
import gapApi from "../../api/Gap";
import weekdayApi from "../../api/Weekday";
import timetableApi from "../../api/Timetable";
import { ILessonExpanded } from "../../types/ILesson";
import FormField from "../Form/FormField";
import React, { useEffect } from "react";
import { Loader } from "../Loader";
import Select, { SelectFormInputValuesType } from "../Select/Select";
import { useOptionsState } from "../../hooks/useOptionsState";
import Input from "../Input";
import { FormFieldsType } from "../../types/_basis/Form";

interface TimetableModalProps extends CreateUpdateModalProps {
  edit: boolean;
}

const WEEKDAY_NUMBER_OPTIONS = [
  {
    value: 1,
    label: "Нечетная неделя",
  },
  {
    value: 2,
    label: "Четная неделя",
  },
  {
    value: 3,
    label: "Обе недели",
  },
];

type TimetableFormType = {
  lesson: SelectFormInputValuesType;
  weekday: SelectFormInputValuesType;
  weekNumber: SelectFormInputValuesType;
  gap: SelectFormInputValuesType;
  audience: HTMLInputElement;
};

function TimetableModal({ edit = false, ...props }: TimetableModalProps) {
  const [lessons, setLessons] = useOptionsState<ILessonExpanded>({
    valueGenerator: (val) => val.id,
    labelGenerator: (val) => `${val.name} - ${val.lessontype.name}`,
  });
  const [gaps, setGaps] = useOptionsState<IGap>({
    valueGenerator: (val) => val.id,
    labelGenerator: (val) => `${val.startTime} - ${val.endTime}`,
  });
  const [weekdays, setWeekdays] = useOptionsState<IWeekday>({
    valueGenerator: (val) => val.id,
    labelGenerator: (val) => val.name,
  });

  useEffect(() => {
    lessonApi.getAll({ onComplete: setLessons });
    gapApi.getAll({ onComplete: setGaps });
    weekdayApi.getAll({ onComplete: setWeekdays });

    return () => {
      gapApi.cancelRequests();
      weekdayApi.cancelRequests();
      lessonApi.cancelRequests();
    };
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const fields = e.target as FormFieldsType<TimetableFormType>;

    const lessonId = +fields.lesson.dataset.optionValue;
    const gapId = +fields.gap.dataset.optionValue;
    const weekdayId = +fields.weekday.dataset.optionValue;
    const week = +fields.weekNumber.dataset.optionValue;
    const audience = fields.audience.value;

    await timetableApi.createTimetable({
      body: {
        audienceNumber: audience,
        isRemotely: false,
        lessonId,
        week,
        weekdayId,
        gapId,
      },
    });

    props.onClose();
  };

  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>
          {`${edit ? "Редактирование" : "Создание"} расписания`}
        </Modal.Title>
      </Modal.Header>
      <React.Suspense fallback={<Loader size="medium" />}>
        <Modal.Form onSubmit={handleSubmit}>
          <Modal.Body>
            <FormField required name="Предмет">
              <Select options={lessons} required name="lesson" />
            </FormField>
            <FormField required name="Номер аудитории">
              <Input name="audience" required />
            </FormField>
            <FormField required name="Начало - конец">
              <Select options={gaps} name="gap" required />
            </FormField>
            <FormField required name="День недели">
              <Select options={weekdays} name="weekday" required />
            </FormField>
            <FormField required name="Четность недели">
              <Select
                options={WEEKDAY_NUMBER_OPTIONS}
                name="weekNumber"
                required
              />
            </FormField>
          </Modal.Body>
          <Modal.Footer
            type="submit"
            confirmBtnName={edit ? "Сохранить" : "Создать"}
          />
        </Modal.Form>
      </React.Suspense>
    </Modal>
  );
}

export default TimetableModal;
