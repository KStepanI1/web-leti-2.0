import schedule from "node-schedule";
import { Settings } from "../models/Settings";

class WeekNumberService {
  async scheduleParsing() {

    const scheduleCallback = async () => {
      try {
        const settings = await Settings.findOne({ where: { id: 1 } });

        if (settings) {
          settings.update({
            week: (settings.dataValues.week % 2) + 1,
          });
        } else {
          await Settings.create({
            week: 1,
          });
        }
      } catch (err) {
        console.log("WEEK NUMBER UPDATE ERROR: ", err);
      }
    };

    schedule.scheduleJob(
      { dayOfWeek: 1, hour: 0, minute: 0 },
      scheduleCallback
    );
  }
}

export { WeekNumberService };
