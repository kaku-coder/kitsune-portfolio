import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contact.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import emailRoutes from "./routes/email.routes.js";
import visitorRoutes from "./routes/visitor.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/visitor", visitorRoutes);

export default app;