import { useContext, useEffect, useMemo, useRef } from 'react'
import { FixedSizeList as List } from 'react-window'
import { SelectContext } from './Select'

interface ISelectOprions {
    focusedOption?: number
}

const SELECT_NO_OPTIONS_TEXT = 'Нет данных'
const SELECT_OPTION_HEIGHT = 32

const SelectOptions = ({  focusedOption }: ISelectOprions) => {
    const { options = [], value, onChange } = useContext(SelectContext)
    const focusedOptionRef = useRef<HTMLDivElement>(null)
    const height = useMemo(() => SELECT_OPTION_HEIGHT * options.length, [options])

    useEffect(() => {
        const target = focusedOptionRef.current

        if (target) {
            target.scrollIntoView({ block: 'center' })
        }
    }, [focusedOptionRef, focusedOption])

    if (options.length === 0) {
        return <div className="select-options__no-options">{SELECT_NO_OPTIONS_TEXT}</div>
    }

    return (
        <div className="select-options">
        <List
            itemData={options}
            itemCount={options.length}
            itemSize={SELECT_OPTION_HEIGHT}
            layout="vertical"
            height={height}
            width={'100%'}
        >
            {({ data, index, style }) => {
                const option = data[index]

                return (
                    <div
                        style={style}
                        ref={focusedOption === index ? focusedOptionRef : null}
                        key={`select-option_${option.value}_${index}`}
                        title={option.label}
                        className={`select-options__option${value?.value === option.value ? ' -selected' : ''}${focusedOption === index ? ' -focused' : ''}`}
                        onClick={e => {
                            e.stopPropagation()
                            onChange?.(option)
                        }}
                    >
                        {option.label}
                    </div>
                )
            }}
        </List>
        </div>
      
    )
}

export { SelectOptions }
