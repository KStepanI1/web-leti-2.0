"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
var sequelize_1 = require("sequelize");
var _index_1 = require("../db/_index");
var Token = _index_1.db.define("token", {
    refreshToken: { type: sequelize_1.DataTypes.STRING },
});
exports.Token = Token;
