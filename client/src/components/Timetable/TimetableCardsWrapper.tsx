import React from 'react'
import { generateClassName } from '../../helpers/generateClassName';

interface TimetableCardsWrapper {
    children?: React.ReactNode
}

const MAIN_CLASSNAME = "timteble-cards-wrapper"

function TimetableCardsWrapper({ children }: TimetableCardsWrapper) {
const ClassName = generateClassName(MAIN_CLASSNAME);

  return (
    <div className={ClassName}>
            {children}
        </div>
  )
}

export default TimetableCardsWrapper