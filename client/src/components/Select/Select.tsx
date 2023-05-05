import React, { createContext, useRef, useState } from 'react'
import { generateClassName } from '../../helpers/generateClassName'
import { SelectValue } from './SelectValue'
import { useInputField } from '../../hooks/useInputField'
import { SelectOptions } from './SelectOptions'
import { useBoolSwitcher } from '../../hooks/useBoolSwitcher'
import Popper from '../Popper'
import { usePopper } from 'react-popper'
import Icon from '../Icon'
import { InputProps } from '../Input'

 
export type SelectIdType = string | number 
export type SelectLabelType = string

export type SelectOptionType = { value: SelectIdType, label: SelectLabelType, [key: string]: unknown }
export type SelectOptionsType = SelectOptionType[]

export type SelectValueType = SelectOptionType

export type SelectChangeCallbackType = (e: SelectOptionType) => void

export type SelectFormInputValuesType =  { value: string, dataset: { optionValue: string } } 

interface SelectProps {
    value?: SelectValueType
    options?: SelectOptionsType
    onChange?: SelectChangeCallbackType
    className?: string
    disabled?: boolean
    containerClassName?: string
    required?: boolean
    inputProps?: Omit<InputProps, 'value' | 'ref'>,
    name?: string
}

const MAIN_CLASSNAME = 'select'

type SelectContextType = {
  value?: SelectValueType
  options?: SelectOptionsType
  onChange?: SelectChangeCallbackType
  disabled?: boolean
  required?: boolean
  onFocus?: () => void
  onBlur?: React.FocusEventHandler<HTMLDivElement>
  findOption?: (label: string) => SelectOptionType | undefined
}

export const SelectContext = createContext<SelectContextType>({
  value: undefined,
  options: [],
  onChange: () => false,
})

function Select({ value, options, onChange, className, containerClassName, required, disabled, inputProps, name }: SelectProps) {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null)
  const selectRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const opened = useBoolSwitcher(false)
  const search = useInputField()
  const [selectorValue, setSelectorValue] = useState<SelectLabelType>(value?.label || '')
  const [focused, setFocused] = useState(false)

  const ClassName = generateClassName(MAIN_CLASSNAME, className, { '--opened': opened.value })
  const ContainerClassName = generateClassName(MAIN_CLASSNAME + '__container', containerClassName, { '--opened': opened.value, '--focused': focused })
  const ArrowClassName = generateClassName(MAIN_CLASSNAME + '__arrow')
  const OptionsContainerClassName = generateClassName(MAIN_CLASSNAME + '__options-container')

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
        strategy: 'fixed',
        placement: 'bottom',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 2]
                }
            }
        ]
    })
  
   const onBlur = ((e: React.FocusEvent<HTMLDivElement>) => {
        if (!e?.currentTarget.contains(e.relatedTarget)) {
            opened.setFalse()
            search.reset()
            setFocused(false)
        }
    })

  const onSelectorClick = (() => {
        if (disabled) return
        if (!open) searchRef.current?.focus()
        opened.toggle()
    })

  const handleChange: SelectChangeCallbackType = ((e) => {
    if (onChange) onChange(e)
    
    setSelectorValue(e.label)
    opened.setFalse()
  })

  const findOption = (label: string) => options?.find(opt => opt.label === label)

  const Context: SelectContextType = {
    value,
    options,
    onChange: handleChange,
    required,
    onFocus: () => setFocused(true),
    onBlur,
    findOption
  }

  return (
    <div tabIndex={0} onBlur={onBlur} ref={selectRef} className={ContainerClassName} data-name={name} >
      <SelectContext.Provider value={Context}>
        <div ref={setReferenceElement} className={ClassName} onClick={onSelectorClick}>
          <SelectValue onChangeSearch={search.onChange} searchQuery={search.value} ref={searchRef} selectorValue={selectorValue} name={name} {...inputProps} />
          {!disabled && <div className={ArrowClassName}>{opened.value ? <Icon name="ArrowUp" color='var(--primary-20)' /> : <Icon name="ArrowDown" color='var(--gray-40)' />}</div>}
        </div>
        
        {opened.value &&
          <Popper className={OptionsContainerClassName}  ref={setPopperElement} width={selectRef.current?.offsetWidth} styles={styles} attributes={attributes}>
              <SelectOptions />
          </Popper> 
        }
      </SelectContext.Provider>
    </div>
  )
}

export default Select