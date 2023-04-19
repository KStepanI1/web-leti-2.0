import { makeAutoObservable } from "mobx";
import { IWeekNumber } from "../types/IWeekNumber";
import weekApi from "../api/Week";

class MainStore {
  _weekNumber = {} as IWeekNumber;

  constructor() {
    makeAutoObservable(this);
  }

  async updateWeekNumber() {
    await weekApi.getNumber({ onComplete: (res) => (this._weekNumber = res) });
  }

  get weekNumber() {
    return this._weekNumber;
  }
}

export { MainStore };
