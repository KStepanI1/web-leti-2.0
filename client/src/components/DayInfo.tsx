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
      {main.weekday?.short}, {main.settings?.week} неделя
    </div>
  );
}

export default observer(DayInfo);
