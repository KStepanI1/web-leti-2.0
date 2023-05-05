"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var teacherController_1 = __importDefault(require("../controllers/teacherController"));
var router = (0, express_1.Router)();
router.post("/", teacherController_1.default.create);
router.get("/", teacherController_1.default.getAll);
router.get("/:id", teacherController_1.default.getOne);
exports.default = router;
