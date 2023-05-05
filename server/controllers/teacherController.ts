import * as express from "express";
import { ApiError } from "../error/ApiError";
import { Teacher, TeacherModelType, TeacherType } from "../models/Teacher";

class TeacherController {
  async create(
    req: CreateRequestType,
    res: CreateResponseType,
    next: express.NextFunction
  ) {
    try {
      const { fullName, lastName, firstName, patronymic } = req.body;

      if (!lastName) {
        next(ApiError.badRequest('Поле "Фамилия" не может быть пустым'));
      }

      if (!firstName) {
        next(ApiError.badRequest('Поле "Имя" не может быть пустым'));
      }

      let full = fullName;

      if (!fullName) {
        full = `${lastName} ${firstName}${patronymic ? " " + patronymic : ""}`;
      }

      const teacher = await Teacher.create({
        fullName: full,
        firstName,
        lastName,
        patronymic,
      });

      return res.status(201).json(teacher);
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

      const teachers = await Teacher.findOne({ where: { id } });

      return res.status(200).json(teachers);
    } catch (err) {
      next(ApiError.internal());
    }
  }

  async getAll(req: GetAllRequestType, res: GetAllResponseType) {
    const teachers = await Teacher.findAll();

    return res.status(200).json(teachers);
  }
}

type CreateRequestType = express.Request<null, TeacherModelType, TeacherType>;
type CreateResponseType = express.Response<TeacherModelType>;

type GetOneRequestType = express.Request<{ id: number }>;
type GetOneResponseType = express.Response<TeacherModelType | null>;

type GetAllRequestType = express.Request<null, TeacherModelType[]>;
type GetAllResponseType = express.Response<TeacherModelType[]>;

export default new TeacherController();
