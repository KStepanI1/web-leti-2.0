import * as express from "express";
import { Weekday } from "../models/Weekday";

class WeekdayController {
  async getAll(req: express.Request, res: express.Response) {
    try {
      const weekdays = await Weekday.findAll();
      return res.status(200).json(weekdays);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

export default new WeekdayController();
