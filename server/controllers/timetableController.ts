import * as express from "express";
import {
  Timetable,
  TimetableModelType,
  TimetableType,
} from "../models/Timetable";
import { ApiError } from "../error/ApiError";
import { Weekday } from "../models/Weekday";
import { Gap } from "../models/Gap";
import { Lesson } from "../models/Lesson";
import { IncludeOptions } from "sequelize";

const INCLUDE: { include: IncludeOptions[] } = {
  include: [
    { model: Weekday, as: "weekday" },
    { model: Gap, as: "gap" },
    { model: Lesson, as: "lesson" },
  ],
};

class TimetableController {
  async create(
    req: CreateRequestType,
    res: CreateResponseType,
    next: express.NextFunction
  ) {
    try {
      const {
        audienceNumber,
        lessonId,
        weekdayId,
        gapId,
        isRemotely = false,
      } = req.body;

      const timetable = await Timetable.create({
        audienceNumber,
        isRemotely,
        lessonId,
        weekdayId,
        gapId,
      });

      return res.status(201).json(timetable);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getAll(req: GetAllRequestType, res: GetALlResponseType) {
    const { audienceNumber, isRemotely } = req.params;

    let timetable: TimetableModelType[];

    if (audienceNumber && isRemotely) {
      timetable = await Timetable.findAll({
        where: { audienceNumber, isRemotely },
        ...INCLUDE,
      });
    } else if (audienceNumber) {
      timetable = await Timetable.findAll({
        where: { audienceNumber },
        ...INCLUDE,
      });
    } else if (isRemotely) {
      timetable = await Timetable.findAll({
        where: { isRemotely },
        ...INCLUDE,
      });
    }

    timetable = await Timetable.findAll({
      ...INCLUDE,
    });
    return res.status(200).json(timetable);
  }

  async getOne(
    req: GetRequestType,
    res: GetResponseType,
    next: express.NextFunction
  ) {
    try {
      const { id } = req.params;

      const timetable = await Timetable.findOne({
        where: { id },
        ...INCLUDE,
      });

      if (!timetable) {
        next(ApiError.notFound("Расписание с указаным id не найдено"));
      }

      return res.status(200).json(timetable);
    } catch (err) {
      next(ApiError.internal());
    }
  }
}

type GetRequestBody = {
  audienceNumber?: number;
  isRemotely?: boolean;
};

type CreateRequestBody = Omit<TimetableType, "id"> & {
  weekdayId: number;
  gapId: number;
  lessonId: number;
};

type CreateRequestType = express.Request<
  null,
  TimetableModelType,
  CreateRequestBody
>;
type CreateResponseType = express.Response<TimetableModelType>;

type GetAllRequestType = express.Request<GetRequestBody>;
type GetALlResponseType = express.Response<TimetableModelType[]>;

type GetRequestType = express.Request<{ id: number }>;
type GetResponseType = express.Response<TimetableModelType | null>;

export default new TimetableController();
