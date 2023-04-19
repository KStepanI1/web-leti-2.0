import { Router } from "express";
import weekNumberController from "../controllers/weekNumberController";

const router = Router();

router.get("/", weekNumberController.get);

export default router;
