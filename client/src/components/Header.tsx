import { useContext, useEffect } from "react";
import { generateClassName } from "../helpers/generateClassName";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";

// type Props = {}
// {}: Props
function Header() {
  const ClassName = generateClassName("header");

  const { main } = useContext(StoreContext);

  useEffect(() => {
    main.updateWeekNumber();
  }, []);

  console.log(main.weekNumber);

  return <header className={ClassName}>{main.weekNumber?.value}</header>;
}

export default observer(Header);
