import React from 'react'

export type PopperStyles = { [key: string]: React.CSSProperties }

export type PopperAttributes = {
    [key: string]:
        | {
              [key: string]: string
          }
        | undefined
}

export interface IPopper extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: React.ReactNode
    styles: PopperStyles
    width?: number
    attributes: PopperAttributes
}

const Popper = React.forwardRef<HTMLDivElement, IPopper>(({ children, styles, attributes, className, width, ...props }, ref) => {
    return (
        <div
            {...props}
            ref={ref}
            className={`popper ${className ? ` ${className}` : ''}`}
            style={{
                width: `${width}px`,
                ...styles.popper,
                ...props.style,
            }}
            {...attributes?.popper}
        >
            {children}
        </div>
    )
})

Popper.displayName = "Popper"

export default Popper