import { generateClassName } from "../helpers/generateClassName";
import { ROUTERS } from "../utils/constants";
import NavItem from "./NavItem";

// type Props = {}
// {}: Props

function Navigation() {
  const ClassName = generateClassName("navigation");

  return (
    <nav className={ClassName}>
      <NavItem path={ROUTERS.PATH_HOME} name="Главная" />
      <NavItem path={ROUTERS.PATH_TIMETABLE} name="Расписание" />
    </nav>
  );
}

export default Navigation;
