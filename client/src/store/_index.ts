import TimetableStore from "./TimetableStore";
import AuthStore from "./AuthStore";
import { MainStore } from "./MainStore";

export default {
  auth: new AuthStore(),
  timetables: new TimetableStore(),
  main: new MainStore(),
};
