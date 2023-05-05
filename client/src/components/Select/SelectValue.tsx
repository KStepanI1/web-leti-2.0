import React, { useContext } from 'react'
import Input, { InputProps } from '../Input'
import { SelectContext, SelectLabelType } from './Select'

export interface ISelectValue extends InputProps {
    ref?: React.Ref<HTMLInputElement>
    searchQuery: string
    onChangeSearch: React.ChangeEventHandler<HTMLInputElement>
    selectorValue: SelectLabelType
}

const SelectValue = React.forwardRef<HTMLInputElement, ISelectValue>(
    ({ searchQuery, onChangeSearch, disabled, selectorValue, placeholder, name, ...rest }, ref) => {

        const { required, onFocus, value, findOption } = useContext(SelectContext)

        return (
            <div className="select-value">
                {!searchQuery && (
                    <Input
                        tabIndex={1}
                        disabled={disabled}
                        placeholder={placeholder}
                        value={selectorValue}
                        data-option-value={findOption?.(selectorValue)?.value}
                        required={required}
                        className={`select-value__selected`}
                        name={name}
                        {...rest}
                    />
                )}
                <Input
                    autoComplete="off"
                    tabIndex={0}
                    ref={ref}
                    title={searchQuery || value?.toString()}
                    value={searchQuery}
                    disabled={disabled}
                    onChange={onChangeSearch}
                    onFocus={onFocus}
                    className={`select-value__search`}
                />
            </div>
        )
    }
)

SelectValue.displayName = "SelectValue"

export { SelectValue }
