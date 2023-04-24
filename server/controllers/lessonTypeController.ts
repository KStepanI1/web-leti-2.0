import * as express from "express";
import { LessonType } from "../models/LessonType";

class LessonTypeController {
  async getAll(req: express.Request, res: express.Response) {
    try {
      const lessonTypes = await LessonType.findAll();
      return res.status(200).json(lessonTypes);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}

export default new LessonTypeController();
