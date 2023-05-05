
import {useContext} from 'react'
import { StoreContext } from '..'
import { generateClassName } from '../helpers/generateClassName'
import { Button } from './Buttons/Button'
import { observer } from 'mobx-react-lite'

const MAIN_CLASSNAME = 'nav-burger'

function NavBurger() {
    const { main } = useContext(StoreContext)
    const ClassName = generateClassName(MAIN_CLASSNAME, { '--active': main.isNavOpened })
    const CentralLineClassName = generateClassName(MAIN_CLASSNAME + '__central-line')

  return (
    <Button className={ClassName} variant={'transparent-icon'} onClick={() => main.setNavOpened(!main.isNavOpened)}>
        <span className={CentralLineClassName}></span>
    </Button>
  )
}

export default observer(NavBurger)