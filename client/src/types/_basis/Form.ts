
export type FormFieldsType<T extends { [name: string]: { value: string } }> = EventTarget & T