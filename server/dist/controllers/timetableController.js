"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Timetable_1 = require("../models/Timetable");
var ApiError_1 = require("../error/ApiError");
var Weekday_1 = require("../models/Weekday");
var Gap_1 = require("../models/Gap");
var Lesson_1 = require("../models/Lesson");
var Teacher_1 = require("../models/Teacher");
var LessonType_1 = require("../models/LessonType");
var Settings_1 = require("../models/Settings");
var INCLUDE = {
    include: [
        { model: Weekday_1.Weekday, as: "weekday" },
        { model: Gap_1.Gap, as: "gap" },
        {
            model: Lesson_1.Lesson,
            as: "lesson",
            include: [
                { model: Teacher_1.Teacher, as: "teacher" },
                {
                    model: LessonType_1.LessonType,
                    as: "lessontype",
                },
            ],
        },
    ],
};
var ORDER = { order: [[Gap_1.Gap, "lessonNumber"]] };
var TimetableController = /** @class */ (function () {
    function TimetableController() {
    }
    TimetableController.prototype.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, audienceNumber, lessonId, weekdayId, gapId, week, _b, isRemotely, timetable, err_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _a = req.body, audienceNumber = _a.audienceNumber, lessonId = _a.lessonId, weekdayId = _a.weekdayId, gapId = _a.gapId, week = _a.week, _b = _a.isRemotely, isRemotely = _b === void 0 ? false : _b;
                        return [4 /*yield*/, Timetable_1.Timetable.create({
                                audienceNumber: audienceNumber,
                                isRemotely: isRemotely,
                                lessonId: lessonId,
                                weekdayId: weekdayId,
                                gapId: gapId,
                                week: week,
                            }, __assign({}, INCLUDE))];
                    case 1:
                        timetable = _c.sent();
                        return [2 /*return*/, res.status(201).json(timetable)];
                    case 2:
                        err_1 = _c.sent();
                        next(ApiError_1.ApiError.internal());
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TimetableController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var weekdayId, timetable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        weekdayId = req.query.weekdayId;
                        if (!weekdayId) return [3 /*break*/, 2];
                        return [4 /*yield*/, Timetable_1.Timetable.findAll(__assign(__assign({ where: { weekdayId: weekdayId } }, INCLUDE), ORDER))];
                    case 1:
                        timetable = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, Timetable_1.Timetable.findAll(__assign(__assign({}, INCLUDE), ORDER))];
                    case 3:
                        timetable = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, res.status(200).json(timetable)];
                }
            });
        });
    };
    TimetableController.prototype.getOne = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, timetable, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!+id) {
                            next(ApiError_1.ApiError.badRequest("Указанное id не является числом"));
                        }
                        return [4 /*yield*/, Timetable_1.Timetable.findOne(__assign({ where: { id: id } }, INCLUDE))];
                    case 1:
                        timetable = _a.sent();
                        if (!timetable) {
                            next(ApiError_1.ApiError.notFound("Расписание с указаным id не найдено"));
                        }
                        return [2 /*return*/, res.status(200).json(timetable)];
                    case 2:
                        err_2 = _a.sent();
                        next(ApiError_1.ApiError.internal());
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TimetableController.prototype.getAllByWeeks = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var week, timetables_1, weekdays, resArray, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        week = req.query.week;
                        return [4 /*yield*/, Timetable_1.Timetable.findAll(__assign(__assign({ where: week ? { week: [+week, 3] } : undefined }, INCLUDE), ORDER))];
                    case 1:
                        timetables_1 = _a.sent();
                        return [4 /*yield*/, Weekday_1.Weekday.findAll({ order: ['number'] })];
                    case 2:
                        weekdays = _a.sent();
                        resArray = weekdays.map(function (weekday) { return ({
                            weekday: weekday,
                            timetables: timetables_1 === null || timetables_1 === void 0 ? void 0 : timetables_1.filter(function (timetable) { var _a; return ((_a = timetable === null || timetable === void 0 ? void 0 : timetable.dataValues) === null || _a === void 0 ? void 0 : _a.weekdayId) === weekday.dataValues.id; }),
                        }); });
                        return [2 /*return*/, res.json(resArray)];
                    case 3:
                        err_3 = _a.sent();
                        next(ApiError_1.ApiError.internal());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TimetableController.prototype.getNearest = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var settings, weekNumber, currentDay, today, tomorow, todayTimetable, tomorowTimetable, todayWeekday, tomorowWeekDay, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, Settings_1.Settings.findOne({ where: { id: 1 } })];
                    case 1:
                        settings = _b.sent();
                        if (!settings) {
                            return [2 /*return*/, next(ApiError_1.ApiError.notFound("Не удалось получить четность недели"))];
                        }
                        weekNumber = settings.dataValues.week;
                        currentDay = new Date().getDay();
                        today = currentDay;
                        tomorow = (currentDay + 1) % 7;
                        return [4 /*yield*/, Timetable_1.Timetable.findAll(__assign({ where: { week: [weekNumber, 3], weekdayId: today === 0 ? 7 : today } }, INCLUDE))];
                    case 2:
                        todayTimetable = _b.sent();
                        return [4 /*yield*/, Timetable_1.Timetable.findAll(__assign({ where: { week: [weekNumber, 3], weekdayId: tomorow } }, INCLUDE))];
                    case 3:
                        tomorowTimetable = _b.sent();
                        return [4 /*yield*/, Weekday_1.Weekday.findOne({ where: { number: today } })];
                    case 4:
                        todayWeekday = _b.sent();
                        return [4 /*yield*/, Weekday_1.Weekday.findOne({
                                where: { number: tomorow },
                            })];
                    case 5:
                        tomorowWeekDay = _b.sent();
                        return [2 /*return*/, res.status(200).json({
                                today: { timetables: todayTimetable || [], weekday: todayWeekday },
                                tomorow: {
                                    timetables: tomorowTimetable || [],
                                    weekday: tomorowWeekDay,
                                },
                            })];
                    case 6:
                        _a = _b.sent();
                        next(ApiError_1.ApiError.internal());
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return TimetableController;
}());
exports.default = new TimetableController();
