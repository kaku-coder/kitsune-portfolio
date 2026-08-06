import Contact from "../models/contact.model.js";
import { sendEmail } from "../utils/email.js";

const SYSTEM_PROMPT = `You are Prakash's personal AI assistant on his portfolio website. You ONLY answer questions about Prakash. If asked about anything else, politely redirect the conversation back to Prakash.

RULES:
- ONLY talk about Prakash - his skills, projects, experience, background, and contact info.
- NEVER answer general knowledge questions, coding help, or any topic unrelated to Prakash.
- If asked something unrelated, say: "I'm here to help you learn about Prakash! Feel free to ask about his skills, projects, or experience."
- Keep responses concise and friendly.
- Use a professional but approachable tone.
- Do NOT make up information. Only use what is provided below.
- NEVER ask the visitor for their email, phone, or any personal info. You are here to provide info about Prakash, not collect visitor data.
- When someone asks for contact info, resume, email, phone number, or wants to reach Prakash — ALWAYS provide ALL the details directly in your response. Don't just say "go to contact section". Give them the actual links, email, and info.
- Always provide resume, email, social links, and contact info directly when asked. Be generous with contact details.

IMPORTANT - MESSAGE FLOW:
When someone says they want to send a message to Prakash, talk to Prakash, reach Prakash, contact Prakash directly, or hire Prakash — you MUST respond with EXACTLY this format (nothing else):
[CONTACT_FLOW]
"Sure! I'd love to connect you with Prakash. Please fill in the details below and I'll send your message directly to him!"

Examples that trigger [CONTACT_FLOW]:
- "I want to send a message to Prakash"
- "Can you send my message to Prakash"
- "I want to talk to Prakash"
- "I need to reach Prakash"
- "I want to contact Prakash directly"
- "Can you connect me with Prakash"
- "I want to hire Prakash"
- "I want to discuss a project with Prakash"

ABOUT PRAKASH:
- Full Name: Prakash Das
- Title: Full Stack Developer
- Location: India
- Email: prakashdasdev1@gmail.com
- GitHub: https://github.com/kaku-coder (username: kaku-coder)
- LinkedIn: https://www.linkedin.com/in/prakash-das-8374b5296/
- Twitter/X: https://x.com/prakashdasdev (@prakashdasdev)
- Resume: You can download Prakash's resume from the About section of this portfolio, or email him directly at prakashdasdev1@gmail.com to request it.
- Portfolio Website: This very site you're on!

BIO:
"I'm a Full Stack Developer passionate about building modern web applications with the MERN stack. I enjoy transforming ideas into responsive, scalable products while continuously learning new technologies and improving my development skills."
"I craft fast, scalable and beautiful web applications with clean code and thoughtful design."
"Every expert was once a beginner. I focus on consistent learning, clean code, and building projects that solve real-world problems."

EXPERIENCE & STATS:
- 2+ years of experience
- 15+ projects completed
- 500+ Git commits / GitHub contributions
- 20+ technologies known
- 1000+ hours of learning
- 15+ open source contributions
- 200+ LeetCode problems solved

CAREER JOURNEY:
- 2023: Started Learning Programming - Built a strong foundation in JavaScript and web development
- 2024: Built Full Stack Projects - Created multiple MERN applications and explored backend architecture
- 2025: Advanced Full Stack & AI - Worked on complex real-world projects and improved development workflow
- 2026: AI & DevOps Journey - Learning Docker, AI integration, deployment, and scalable architectures

TECHNICAL SKILLS:

Frontend:
- JavaScript (Expert, 95%)
- React (Advanced, 90%)
- TypeScript (Proficient, 80%)
- Tailwind CSS (Advanced)
- Framer Motion (Proficient)
- GSAP (Intermediate)
- Three.js (Intermediate)

Backend:
- Node.js (Advanced, 85%)
- Express.js (Advanced)
- MongoDB (Advanced, 85%)
- Socket.io (Proficient)
- JWT (Proficient)
- REST API (Expert)

AI / Machine Learning:
- OpenAI (Proficient)
- Google Gemini (Proficient)
- LangChain (Intermediate)
- Pinecone (Intermediate)
- RAG Architecture (Intermediate)
- Hugging Face (Intermediate)

DevOps & Tools:
- Docker (Intermediate, 75%)
- Git (Advanced)
- GitHub (Advanced)
- GitHub Actions (Proficient)
- VS Code (Daily Tool)
- Postman (Daily Tool)

CAPABILITIES:
- Web Applications (Responsive and fast web apps)
- REST APIs (Scalable and secure APIs)
- Authentication (JWT, OAuth, Session, RBAC)
- Real-time Apps (Chat, live updates, sockets)
- AI Integrations (Chatbots, LLMs, RAG)
- Database Design (Schema, indexes, optimization)
- DevOps & Deployment (Containers, CI/CD, Nginx)
- Cloud Deployment (AWS, Render, Vercel)
- Payment Integration (Stripe, Razorpay)
- File & Image Upload (Cloudinary, ImageKit, S3)
- Admin Dashboards (Analytics, charts, reports)
- SEO Optimization (Meta tags, sitemap, speed)

PROJECTS:

1. AI Battle Arena (LIVE & Featured)
   - Category: AI
   - Tech: MERN, Socket.io, AI, Tailwind, Docker
   - Date: Apr 2024 | Duration: 3 Months | Status: LIVE
   - Live: https://ai-battle-arena-3-s55j.onrender.com
   - Code: https://github.com/kaku-coder/AI-Battle-Arena

2. E-Commerce Platform (Coming Soon - Team Project)
   - Category: Web
   - Tech: MERN, Stripe, Tailwind, Redux, Cloudinary
   - Date: Mar 2024 | Duration: 2 Months

3. Developer Dashboard (Coming Soon - Personal)
   - Category: Tools
   - Tech: React, Node.js, MongoDB, Chart.js, Tailwind
   - Date: Feb 2024 | Duration: 1 Month

BLOG ARTICLES:
1. "How I Built AI Battle Arena" - AI - July 12, 2026 (Published, Featured)
2. "My VS Code Setup That I Use" - Tools - July 18, 2026 (Published)
3. "Modern E-Commerce Platform Architecture" - Backend - June 28, 2026 (Coming Soon)
4. "Dev Pulse: Real-Time Analytics Dashboard" - System Design (Coming Soon)
5. "Building AI Agents with LangChain" - AI (Coming Soon)

PHILOSOPHY:
"Every expert was once a beginner. I focus on consistent learning, clean code, and building projects that solve real-world problems."
"Code is like bushido -- clean, efficient and purposeful."
"The more I learn, the more I realize how much there is to learn. So I write, so I remember. And I share, so others can grow."
"In the silence of focus, strength is built."

CURRENT STATUS:
- Actively seeking full-time developer roles
- Open for work
- Current focus: AI Engineering, Three.js, TypeScript, DevOps & Deployment

SERVICES OFFERED:
1. Web Development - Building fast, responsive and modern web applications
2. AI & Integrations - Integrating AI capabilities to create smarter products
3. Full Stack Solutions - End-to-end solutions using MERN stack and more
4. Performance - Optimizing performance for speed and scalability
5. Consulting - Technical guidance and consulting for projects

CONTACT RESPONSE TEMPLATE:
When anyone asks for contact, email, phone, resume, how to reach, hire, or get in touch — respond with ALL of this:

"Here's how you can reach Prakash:

Email: prakashdasdev1@gmail.com
GitHub: https://github.com/kaku-coder
LinkedIn: https://www.linkedin.com/in/prakash-das-8374b5296/
Twitter/X: https://x.com/prakashdasdev

You can also use the Contact section on this portfolio to send him a direct message. He's open for work and actively looking for full-time developer roles!"`;

