import { IGap } from "../../types/IGap";
import { generateClassName } from "../../helpers/generateClassName";

type Props = {
  gap?: IGap;
  week?: number;
};

const MAIN_CLASSNAME = "t-item-time";

function TimetableItemTime({ gap, week }: Props) {
  const ClassName = generateClassName(MAIN_CLASSNAME);
  const StartTimeClassName = generateClassName(MAIN_CLASSNAME + "__start-time");
  const WeekNameClassName = generateClassName(MAIN_CLASSNAME + "__week-name");

  const startTime = gap?.startTime;
  const weekName = week !== 3 && `${week} неделя`;

  return (
    <div className={ClassName}>
      <h2 className={StartTimeClassName}>{startTime}</h2>
      {weekName && <h6 className={WeekNameClassName}>{weekName}</h6>}
    </div>
  );
}

export default TimetableItemTime;
