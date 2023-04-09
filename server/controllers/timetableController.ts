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

  async getAll(req: GetAllRequestType, res: GetAllResponseType) {
    const { weekdayId } = req.query;

    console.log(weekdayId);

    let timetable: TimetableModelType[];

    if (weekdayId) {
      timetable = await Timetable.findAll({
        where: { weekdayId },
        ...INCLUDE,
      });
    } else {
      timetable = await Timetable.findAll({
        ...INCLUDE,
      });
    }

    return res.status(200).json(timetable);
  }

  async getOne(
    req: GetRequestType,
    res: GetResponseType,
    next: express.NextFunction
  ) {
    try {
      const { id } = req.params;

      if (!+id) {
        next(ApiError.badRequest("Указанное id не является числом"));
      }

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

  async getAllByWeeks(
    req: GetAllByWeeksRequestType,
    res: GetAllByWeeksResponseType,
    next: express.NextFunction
  ) {
    try {
      const timetables = await Timetable.findAll({ ...INCLUDE });
      const weekdays = await Weekday.findAll();

      const resArray = weekdays.map((weekday) => ({
        weekName: weekday.dataValues.name,
        timetables: timetables?.filter(
          (timetable) =>
            timetable?.dataValues?.weekdayId === weekday.dataValues.id
        ),
      }));

      return res.json(resArray);
    } catch (err) {
      next(ApiError.internal("Я пока не понимаю что не так"));
    }
  }
}

type GetRequestBody = {
  weekdayId?: number;
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

type GetAllByWeeksRequestType = express.Request<
  null,
  {
    weekName: string;
    timetables: TimetableModelType[];
  }[]
>;
type GetAllByWeeksResponseType = express.Response<
  {
    weekName: string;
    timetables: TimetableModelType[];
  }[]
>;

type GetAllRequestType = express.Request<
  GetRequestBody,
  TimetableModelType[],
  null,
  GetRequestBody
>;
type GetAllResponseType = express.Response<TimetableModelType[]>;

type GetRequestType = express.Request<{ id: number }>;
type GetResponseType = express.Response<TimetableModelType | null>;

export default new TimetableController();
