import { makeAutoObservable } from "mobx";
import settingsApi from "../api/Settings";
import { ISettings } from "../types/ISettings";
import { IWeekday } from "../types/IWeekday";
import { WEEKDAYS } from "../utils/constants";

class MainStore {
  _settings: ISettings | null = null;
  _weekday: IWeekday | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSettings(newWeekNumber: ISettings) {
    this._settings = newWeekNumber;
  }

  setWeekday(newWeekday: IWeekday | null) {
    this._weekday = newWeekday;
  }

  async updateSettings() {
    return await settingsApi.get({
      onComplete: (res) => this.setSettings(res),
    });
  }

  async updateWeekday() {
    const currentDay = new Date().getDay();

    this.setWeekday(WEEKDAYS.find((wd) => wd.number === currentDay) || null);
  }

  async cancelUpdates() {
    return await settingsApi.cancelRequests();
  }

  get settings() {
    return this._settings;
  }

  get weekday() {
    return this._weekday;
  }
}

export { MainStore };
