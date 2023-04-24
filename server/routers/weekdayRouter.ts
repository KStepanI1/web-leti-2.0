import { Router } from "express";
import weekdayController from "../controllers/weekdayController";

const router = Router();

router.get("/", weekdayController.getAll);


export default router;
