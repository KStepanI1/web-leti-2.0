"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LESSONTYPES = exports.LessonType = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var LessonType = _index_1.db.define("lessontype", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING },
    shortName: { type: sequelize_1.DataTypes.STRING },
});
exports.LessonType = LessonType;
var DEFAULT_LESSONTYPES = [
    {
        id: 1,
        name: "Лекция",
        shortName: "Лек.",
    },
    {
        id: 2,
        name: "Практика",
        shortName: "Пр.",
    },
];
exports.DEFAULT_LESSONTYPES = DEFAULT_LESSONTYPES;
