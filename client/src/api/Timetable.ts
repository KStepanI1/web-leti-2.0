import {
  ITimetable,
  ITimetableByWeeks,
  ITimetableExpanded,
} from "../types/ITimetable";
import {
  Api,
  ApiResponse,
  ApiWithoutPath,
  ApiCreatePropperties,
  ApiPropperties,
} from "./_index";

class TimetableApi extends Api {
  constructor() {
    super();
  }

  async createTimetable({
    body,
    onComplete,
    onError,
  }: TimetableApiCreateType): ApiResponse<ITimetableExpanded> {
    return this.create({ path: "/timetable", body, onComplete, onError });
  }

  async getAll({
    onComplete,
    onError,
    filter,
  }: TimetableApiGetAllType): ApiResponse<ITimetableExpanded[]> {
    const filterParams = this.parseApiFilter(filter);

    return this.read({
      path: `/timetable${filterParams || ""}`,
      onComplete,
      onError,
    });
  }

  async getAllByWeeks({
    onComplete,
    onError,
  }: TimetableApiByWeeksType): ApiResponse<ITimetableByWeeks> {
    return this.read({
      path: `/timetable/byWeeks`,
      onComplete,
      onError,
    });
  }

  async getOne({
    id,
    onComplete,
    onError,
  }: TimetableApiGetOneType): ApiResponse<ITimetableExpanded> {
    return this.read({ path: `/timetable/${id}`, onComplete, onError });
  }
}

type TimetableApiCreateType = ApiWithoutPath<
  ApiCreatePropperties<ITimetable, ITimetableExpanded>
>;

type TimetableApiByWeeksType = ApiWithoutPath<
  ApiPropperties<ITimetableByWeeks>
>;

type TimetableApiGetAllType = ApiWithoutPath<
  ApiPropperties<ITimetableExpanded[]>
> & { filter?: { weekdayId: number } };
type TimetableApiGetOneType = ApiWithoutPath<
  ApiPropperties<ITimetableExpanded>
> & { id: number };

export default new TimetableApi();
