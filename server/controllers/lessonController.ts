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
      const { name } = req.body;

      if (!name) {
        next(ApiError.badRequest('Поле "name" не может быть пустым'));
      }

      const lesson = await Lesson.create({ name });

      return res.status(201).json(lesson);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getOne(
    req: GetOneRequestType,
    res: GetOneResponseType,
    next: express.NextFunction
  ) {
    try {
      const { id } = req.params;

      const lesson = await Lesson.findOne({ where: { id } });

      return res.status(200).json(lesson);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getAll(req: GetAllRequestType, res: GetAllResponseType) {
    const lessons = await Lesson.findAll();

    return res.status(200).json(lessons);
  }
}

type CreateRequestType = express.Request<null, LessonModelType, LessonType>;
type CreateResponseType = express.Response<LessonModelType>;

type GetOneRequestType = express.Request<{ id: number }>;
type GetOneResponseType = express.Response<LessonModelType | null>;

type GetAllRequestType = express.Request<null, LessonModelType[]>;
type GetAllResponseType = express.Response<LessonModelType[]>;

export default new LessonController();
