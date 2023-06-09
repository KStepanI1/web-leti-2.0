import { Router } from "express";
import timetableController from "../controllers/timetableController";

const router = Router();

router.post("/", timetableController.create);
router.get("/", timetableController.getAll);
router.get("/byWeeks", timetableController.getAllByWeeks);
router.get("/nearest", timetableController.getNearest);
router.get("/:id", timetableController.getOne);

export default router;
