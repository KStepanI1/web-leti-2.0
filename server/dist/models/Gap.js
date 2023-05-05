"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_GAPS = exports.Gap = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Gap = _index_1.db.define("gap", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startTime: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    endTime: { type: sequelize_1.DataTypes.STRING },
    lessonNumber: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: true },
});
exports.Gap = Gap;
var DEFAULT_GAPS = [
    {
        startTime: "8:00",
        endTime: "9:30",
        lessonNumber: 1,
    },
    {
        startTime: "9:50",
        endTime: "11:20",
        lessonNumber: 2,
    },
    {
        startTime: "11:40",
        endTime: "13:10",
        lessonNumber: 3,
    },
    {
        startTime: "13:40",
        endTime: "15:10",
        lessonNumber: 4,
    },
    {
        startTime: "15:30",
        endTime: "17:00",
        lessonNumber: 5,
    },
    {
        startTime: "17:20",
        endTime: "18:50",
        lessonNumber: 6,
    },
    {
        startTime: "19:05",
        endTime: "20:35",
        lessonNumber: 7,
    },
];
exports.DEFAULT_GAPS = DEFAULT_GAPS;
