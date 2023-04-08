import jwt from "jsonwebtoken";
import config from "../utils/config";

class TokenService {
  generateTokens<T extends object>(payload: T) {
    const { JWT_SECRET_ACCESS, JWT_SECRET_REFRESH } = config;

    if (!JWT_SECRET_ACCESS) {
      return;
      // throw ProgramError.objectUndefined("JWT_SECRET_ACCESS");
    }

    if (!JWT_SECRET_REFRESH) {
      return;
      // throw ProgramError.objectUndefined("JWT_SECRET_REFRESH");
    }

    const accessToken = jwt.sign(payload, JWT_SECRET_ACCESS, {
      expiresIn: "30m",
    });
    const refreshToken = jwt.sign(payload, JWT_SECRET_REFRESH, {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export { TokenService };
