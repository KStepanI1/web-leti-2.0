import { ILessonType } from "../types/ILessonType";
import {
  Api,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class LessonTypeApi extends Api {
  async getAll({ onComplete, onError }: LessonTypeApiGetAll): ApiResponse<ILessonType[]> {
    return this.read({ path: "/lessonType", onComplete, onError });
  }
}

type LessonTypeApiGetAll = ApiWithoutPath<ApiPropperties<ILessonType[]>>;


export default new LessonTypeApi();
