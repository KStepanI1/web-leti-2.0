import { IWeekNumber } from "../types/IWeekNumber";
import { Api, ApiPropperties, ApiResponse, ApiWithoutPath } from "./_index";

class WeekApi extends Api {
  async getNumber({
    onComplete,
    onError,
  }: WeekApiGetNumberType): ApiResponse<IWeekNumber> {
    return this.read({ path: "/weekNumber", onComplete, onError });
  }
}

type WeekApiGetNumberType = ApiWithoutPath<ApiPropperties<IWeekNumber>>;

export default new WeekApi();
