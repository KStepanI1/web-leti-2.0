import { generateClassName } from "../../helpers/generateClassName";
import { ITimetableExpanded } from "../../types/ITimetable";

type Props = {
  data: ITimetableExpanded;
};

function TimtetableItem({ data }: Props) {
  const ClassName = generateClassName("timetable-item");

  return (
    <tr className={ClassName}>
      <td>{data.gap?.startTime}</td>
      <td>{data.lesson?.name}</td>
      <td>{data?.audienceNumber || data.isRemotely}</td>
    </tr>
  );
}

export default TimtetableItem;
