import { Router } from "express";
import lessonController from "../controllers/lessonController";

const router = Router();

router.post("/", lessonController.create);

export default router;
