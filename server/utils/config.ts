import dotenv from "dotenv";
const DEFAULT_PORT = 5000;

dotenv.config();

export default {
  JWT_SECRET_ACCESS: process.env.JWT_ACCESS_SECRET,
  JWT_SECRET_REFRESH: process.env.JWT_REFRESH_SECRET,
  HOST: process.env.APP_HOST,
  PORT: process.env.APP_PORT || DEFAULT_PORT,
  CLIENT_HOST: process.env.CLIENT_HOST || "localhost",
  CLIENT_PORT: process.env.CLIENT_PORT || 3000,
  CLIENT_PROTOCOL: process.env.CLIENT_PROTOCOL || "http",
};
