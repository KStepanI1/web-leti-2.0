import * as express from "express";
import { Lesson, LessonModelType, LessonType } from "../models/Lesson";
import { ApiError } from "../error/ApiError";

class LessonController {
  async create(
    req: CreateRequestType,
    res: CreateResponseType,
    next: express.NextFunction
  ) {
    try {
      const body = req.body;

      const lesson = await Lesson.create(body);

      return res.json(lesson);
    } catch (err) {
      //   next(ApiError.badRequest("Не удалось создать предмет"));
      console.log(err);
    }
  }
}

type CreateRequestType = express.Request<null, LessonModelType, LessonType>;
type CreateResponseType = express.Response<LessonModelType>;

export default new LessonController();
