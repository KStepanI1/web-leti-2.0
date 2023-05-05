import React, { useEffect } from "react";
import { CreateUpdateModalProps } from "./Modal";
import Modal from "./Modal";
import Select, { SelectFormInputValuesType } from "../Select/Select";
import { useOptionsState } from "../../hooks/useOptionsState";
import { ILessonType } from "../../types/ILessonType";
import { ITeacher } from "../../types/ITeacher";
import { FormFieldsType } from "../../types/_basis/Form";
import lessonApi from "../../api/Lesson";
import teacherApi from "../../api/Teacher";
import lessonTypeApi from "../../api/LessonType";
import FormField from "../Form/FormField";
import Input from "../Input";

type LessonFormType = {
  teacher: SelectFormInputValuesType;
  lessonType: SelectFormInputValuesType;
  name: HTMLInputElement;
};

function LessonModal({ edit = false, ...props }: CreateUpdateModalProps) {
  const [lesssonTypes, setLessonTypes] = useOptionsState<ILessonType>({
    valueGenerator: (val) => val.id,
    labelGenerator: (val) => val.name,
  });
  const [teachers, setTeachers] = useOptionsState<ITeacher>({
    valueGenerator: (val) => val.id,
    labelGenerator: (val) => val.fullName,
  });

  useEffect(() => {
    lessonTypeApi.getAll({ onComplete: setLessonTypes });
    teacherApi.getAll({ onComplete: setTeachers });

    return () => {
      lessonTypeApi.cancelRequests();
      teacherApi.cancelRequests();
    };
  }, []);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    const fields = e.target as FormFieldsType<LessonFormType>;

    const teacherId = +fields.teacher.dataset.optionValue;
    const lessontypeId = +fields.lessonType.dataset.optionValue;
    const name = fields.name.value;

    await lessonApi.createLesson({
      body: {
        name,
        lessontypeId,
        teacherId,
      },
    });

    props.onClose();
  };

  return (
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>
          {`${edit ? "Редактирование" : "Создание"} предмета`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Form onSubmit={handleSubmit}>
        <Modal.Body>
          <FormField required name="Название">
            <Input required name="name" />
          </FormField>
          <FormField required name="Преподаватель">
            <Select options={teachers} required name="teacher" />
          </FormField>
          <FormField required name="Тип">
            <Select options={lesssonTypes} required name="lessonType" />
          </FormField>
        </Modal.Body>
        <Modal.Footer
          type="submit"
          confirmBtnName={edit ? "Сохранить" : "Создать"}
        />
      </Modal.Form>
    </Modal>
  );
}

export default LessonModal;
