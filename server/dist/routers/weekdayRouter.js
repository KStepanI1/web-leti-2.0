"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var weekdayController_1 = __importDefault(require("../controllers/weekdayController"));
var router = (0, express_1.Router)();
router.get("/", weekdayController_1.default.getAll);
exports.default = router;
