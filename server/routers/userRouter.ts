import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

router.post("/login", userController.login);
router.post("/registration", userController.registration);
router.get("/auth", userController.auth);

export default router;
