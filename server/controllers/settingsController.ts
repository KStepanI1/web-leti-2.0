import * as express from "express";
import { Settings } from "../models/Settings";
import { ApiError } from "../error/ApiError";

class SettingsController {
  async get(req: express.Request, res: express.Response) {
    try {
      const settings = await Settings.findOne({ where: { id: 1 } });
      return res.status(200).json(settings);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  async put(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const { week } = req.body;

      const settings = await Settings.findOne({ where: { id: 1 } });

      if (!settings) {
        next(ApiError.internal());
      }

      await settings?.update({ week });

      return res.status(201).json(settings);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

export default new SettingsController();
