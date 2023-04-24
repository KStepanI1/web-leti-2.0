import * as express from "express";
import {
  Timetable,
  TimetableModelType,
  TimetableType,
} from "../models/Timetable";
import { ApiError } from "../error/ApiError";
import { Weekday, WeekdayModelType } from "../models/Weekday";
import { Gap } from "../models/Gap";
import { Lesson } from "../models/Lesson";
import { IncludeOptions, Order } from "sequelize";
import { Teacher } from "../models/Teacher";
import { LessonType } from "../models/LessonType";
import { Settings } from "../models/Settings";

const INCLUDE: { include: IncludeOptions[] } = {
  include: [
    { model: Weekday, as: "weekday" },
    { model: Gap, as: "gap" },
    {
      model: Lesson,
      as: "lesson",
      include: [
        { model: Teacher, as: "teacher" },
        {
          model: LessonType,
          as: "lessontype",
        },
      ],
    },
  ],
};

const ORDER: { order: Order } = { order: [[Gap, "startTime"]] };

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
        week,
        isRemotely = false,
      } = req.body;

      const timetable = await Timetable.create(
        {
          audienceNumber,
          isRemotely,
          lessonId,
          weekdayId,
          gapId,
          week,
        },
        {
          ...INCLUDE,
        }
      );

      return res.status(201).json(timetable);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getAll(req: GetAllRequestType, res: GetAllResponseType) {
    const { weekdayId } = req.query;

    let timetable: TimetableModelType[];

    if (weekdayId) {
      timetable = await Timetable.findAll({
        where: { weekdayId },
        ...INCLUDE,
        ...ORDER,
      });
    } else {
      timetable = await Timetable.findAll({
        ...INCLUDE,
        ...ORDER,
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
      const { week } = req.query;
      const timetables = await Timetable.findAll({
        where: week ? { week: [+week, 3] } : undefined,
        ...INCLUDE,
        ...ORDER,
      });

      const weekdays = await Weekday.findAll();

      const resArray = weekdays.map((weekday) => ({
        weekday: weekday,
        timetables: timetables?.filter(
          (timetable) =>
            timetable?.dataValues?.weekdayId === weekday.dataValues.id
        ),
      }));

      return res.json(resArray);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getNearest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    try {
      const settings = await Settings.findOne({ where: { id: 1 } });

      if (!settings) {
        return next(ApiError.notFound("Не удалось получить четность недели"));
      }

      const weekNumber = settings.dataValues.week;

      const currentDay = new Date().getDay();
      const today = currentDay;
      const tomorow = (currentDay + 1) % 7;

      const todayTimetable = await Timetable.findAll({
        where: { week: [weekNumber, 3], weekdayId: today === 0 ? 7 : today },
        ...INCLUDE,
      });
      const tomorowTimetable = await Timetable.findAll({
        where: { week: [weekNumber, 3], weekdayId: tomorow },
        ...INCLUDE,
      });

      const todayWeekday = await Weekday.findOne({ where: { number: today } });
      const tomorowWeekDay = await Weekday.findOne({
        where: { number: tomorow },
      });

      return res.status(200).json({
        today: { timetables: todayTimetable || [], weekday: todayWeekday },
        tomorow: {
          timetables: tomorowTimetable || [],
          weekday: tomorowWeekDay,
        },
      });
    } catch {
      next(ApiError.internal());
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
    weekday: WeekdayModelType;
    timetables: TimetableModelType[];
  }[],
  null,
  { week: number }
>;
type GetAllByWeeksResponseType = express.Response<
  {
    weekday: WeekdayModelType;
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
