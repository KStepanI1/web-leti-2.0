"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var POSTGRES = "postgres";
var DEFAULT_HOST = "localhost";
var DEFAULT_PORT = 5432;
dotenv_1.default.config();
exports.default = {
    DB_NAME: process.env.POSTGRES_DB || POSTGRES,
    DB_USER: process.env.POSTGRES_USER || POSTGRES,
    DB_PASSWORD: process.env.POSTGRES_PASSWORD || POSTGRES,
    HOST: process.env.DB_HOST || DEFAULT_HOST,
    PORT: Number(process.env.DB_PORT) || DEFAULT_PORT,
};
