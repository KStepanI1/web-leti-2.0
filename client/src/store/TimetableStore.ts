import { makeAutoObservable } from "mobx";
import { ITimetableByWeeks, ITimetableNearest } from "../types/ITimetable";
import timetableApi from "../api/Timetable";

export default class TimetableStore {
  _timetables: ITimetableByWeeks | null;
  _timetablesNearest: ITimetableNearest | null;
  _timetablesWeek: ITimetableByWeeks | null;
  _currentWeek: number | null;

  constructor() {
    this._timetables = null;
    this._timetablesNearest = null;
    this._timetablesWeek = null;
    this._currentWeek = null;
    makeAutoObservable(this);
  }

  setTimetables(newTimetables: ITimetableByWeeks | null) {
    this._timetables = newTimetables;
  }

  setWeekTimetables(newTimetables: ITimetableByWeeks | null) {
    this._timetablesWeek = newTimetables;
  }

  setNearestTimetable(newTimetable: ITimetableNearest | null) {
    this._timetablesNearest = newTimetable;
  }

  setCurrentWeek(week: number | null) {
    this._currentWeek = week;
  }

  async updateAll() {
    return await timetableApi.getAllByWeeks({
      onComplete: (res) => this.setTimetables(res),
    });
  }

  async updateWeek(week: number) {
    return await timetableApi.getAllByWeeks({
      onComplete: (res) => {
        this.setWeekTimetables(res);
        this.setCurrentWeek(week);
      },
      filter: { week },
    });
  }

  async updateNearest() {
    return await timetableApi.getNearest({
      onComplete: (res) => this.setNearestTimetable(res),
    });
  }

  async cancelUpdates() {
    return await timetableApi.cancelRequests();
  }

  get all() {
    return this._timetables;
  }

  get nearest() {
    return this._timetablesNearest;
  }

  get week() {
    return this._timetablesWeek;
  }

  get currentWeek() {
    return this._currentWeek;
  }
}
