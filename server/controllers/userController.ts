import * as express from "express";
import { UserModelType } from "../models/User";

type LoginResponseType = express.Response<UserModelType>;

type LoginRequestType = express.Request<
  object,
  UserModelType,
  {
    password: string;
    email: string;
  }
>;

class UserController {
  async login(req: LoginRequestType, res: LoginResponseType) {
    const { password, email } = req.body;

    return;
  }

  async registration(req: express.Request, res: express.Response) {
    return res.json({ message: "work" });
  }

  async auth(req: express.Request, res: express.Response) {
    return res.json({ message: "work" });
  }
}

export default new UserController();
