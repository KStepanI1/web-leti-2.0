"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Teacher = _index_1.db.define("teacher", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullName: { type: sequelize_1.DataTypes.STRING },
    lastName: { type: sequelize_1.DataTypes.STRING },
    firstName: { type: sequelize_1.DataTypes.STRING },
    patronymic: { type: sequelize_1.DataTypes.STRING },
});
exports.Teacher = Teacher;
