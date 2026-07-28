import { Router } from "express";
import { chat, sendMessage } from "../controllers/ai.controller.js";

const router = Router();

router.post("/chat", chat);
router.post("/send-message", sendMessage);

export default router;
