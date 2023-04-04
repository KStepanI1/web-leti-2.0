import { ApiError } from "../error/ApiError";
import { User } from "../models/User";
import bcrypt from "bcrypt";

class UserService {
  async registration(email: string, password: string) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw new ApiError(400, "Пользователь с такой почтой уже существует");
    }

    if (!email || !password) {
      throw new ApiError(400, "Неверная почта или пароль");
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const user = await User.create({ email, password: hashPassword });
  }
}
