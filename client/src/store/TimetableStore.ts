import { makeAutoObservable } from "mobx";
import { ITimetableByWeeks } from "../types/ITimetable";

export default class TimetableStore {
  timetables: ITimetableByWeeks | null;

  constructor() {
    this.timetables = null;
    makeAutoObservable(this);
  }

  setTimetables(newTimetables: ITimetableByWeeks | null) {
    this.timetables = newTimetables;
  }

  get all() {
    return this.timetables;
  }
}
