import { useEffect, useState } from "react"
import Modal, { CreateUpdateModalProps } from "./Modal"
import { ITimetable } from "../../types/ITimetable"
import Select from 'react-select';
import { IGap } from "../../types/IGap";
import { IWeekday } from "../../types/IWeekday";
import { ILessonType } from "../../types/ILessonType";
import lessonApi from "../../api/Lesson";
import gapApi from "../../api/Gap";
import weekdayApi from "../../api/Weekday";
import lessonTypeApi from "../../api/LessonType";
import { ILessonExpanded } from "../../types/ILesson";
import FormField from "../Form/FormField";

interface TimetableModalProps extends CreateUpdateModalProps {
    edit: boolean
}

const WEEKDAY_NUMBER_OPTIONS = [
    {
        value: 1,
        label: 'Нечетная неделя'
    },
    {
        value: 2,
        label: 'Четная неделя'
    },
    {
        value: 3,
        label: 'Обе недели'
    }
]

function TimtetableModal({ edit = false, ...props }: TimetableModalProps) {
    const [newTimetable, setNewTimetable] = useState<ITimetable>({} as ITimetable)
    const [lessons, setLessons] = useState<ILessonExpanded[]>([])
    const [gaps, setGaps] = useState<IGap[]>([])
    const [weekdays, setWeekdays] = useState<IWeekday[]>([])
    const [lessonTypes, setLessonTypes] = useState<ILessonType[]>([])

    console.log(gaps)

    useEffect(() => {
        lessonApi.getAll({ onComplete: setLessons })
        gapApi.getAll({ onComplete: setGaps })
        weekdayApi.getAll({ onComplete: setWeekdays })
        lessonTypeApi.getAll({ onComplete: setLessonTypes })

        return () => {
            gapApi.cancelRequests()
            weekdayApi.cancelRequests()
            lessonTypeApi.cancelRequests()
            lessonApi.cancelRequests()  
        }
    }, [])

    const handleSubmit = () => {
        return false
    }

  return (
    <Modal {...props}>
        <Modal.Header>
            <Modal.Title>
                {`${edit ? 'Редактирование' : 'Создание'} расписания`}
            </Modal.Title>
        </Modal.Header>
        <Modal.Form>
            <Modal.Body>
                <FormField name="Предмет">
                    <Select   />
                </FormField>
                <FormField name="Начало - конец">
                    <Select options={gaps?.map(gap => ({ value: gap.id, label: `${gap.startTime} - ${gap.endTime}`, ...gap }))}  />
                </FormField>
                <FormField name="День недели">
                    <Select options={weekdays?.map(weekday => ({ value: weekday.id, label: weekday.name, ...weekday }))}  />
                </FormField>
                <FormField name="Четность недели">
                    <Select options={WEEKDAY_NUMBER_OPTIONS} value={WEEKDAY_NUMBER_OPTIONS[0]}  />
                </FormField>
            </Modal.Body>
            <Modal.Footer onConfirm={() => false} confirmBtnName={edit ? 'Сохранить' : 'Создать'} />
            
        </Modal.Form>
        
    </Modal>
  )
}

export default TimtetableModal