"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_WEEKDAYS = exports.Weekday = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Weekday = _index_1.db.define("weekday", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
    short: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    engShort: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    number: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
});
exports.Weekday = Weekday;
var DEFAULT_WEEKDAYS = [
    {
        name: "Понедельник",
        short: "Пн.",
        engShort: "Mon",
        number: 1,
    },
    {
        name: "Вторник",
        short: "Вт.",
        engShort: "Tue",
        number: 2,
    },
    {
        name: "Среда",
        short: "Ср.",
        engShort: "Wed",
        number: 3,
    },
    {
        name: "Четверг",
        short: "Чт.",
        engShort: "Thu",
        number: 4,
    },
    {
        name: "Пятница",
        short: "Пт.",
        engShort: "Fri",
        number: 5,
    },
    {
        name: "Суббота",
        short: "Сб.",
        engShort: "Sat",
        number: 6,
    },
    {
        name: "Воскресенье",
        short: "Вск.",
        engShort: "Sun",
        number: 7,
    },
];
exports.DEFAULT_WEEKDAYS = DEFAULT_WEEKDAYS;
