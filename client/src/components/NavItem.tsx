import { NavLink, NavLinkProps } from "react-router-dom";

export interface NavItemProps extends NavLinkProps {
  name: string;
}
//
function NavItem({ name, ...props }: NavItemProps) {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) =>
          `nav-item__link${isActive ? " -active" : ""}`
        }
        {...props}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default NavItem;
