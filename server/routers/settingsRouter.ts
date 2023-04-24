import { Router } from "express";
import settingsController from "../controllers/settingsController";

const router = Router();

router.get("/", settingsController.get);
router.put("/", settingsController.put);

export default router;
