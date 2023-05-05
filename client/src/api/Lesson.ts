import { ILesson, ILessonExpanded } from "../types/ILesson";
import {
  Api,
  ApiCreatePropperties,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class LessonApi extends Api {
  async getAll({ onComplete, onError }: LessonApiGetAll): ApiResponse<ILessonExpanded[]> {
    return this.read({ path: "/lesson", onComplete, onError });
  }

  async createLesson({ body, onComplete, onError }: LessonApiCreateAll) {
    return this.create({ path: "/lesson", body, onComplete, onError })
  }
}

type LessonApiGetAll = ApiWithoutPath<ApiPropperties<ILessonExpanded[]>>;
type LessonApiCreateAll = ApiWithoutPath<ApiCreatePropperties<ILesson, ILessonExpanded[]>>;

export default new LessonApi();
