import { Router } from "express";
import { getVisitorCount, trackVisitor } from "../controllers/visitor.controller.js";

const router = Router();

router.get("/", getVisitorCount);
router.post("/track", trackVisitor);

export default router;
