import { sendEmail } from "../utils/email.js";

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  try {
    await sendEmail({ name, email, subject, message });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error.message);
    res.status(500).json({ error: "Failed to send email" });
  }
};
