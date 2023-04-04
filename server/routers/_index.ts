import { Router } from "express";
import userRouter from "./userRouter";
import lessonRouter from "./lessonRouter";
import timetableRouter from "./timetableRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/lesson", lessonRouter);
router.use("/timetable", timetableRouter);

export default router;
