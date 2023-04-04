import { DataTypes } from "sequelize";
import { db } from "../db/_index";

const Token = db.define("token", {
  refreshToken: { type: DataTypes.STRING },
});

export { Token };
