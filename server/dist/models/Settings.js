"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SETTINGS = exports.Settings = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Settings = _index_1.db.define("settings", {
    id: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    week: { type: sequelize_1.DataTypes.INTEGER },
});
exports.Settings = Settings;
var DEFAULT_SETTINGS = {
    week: 1
};
exports.DEFAULT_SETTINGS = DEFAULT_SETTINGS;
