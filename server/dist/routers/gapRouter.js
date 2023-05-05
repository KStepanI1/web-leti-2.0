"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var gapController_1 = __importDefault(require("../controllers/gapController"));
var router = (0, express_1.Router)();
router.get("/", gapController_1.default.getAll);
exports.default = router;
