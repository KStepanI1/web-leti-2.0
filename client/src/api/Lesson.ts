import { ILessonExpanded } from "../types/ILesson";
import {
  Api,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class LessonApi extends Api {
  async getAll({ onComplete, onError }: LessonApiGetAll): ApiResponse<ILessonExpanded[]> {
    return this.read({ path: "/lesson", onComplete, onError });
  }
}

type LessonApiGetAll = ApiWithoutPath<ApiPropperties<ILessonExpanded[]>>;


export default new LessonApi();
