import { useState } from "react"
import { generateClassName } from "../helpers/generateClassName";
import { NavigationItemType } from "../navigation";
import Icon from "./Icon";
import NavItem from "./NavItem";

export interface ExpandingNavItemProps {
  name: string;
  children?: NavigationItemType[]
}

const MAIN_CLASSNAME = "nav-item"

function ExpandingNavItem({ name, children }: ExpandingNavItemProps) {
  const ClassName = generateClassName(MAIN_CLASSNAME)
  const LinkClassName = (isActive: boolean) =>  generateClassName(MAIN_CLASSNAME + '__link', { '-active': isActive })
    const ExpandedBoxClassName = generateClassName(MAIN_CLASSNAME + '__expanded-box')

  const [isExpand, setExpand] = useState(false)

    console.log(isExpand)

  return (
    <li className={ClassName}>
      <div className={LinkClassName(false)} onClick={() => setExpand(state => !state)}>
        <span>
          {name}
        </span>
        <Icon name={isExpand ? "ArrowUp" : "ArrowDown"} color="var(--primary-30)" />
      </div>
      <div className={ExpandedBoxClassName}>
        {isExpand && children?.map(({ path, name, children }) => (
        <NavItem key={path} path={path} name={name}>
            {children}
        </NavItem>
      ))
      }
      </div>
      
    </li>
  );
}

export default ExpandingNavItem;
