import { generateClassName } from "../helpers/generateClassName";
import { ROUTERS, ROUTERS_NAMES } from "../utils/constants";
import NavItem from "./NavItem";

// type Props = {}
// {}: Props

function Navigation() {
  const ClassName = generateClassName("navigation");

  return (
    <nav className={ClassName}>
      <NavItem to={ROUTERS.PATH_HOME} name={ROUTERS_NAMES[ROUTERS.PATH_HOME]} />
      <NavItem
        to={ROUTERS.PATH_TIMETABLE}
        name={ROUTERS_NAMES[ROUTERS.PATH_TIMETABLE]}
      />
    </nav>
  );
}

export default Navigation;
