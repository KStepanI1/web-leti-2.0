import { ITeacher } from "../types/ITeacher";
import {
  Api,
  ApiCreatePropperties,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class TeacherApi extends Api {
  async getAll({
    onComplete,
    onError,
  }: TeachersGetAllType): ApiResponse<ITeacher[]> {
    return this.read({ path: "/teacher", onComplete, onError });
  }

  async createTeacher({
    body,
    onComplete,
    onError,
  }: TeacherCreateType): ApiResponse<ITeacher> {
    return this.create({ path: "/teacher", body, onComplete, onError });
  }
}

type TeachersGetAllType = ApiWithoutPath<ApiPropperties<ITeacher[]>>;
type TeacherCreateType = ApiWithoutPath<
  ApiCreatePropperties<ITeacher, ITeacher>
>;

export default new TeacherApi();