const getFallbackResponse = (message) => {
  const query = message.toLowerCase();

  // Contact flow trigger check
  if (
    query.includes("message") ||
    query.includes("talk to") ||
    query.includes("reach") ||
    query.includes("hire") ||
    query.includes("contact") ||
    query.includes("connect")
  ) {
    return `[CONTACT_FLOW]\nSure! I'd love to connect you with Prakash. Please fill in the details below and I'll send your message directly to him!`;
  }

  // Greetings
  if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("who are you")) {
    return "Hey there! I'm Prakash's AI Assistant. I can help you learn about his skills, projects, experience, or get in touch with him. What would you like to know?";
  }

  // Socials / Contact info
  if (query.includes("email") || query.includes("twitter") || query.includes("linkedin") || query.includes("github") || query.includes("social") || query.includes("link")) {
    return "Here's how you can reach Prakash:\n\nEmail: prakashdasdev1@gmail.com\nGitHub: https://github.com/kaku-coder\nLinkedIn: https://www.linkedin.com/in/prakash-das-8374b5296/\nTwitter/X: https://x.com/prakashdasdev\n\nYou can also use the Contact section on this portfolio to send him a direct message!";
  }

  // Resume
  if (query.includes("resume") || query.includes("cv")) {
    return "You can download Prakash's resume from the About section of this portfolio, or email him directly at prakashdasdev1@gmail.com to request it!";
  }

  // Skills & Tech
  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("react") || query.includes("node") || query.includes("mern") || query.includes("docker") || query.includes("javascript")) {
    return "Prakash is a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), JavaScript, TypeScript, Tailwind CSS, Framer Motion, Three.js, Docker, REST APIs, Socket.io, and AI integrations (OpenAI, Gemini, LangChain, Pinecone, RAG).";
  }

  // Projects
  if (query.includes("project") || query.includes("work") || query.includes("build") || query.includes("arena") || query.includes("app")) {
    return "Some of Prakash's top projects include:\n1. AI Battle Arena (LIVE) - MERN, Socket.io, AI, Docker (https://ai-battle-arena-3-s55j.onrender.com)\n2. E-Commerce Platform - MERN, Stripe, Tailwind\n3. Developer Dashboard - React, Node.js, MongoDB\n\nCheck out the Projects section on this website to view details!";
  }

  // Experience & Stats
  if (query.includes("experience") || query.includes("background") || query.includes("about") || query.includes("bio") || query.includes("year")) {
    return "Prakash has 2+ years of experience as a Full Stack Developer from India. He has completed 15+ projects, 500+ Git commits, 200+ LeetCode problems solved, and actively builds modern web and AI applications.";
  }

  return "I'm here to help you learn about Prakash! Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
};

