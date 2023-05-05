import { useContext } from "react"
import { generateClassName } from "../helpers/generateClassName";
import { NAVIGATION } from "../navigation";
import NavItem from "./NavItem";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";

// type Props = {}
// {}: Props

function Navigation() {
  const { main } = useContext(StoreContext)
  const ClassName = generateClassName("navigation", { '--opened': main.isNavOpened });

  return (
    <nav className={ClassName}>
      {NAVIGATION.map(({ path, name, children }) => (
        <NavItem key={path} path={path} name={name} >{children}</NavItem>
      ))}
    </nav>
  );
}

export default observer(Navigation);
