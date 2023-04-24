import { Router } from "express";
import gapController from "../controllers/gapController";

const router = Router();

router.get("/", gapController.getAll);


export default router;