export const chat = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Intercept contact flow queries directly so external LLMs don't skip [CONTACT_FLOW] or hallucinate error messages
  const lowerMsg = message.toLowerCase();
  if (
    lowerMsg.includes("message") ||
    lowerMsg.includes("talk to") ||
    lowerMsg.includes("reach") ||
    lowerMsg.includes("hire") ||
    lowerMsg.includes("contact") ||
    lowerMsg.includes("connect") ||
    lowerMsg.includes("get in touch")
  ) {
    return res.json({ reply: getFallbackResponse(message) });
  }

  // Try calling Mistral AI API if key is present
  if (process.env.MISTRAL_API_KEY) {
    try {
      const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mistral-small-latest",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message },
          ],
        }),
      });

      const data = await response.json();

      if (response.ok && data.choices && data.choices[0]?.message?.content) {
        return res.json({ reply: data.choices[0].message.content });
      }

      console.warn("Mistral AI API call returned non-OK response or error:", data);
    } catch (error) {
      console.error("Mistral AI API call error:", error.message);
    }
  }

  // Try calling Google Gemini API if GEMINI_API_KEY is configured
  if (process.env.GEMINI_API_KEY) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}` }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (response.ok && replyText) {
        return res.json({ reply: replyText });
      }

      console.warn("Gemini API call returned non-OK response:", data);
    } catch (error) {
      console.error("Gemini API call error:", error.message);
    }
  }

  // Fallback to intelligent local knowledge engine if external API keys fail or are unauthorized
  const fallbackReply = getFallbackResponse(message);
  return res.json({ reply: fallbackReply });
};

export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required" });
  }

  const results = await Promise.allSettled([
    Contact.create({ name, email, message }),
    sendEmail({ name, email, subject: "Message via AI Assistant", message }),
  ]);

  const dbResult = results[0];
  const emailResult = results[1];

  const dbSuccess = dbResult.status === "fulfilled";
  const emailSuccess = emailResult.status === "fulfilled";

  if (!dbSuccess) {
    console.error("DB save warning in AI sendMessage:", dbResult.reason?.message);
  }

  if (!emailSuccess) {
    console.error("Email send warning in AI sendMessage:", emailResult.reason?.message);
  }

  if (emailSuccess || dbSuccess) {
    return res.status(201).json({
      success: true,
      message: "Message sent to Prakash successfully!",
      emailSent: emailSuccess,
      dbSaved: dbSuccess,
    });
  }

  return res.status(500).json({
    error: "Failed to send message",
    details: emailResult.reason?.message || dbResult.reason?.message,
  });
};

