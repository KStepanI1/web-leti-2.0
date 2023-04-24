import { Router } from "express";
import userRouter from "./userRouter";
import lessonRouter from "./lessonRouter";
import timetableRouter from "./timetableRouter";
import teacherRouter from "./teacherRouter";
import settingsRouter from "./settingsRouter";
import weekdayRouter from "./weekdayRouter";
import gapRouter from "./gapRouter";
import lessonTypeRouter from "./lessonTypeRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/lesson", lessonRouter);
router.use("/timetable", timetableRouter);
router.use("/teacher", teacherRouter);
router.use("/settings", settingsRouter);
router.use("/weekday", weekdayRouter);
router.use("/gap", gapRouter);
router.use("/lessonType", lessonTypeRouter);

export default router;
