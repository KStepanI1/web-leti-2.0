import { FormFieldsType } from "../../types/_basis/Form";
import FormField from "../Form/FormField";
import Input from "../Input";
import Modal, { CreateUpdateModalProps } from "./Modal";
import teacherApi from "../../api/Teacher";

type LessonFormType = {
  lastName: HTMLInputElement;
  firstName: HTMLInputElement;
  patronymic: HTMLInputElement;
};

function TeacherModal({ edit = false, ...props }: CreateUpdateModalProps) {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    const fields = e.target as FormFieldsType<LessonFormType>;

    const lastName = fields.lastName.value;
    const firstName = fields.firstName.value;
    const patronymic = fields.patronymic.value;

    await teacherApi.createTeacher({
      body: {
        fullName: `${lastName} ${firstName}${
          patronymic ? " " + patronymic : ""
        }`,
        lastName,
        firstName,
        patronymic,
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
          <FormField required name="Фамилия">
            <Input required name="lastName" />
          </FormField>
          <FormField required name="Имя">
            <Input required name="firstName" />
          </FormField>
          <FormField name="Отчество">
            <Input name="patronymic" />
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

export default TeacherModal;
