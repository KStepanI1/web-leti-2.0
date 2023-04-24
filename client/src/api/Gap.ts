import { IGap } from "../types/IGap";
import {
  Api,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class GapApi extends Api {
  async getAll({ onComplete, onError }: GapApiGetAll): ApiResponse<IGap[]> {
    return this.read({ path: "/gap", onComplete, onError });
  }
}

type GapApiGetAll = ApiWithoutPath<ApiPropperties<IGap[]>>;


export default new GapApi();
