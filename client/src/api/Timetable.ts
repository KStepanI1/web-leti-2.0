import {
  ITimetable,
  ITimetableByWeeks,
  ITimetableExpanded,
  ITimetableNearest,
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
      path: `/timetable${filterParams}`,
      onComplete,
      onError,
    });
  }

  async getAllByWeeks({
    onComplete,
    onError,
    filter,
  }: TimetableApiByWeeksType): ApiResponse<ITimetableByWeeks> {
    const filterParams = this.parseApiFilter(filter);

    return this.read({
      path: `/timetable/byWeeks${filterParams}`,
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

  async getNearest({ onComplete, onError }: TimetableApiGetNearestType) {
    return this.read({ path: "/timetable/nearest", onComplete, onError });
  }
}

type TimetableApiCreateType = ApiWithoutPath<
  ApiCreatePropperties<Omit<ITimetable, 'id'>, ITimetableExpanded>
>;

type TimetableApiByWeeksType = ApiWithoutPath<
  ApiPropperties<ITimetableByWeeks>
> & { filter?: { week: number } };

type TimetableApiGetAllType = ApiWithoutPath<
  ApiPropperties<ITimetableExpanded[]>
> & { filter?: { weekdayId: number } };

type TimetableApiGetNearestType = ApiWithoutPath<
  ApiPropperties<ITimetableNearest>
>;

type TimetableApiGetOneType = ApiWithoutPath<
  ApiPropperties<ITimetableExpanded>
> & { id: number };

export default new TimetableApi();
