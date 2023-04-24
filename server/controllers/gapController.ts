import * as express from "express";
import { Gap } from "../models/Gap";

class GapController {
  async getAll(req: express.Request, res: express.Response) {
    try {
      const gaps = await Gap.findAll();
      return res.status(200).json(gaps);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

export default new GapController();
