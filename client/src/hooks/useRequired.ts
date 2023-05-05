import { useEffect, useState } from "react"

export const useRequired = (fields: boolean[]) => {
    const [isValid, setValid] = useState(fields.every(field => field))

    useEffect(() => {
        setValid((fields.every(field => field)))
    }, [fields])

    return isValid
} 