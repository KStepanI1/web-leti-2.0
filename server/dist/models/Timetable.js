"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timetable = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Timetable = _index_1.db.define("timetable", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    audienceNumber: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
    isRemotely: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    week: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 3 },
});
exports.Timetable = Timetable;
