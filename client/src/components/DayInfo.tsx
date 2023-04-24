import React, { useContext, useEffect } from "react";
import { StoreContext } from "..";
import { observer } from "mobx-react-lite";

function DayInfo() {
  const { main } = useContext(StoreContext);

  useEffect(() => {
    main.updateWeekday();
  }, []);

  return (
    <div>
      {main.settings?.week} неделя, {main.weekday?.short}
    </div>
  );
}

export default observer(DayInfo);
