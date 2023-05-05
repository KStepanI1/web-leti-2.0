"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var timetableController_1 = __importDefault(require("../controllers/timetableController"));
var router = (0, express_1.Router)();
router.post("/", timetableController_1.default.create);
router.get("/", timetableController_1.default.getAll);
router.get("/byWeeks", timetableController_1.default.getAllByWeeks);
router.get("/nearest", timetableController_1.default.getNearest);
router.get("/:id", timetableController_1.default.getOne);
exports.default = router;
