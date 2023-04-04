const DEFAULT_PORT = 5000;

export default {
  JWT_SECRET_ACCESS: process.env.JWT_ACCESS_SECRET,
  JWT_SECRET_REFRESH: process.env.JWT_REFRESH_SECRET,
  HOST: process.env.APP_HOST,
  PORT: process.env.APP_PORT || DEFAULT_PORT,
};
