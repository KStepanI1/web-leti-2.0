import { useState } from "react";
import { generateClassName } from "../helpers/generateClassName";
import { observer } from "mobx-react-lite";
import { Button } from "./Buttons/Button";
import Icon from "./Icon";
import SettingsModal from "./Modals/SettingsModal";
import DayInfo from "./DayInfo";
import Logo from "./Logo";

// type Props = {}
// {}: Props
function Header() {
  const ClassName = generateClassName("header");

  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className={ClassName}>
        <Logo size="small" strokeWidth={2} />
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
