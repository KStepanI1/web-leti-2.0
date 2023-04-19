import { Router } from "express";
import teacherController from "../controllers/teacherController";

const router = Router();

router.post("/", teacherController.create);
router.get("/", teacherController.getAll);
router.get("/:id", teacherController.getOne);

export default router;
