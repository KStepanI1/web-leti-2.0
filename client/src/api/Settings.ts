import { ISettings } from "../types/ISettings";
import {
  Api,
  ApiCreatePropperties,
  ApiPropperties,
  ApiResponse,
  ApiWithoutPath,
} from "./_index";

class SettingsApi extends Api {
  async get({ onComplete, onError }: SettingsApiGet): ApiResponse<ISettings> {
    return this.read({ path: "/settings", onComplete, onError });
  }

  async updateSettings({ onComplete, onError, body }: SettingsApiUpdate) {
    return this.updatePut({ path: "/settings", body, onComplete, onError });
  }
}

type SettingsApiGet = ApiWithoutPath<ApiPropperties<ISettings>>;

type SettingsApiUpdate = ApiWithoutPath<
  ApiCreatePropperties<ISettings, ISettings>
>;

export default new SettingsApi();
