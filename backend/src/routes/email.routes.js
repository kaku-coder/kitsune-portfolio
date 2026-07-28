import { Router } from "express";
import { sendContactEmail } from "../controllers/email.controller.js";

const router = Router();

router.post("/", sendContactEmail);

export default router;
