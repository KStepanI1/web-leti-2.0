import * as express from "express";
import { WeekNumber } from "../models/WeekNumber";

class WeekNumberController {
  async get(req: express.Request, res: express.Response) {
    try {
      const wn = await WeekNumber.findOne({ where: { id: 1 } });
      return res.status(200).json(wn);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

export default new WeekNumberController();
