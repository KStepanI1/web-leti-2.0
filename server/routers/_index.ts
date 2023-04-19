import { Router } from "express";
import userRouter from "./userRouter";
import lessonRouter from "./lessonRouter";
import timetableRouter from "./timetableRouter";
import teacherRouter from "./teacherRouter";
import weekNumberRouter from "./weekNumberRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/lesson", lessonRouter);
router.use("/timetable", timetableRouter);
router.use("/teacher", teacherRouter);
router.use("/weekNumber", weekNumberRouter);

export default router;
