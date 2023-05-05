/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SelectIdType, SelectLabelType, SelectOptionsType } from "../components/Select/Select";

type ArgsType<T extends { [key: string]: any }> = { valueGenerator: (val: T) => SelectIdType, labelGenerator: (val: T) => SelectLabelType, initial?: T[] | []}

export const useOptionsState = <T extends { [key: string]: any }>({ valueGenerator, labelGenerator, initial = []}: ArgsType<T>): [SelectOptionsType, (newArray: T[]) => void] => {
    const [options, setOptions] = useState<(SelectOptionsType)>(initial?.map(val => ({ value: valueGenerator(val), label: labelGenerator(val), ...val })) || [])

    const updateOptions = (newArray: T[] | []) => {
        setOptions((newArray.map(val => ({ value: valueGenerator(val), label: labelGenerator(val), ...newArray }))))
    }
    
    return [options, updateOptions]
}