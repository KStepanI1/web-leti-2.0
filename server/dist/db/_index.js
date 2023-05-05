"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var sequelize_1 = require("sequelize");
var db_config_1 = __importDefault(require("../utils/db-config"));
var _a = db_config_1.default.DB_NAME, DB_NAME = _a === void 0 ? "" : _a, DB_PASSWORD = db_config_1.default.DB_PASSWORD, DB_USER = db_config_1.default.DB_USER, HOST = db_config_1.default.HOST, PORT = db_config_1.default.PORT;
var dialect = "postgres";
console.log("DB_CONFIG", db_config_1.default);
exports.db = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    dialect: dialect,
    host: HOST,
    port: PORT,
});
