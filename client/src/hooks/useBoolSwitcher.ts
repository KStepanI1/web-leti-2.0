import { useState } from "react"


const useBoolSwitcher = (initialValue = false) => {
    const [value, setValue] = useState(initialValue)

    function setFalse() {
        setValue(false)
    }

    function setTrue() {
        setValue(true)
    }

    function toggle() {
        setValue(state => !state)
    }

    function toInitial() {
        setValue(initialValue)
    }

    return {
        value,
        setFalse,
        setTrue,
        toggle,
        toInitial
    }
}

export { useBoolSwitcher }