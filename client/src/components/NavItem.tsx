import { NavLink } from "react-router-dom";
import { generateClassName } from "../helpers/generateClassName";
import { NavigationItemType } from "../navigation";
import ExpandingNavItem from "./ExpandingNavItem";

export interface NavItemProps {
  name: string;
  path: string
  children?: NavigationItemType[]
}

const MAIN_CLASSNAME = "nav-item"

function NavItem({ name, path, children }: NavItemProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME)
  const LinkClassName = (isActive: boolean) =>  generateClassName(MAIN_CLASSNAME + '__link', { '-active': isActive })


  if (!children) return (
    <li className={ClassName}>
      <NavLink
        className={({ isActive }) =>
          LinkClassName(!children && isActive)
        }
        to={path}
      >
        {name}
      </NavLink>
    </li>
  )

  return (
    <ExpandingNavItem name={name}>
      {children}
    </ExpandingNavItem>
  );
}

export default NavItem;
