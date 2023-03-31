import { ROUTERS } from '../../utils/constants'
import NavItem from '../molecules/NavItem'

// type Props = {}
// {}: Props

function Navigation() {
    

  return (
    <nav>
        <NavItem path={ROUTERS.PATH_HOME} name='Главная' />
        <NavItem path={ROUTERS.PATH_TIMETABLE} name='Расписание' />
    </nav>
  )
}

export default Navigation