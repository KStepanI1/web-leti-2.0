import * as express from "express";
import { ApiError } from "../error/ApiError";

export default function (
  err: Error,
  req: express.Request,
  res: express.Response
  // next: express.NextFunction
) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: "Непредвиденная ошибка" });
}
