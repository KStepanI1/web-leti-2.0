import { useState, useContext } from "react";
import { generateClassName } from "../helpers/generateClassName";
import { observer } from "mobx-react-lite";
import { Button } from "./Buttons/Button";
import Icon from "./Icon";
import SettingsModal from "./Modals/SettingsModal";
import DayInfo from "./DayInfo";
import Logo from "./Logo";
import NavBurger from "./NavBurger";
import { StoreContext } from "..";

// type Props = {}
// {}: Props
const MAIN_CLASSNAME = "header"

function Header() {
  const { main } = useContext(StoreContext)

  const ClassName = generateClassName(MAIN_CLASSNAME, { '--hidden': !main.isHeaderVisible });
  const LeftBoxClassName = generateClassName(MAIN_CLASSNAME + '__left-box')

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className={ClassName}>
        <div className={LeftBoxClassName}>
          <NavBurger />
          <Logo size="x-small" strokeWidth={2} />
        </div>
        <DayInfo />
        <Button
          variant="transparent-icon"
          onClick={() => setShowSettings(true)}
        >
          <Icon name="Setting" />
        </Button>
      </header>
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
}

export default observer(Header);
