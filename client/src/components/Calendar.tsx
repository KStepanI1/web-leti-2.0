

import { useEffect, useState } from 'react'
import { generateClassName } from '../helpers/generateClassName'
import { getMonthEnd, getMonthHuman, getMonthStart  } from '@wojtekmaj/date-utils';
import { WEEKDAYS } from '../utils/constants';
import { Button } from './Buttons/Button';
import Icon from './Icon';

const MAIN_CLASSNAME = 'calendar'

type DayType = {
    date: Date
}

type MonthType =  1 | 2 | 3 | 4| 5 | 6 | 7 | 8 | 9| 10| 11 | 12

const MONTH_NAMES = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
}

const MAX_CALENDAR_DAYS = 42

function Calendar() {
    const [navigation, setNavigation] = useState<{ year: number, month: MonthType }>({ year: new Date().getFullYear(), month: getMonthHuman(new Date()) as MonthType})

    const year = navigation.year
    const month = navigation.month
    const currentDate = new Date(`${year}-${month}-${1}`)

    const [days, setDays] = useState<DayType[]>([])

    const monthIncrement = (): [MonthType, number] => {
        let newMonth = month
        if (newMonth === 12) return [1, year + 1]

        return [++newMonth as MonthType, year]
    }

    const monthDecrement = (): [MonthType, number] => {
        let newMonth = month
        if (month === 1) return [12, year - 1]

        return [--newMonth as MonthType, year]
    }

    const createDate = (year: string | number, month: string | number, day: string | number) => {
        return new Date(`${year}-${month}-${day}`)
    }

    const twoDatesCompareIgnoreTime = (first: Date, second: Date) => {
        const firstMonth = getMonthHuman(first)
        const firstYear = first.getFullYear()
        const firstDate = first.getDate()

        const secondMonth = getMonthHuman(second)
        const secondYear = second.getFullYear()
        const secondDate = second.getDate()

        return createDate(firstYear, firstMonth, firstDate).valueOf() === createDate(secondYear, secondMonth, secondDate).valueOf()
    }

    const handleNavigation = (action: 'Decrement' | 'Increment') => {

        switch(action) {
            case 'Decrement': {
                const [prevMonth, prevYear] = monthDecrement()
                setNavigation({ year: prevYear, month: prevMonth })
                break;
            }
            case 'Increment': {
                const [nextMonth, nextYear] = monthIncrement()
                setNavigation({ year: nextYear, month: nextMonth })
                break
            }
            default:
                break
        }

    }

    const rebuildDays = () => {
        const newDays: DayType[] = []
        const [prevMonth, prevYear] = monthDecrement();
        const [nextMonth, nextYear] = monthIncrement();

        const prevMonthEnd = getMonthEnd(createDate(prevYear, prevMonth, 1)).getDate()

        const currentMonthStart = getMonthStart(currentDate)
        const currentMonthEnd = getMonthEnd(currentDate)

        const day = currentMonthStart.getDay()
        const neighbourMonthDays: DayType[] = []
        const neighbourMonthDaysLength = day - 1
        const calendarEnd = currentMonthEnd.getDate()

        for (let i = neighbourMonthDaysLength - 1; i >= 0; i--) {
            neighbourMonthDays.push({
                date: createDate(prevYear, prevMonth, prevMonthEnd - i)
            })
        }

        for (let i = currentMonthStart.getDate(); i <= calendarEnd; i++) {
            newDays.push({
                date: createDate(year, month, i)
            })
        }

        const totalLength = neighbourMonthDays.length + newDays.length
            for (let i = 1; totalLength + i  <= MAX_CALENDAR_DAYS; i++) {
                newDays.push({
                    date: createDate(nextYear, nextMonth, i)
                })
            }
            
        return [...neighbourMonthDays, ...newDays]
    }

    useEffect(() => {
       setDays(rebuildDays())
    }, [navigation])

    const ClassName = generateClassName(MAIN_CLASSNAME)
    const DaysClassName = generateClassName(MAIN_CLASSNAME + '__days')
    const DayClassName = (date: Date) => generateClassName(MAIN_CLASSNAME + '__day', { '--today': twoDatesCompareIgnoreTime(date, new Date()), }, {  '--neighbour-month': month !== getMonthHuman(date) },)
    const WeekdaysClassName = generateClassName(MAIN_CLASSNAME + '__weekdays')
    const WeekdayClassName = generateClassName(MAIN_CLASSNAME + '__weekday')
    const NavigationCLassName = generateClassName(MAIN_CLASSNAME + '__navigation')
    const LabelClassName = generateClassName(MAIN_CLASSNAME + '__label')
    const ButtonClassName = (direction: 'Left' | 'Right') => generateClassName(MAIN_CLASSNAME + '__btn', { '--left': direction === 'Left', '--rigth': direction === 'Right' })

  return (
    <div className={ClassName}>

        <div className={NavigationCLassName}>
            <Button onClick={() => handleNavigation('Decrement')} className={ButtonClassName('Left')} variant='transparent-icon'>
                <Icon name='ArrowLeft' color='var(--primary-30)' />
            </Button>  
            <h3 className={LabelClassName}>
                {MONTH_NAMES[month]} {year}
            </h3>
            <Button onClick={() => handleNavigation('Increment')} className={ButtonClassName('Right')} variant='transparent-icon'>
                <Icon name='ArrowRight' color='var(--primary-30)' />
            </Button>   
        </div>

        <div className={WeekdaysClassName}>
            {WEEKDAYS.map(weekday => (
                <div key={weekday.id} className={WeekdayClassName}>
                    <abbr>{weekday.short}</abbr>
                </div>
            ))
            }
        </div>
        <div className={DaysClassName}>
            {
                days.map(day => (
                    <button key={day.date.toLocaleString()} className={DayClassName(day.date)}>
                        <abbr>{day.date.getDate()}</abbr>
                    </button>
                ))
            }
        </div>
    </div>
    
    
  )
}

export default Calendar