import { Router } from "express";
import lessonController from "../controllers/lessonController";

const router = Router();

router.post("/", lessonController.create);
router.get("/", lessonController.getAll);
router.get("/:id", lessonController.getOne);

export default router;
