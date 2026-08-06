import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const getTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 15000, // 15s connection timeout
    greetingTimeout: 15000,
  });
};

export const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = getTransporter();

  const mailOptions = {
    from: `Prakash Portfolio <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact: ${subject || "New Message"} from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #7c3aed; margin-top: 0;">New Contact Form Submission</h2>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "N/A"}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
        <p><strong>Message:</strong></p>
        <p style="background: #f9fafb; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
        <p style="color: #6b7280; font-size: 12px; margin-bottom: 0;">Sent via AI Assistant / Portfolio Contact Form</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

