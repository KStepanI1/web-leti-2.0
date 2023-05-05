import React, { useId } from 'react'
import { generateClassName } from '../helpers/generateClassName'
import Label from './Label'

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    children?: React.ReactNode
    label?: string
    hint?: string
}

const MAIN_CLASSNAME = 'input'

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ value, onChange, children, className, label, hint, ...props }, ref) => {
    const ClassName = generateClassName(MAIN_CLASSNAME, className)
    const OutlineClassName = generateClassName(MAIN_CLASSNAME + '__outline')
    const LabelClassName = generateClassName(MAIN_CLASSNAME + '__label')
    const ChildrenClassName = generateClassName(MAIN_CLASSNAME + '__children')
    const HintClassName = generateClassName(MAIN_CLASSNAME + '__hint')
    const id = useId()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e)
    }

    return (
    <div className={OutlineClassName}>
        <input {...props}  className={ClassName} id={id} ref={ref} value={value} onChange={handleChange} />
        <Label  htmlFor={id} className={LabelClassName}  >
            {label}
        </Label>
        {children && <div className={ChildrenClassName}>
            {children}
        </div>}
        {hint && <small className={HintClassName}>
            {hint}
        </small>}
    </div>
    
  )
})

Input.displayName = "Input"

export default (Input)