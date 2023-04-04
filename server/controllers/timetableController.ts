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

class TimetableController {
  include: { include: IncludeOptions[] };

  constructor() {
    this.include = {
      include: [
        { model: Weekday, as: "weekday" },
        { model: Gap, as: "gap" },
        { model: Lesson, as: "lesson" },
      ],
    };
  }

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
      } as any);

      return res.json(timetable);
    } catch (err) {
      next(err);
    }
  }

  async getAll(req: GetAllRequestType, res: GetALlResponseType) {
    const { audienceNumber, isRemotely } = req.params;

    let timetable: TimetableModelType[];

    if (audienceNumber && isRemotely) {
      timetable = await Timetable.findAll({
        where: { audienceNumber, isRemotely },
        ...this.include,
      });
    } else if (audienceNumber) {
      timetable = await Timetable.findAll({
        where: { audienceNumber },
        ...this.include,
      });
    } else if (isRemotely) {
      timetable = await Timetable.findAll({
        where: { isRemotely },
        ...this.include,
      });
    }

    timetable = await Timetable.findAll({ ...this.include });
    return res.json(timetable);
  }

  async get(
    req: GetRequestType,
    res: GetResponseType,
    next: express.NextFunction
  ) {
    const { id } = req.params;

    const timetable = await Timetable.findOne({
      where: { id },
      ...this.include,
    });

    if (!timetable) {
      next(ApiError.notFound("Расписание с указаным id не найдено"));
    }

    return res.json(timetable);
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
