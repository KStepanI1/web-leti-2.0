"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lesson = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Lesson = _index_1.db.define("lesson", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: sequelize_1.DataTypes.STRING },
});
exports.Lesson = Lesson;
