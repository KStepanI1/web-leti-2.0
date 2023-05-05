import {useState} from 'react'
import { SelectChangeCallbackType, SelectValueType } from '../components/Select/Select'

export const useSelectField = () => {
    const [value, setValue] = useState<SelectValueType>()

    const onChange: SelectChangeCallbackType = (opt) => {
        setValue(opt)
    }

    const reset = () => {
        setValue(undefined)
    }

    return {
        value,
        onChange,
        reset
    }
}