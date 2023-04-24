import { Router } from "express";
import lessonTypeController from "../controllers/lessonTypeController";

const router = Router();

router.get("/", lessonTypeController.getAll);


export default router;
