import { makeAutoObservable } from "mobx";
import { ITimetableByWeeks } from "../types/ITimetable";

export default class TimetableStore {
  _timetables: ITimetableByWeeks | null;

  constructor() {
    this._timetables = null;
    makeAutoObservable(this);
  }

  setTimetables(newTimetables: ITimetableByWeeks | null) {
    this._timetables = newTimetables;
  }

  get all() {
    return this._timetables;
  }
}
