import TimetableStore from "./TimetableStore";
import AuthStore from "./AuthStore";

export default {
  auth: new AuthStore(),
  timetables: new TimetableStore(),
};
