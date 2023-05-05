"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var settingsController_1 = __importDefault(require("../controllers/settingsController"));
var router = (0, express_1.Router)();
router.get("/", settingsController_1.default.get);
router.put("/", settingsController_1.default.put);
exports.default = router;
