import { IWeekday } from "../types/IWeekday";
import {
  Api,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class WeekdayApi extends Api {
  async getAll({ onComplete, onError }: WeekdayApiGetAll): ApiResponse<IWeekday[]> {
    return this.read({ path: "/weekday", onComplete, onError });
  }
}

type WeekdayApiGetAll = ApiWithoutPath<ApiPropperties<IWeekday[]>>;


export default new WeekdayApi();
