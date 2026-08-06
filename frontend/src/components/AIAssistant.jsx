import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Bot,
  User,
  Sparkles,
  X,
  Zap,
  Code2,
  FolderKanban,
  Rocket,
  Brain,
  Mail,
  FileText,
} from 'lucide-react';

const quickPrompts = [
  { icon: Code2, label: "What's your tech stack?", msg: "What technologies and tools do you work with?" },
  { icon: FolderKanban, label: "Show me your projects", msg: "Tell me about your best projects" },
  { icon: Mail, label: "How can I contact you?", msg: "How can I get in touch with you? Give me all your contact details." },
  { icon: FileText, label: "Can I see your resume?", msg: "Can I get your resume and email?" },
  { icon: Brain, label: "What do you specialize in?", msg: "What are your main areas of expertise?" },
  { icon: Rocket, label: "Are you open for work?", msg: "Are you available for hiring or freelance work?" },
  { icon: Mail, label: "Send a message to Prakash", msg: "I want to send a message to Prakash" },
];

const botAvatar = (
  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
    <Bot size={16} className="text-white" />
  </div>
);

const userAvatar = (
  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center flex-shrink-0">
    <User size={14} className="text-white" />
  </div>
);

const TypingIndicator = () => (
  <div className="flex items-center gap-1.5 px-3 py-2">
    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
    <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const ContactForm = ({ theme, onSubmit, onCancel }) => {
  const isLight = theme === 'light';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSending(true);
    await onSubmit({ name: name.trim(), email: email.trim(), message: message.trim() });
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className={`w-full px-3 py-2 rounded-xl text-xs font-medium outline-none border transition-all ${
          isLight
            ? 'bg-white border-orange-200 text-stone-800 focus:border-orange-400 placeholder:text-stone-400'
            : 'bg-[#1a1435] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
        }`}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`w-full px-3 py-2 rounded-xl text-xs font-medium outline-none border transition-all ${
          isLight
            ? 'bg-white border-orange-200 text-stone-800 focus:border-orange-400 placeholder:text-stone-400'
            : 'bg-[#1a1435] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
        }`}
      />
      <textarea
        placeholder="Your Message for Prakash"
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className={`w-full px-3 py-2 rounded-xl text-xs font-medium outline-none border transition-all resize-none ${
          isLight
            ? 'bg-white border-orange-200 text-stone-800 focus:border-orange-400 placeholder:text-stone-400'
            : 'bg-[#1a1435] border-purple-900/40 text-gray-200 focus:border-purple-500/60 placeholder:text-gray-500'
        }`}
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={sending || !name.trim() || !email.trim() || !message.trim()}
          className={`flex-1 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            sending ? 'opacity-60 cursor-not-allowed' : ''
          } ${
            isLight
              ? 'bg-orange-500 text-white hover:bg-orange-600'
              : 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.3)]'
          }`}
        >
          {sending ? (
            <>
              <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={12} />
              Send Message
            </>
          )}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isLight
              ? 'bg-stone-100 text-stone-500 hover:bg-stone-200'
              : 'bg-purple-950/40 text-gray-400 hover:bg-purple-900/30'
          }`}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default function AIAssistant({ isOpen, onClose, theme }) {
  const isLight = theme === 'light';
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: "Hey there! I'm Prakash's AI Assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showContactForm]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getClientFallbackResponse = (userMsg) => {
    const query = userMsg.toLowerCase();

    // Contact flow trigger check
    if (
      query.includes("message") ||
      query.includes("talk to") ||
      query.includes("reach") ||
      query.includes("hire") ||
      query.includes("contact") ||
      query.includes("connect") ||
      query.includes("get in touch")
    ) {
      return `[CONTACT_FLOW]\nSure! I'd love to connect you with Prakash. Please fill in the details below and I'll send your message directly to him!`;
    }

    // Greetings
    if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("who are you")) {
      return "Hey there! I'm Prakash's AI Assistant. I can help you learn about his skills, projects, experience, or get in touch with him. What would you like to know?";
    }

    // Contact details & Social links
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
      return "Some of Prakash's top projects include:\n1. AI Battle Arena (LIVE) - MERN, Socket.io, AI, Docker (https://ai-battle-arena-3-s55j.onrender.com)\n2. E-Commerce Platform - MERN, Stripe, Tailwind\n3. Developer Dashboard - React, Node.js, MongoDB\n\nCheck out the Projects section on this website to view all details!";
    }

    // Experience & Stats
    if (query.includes("experience") || query.includes("background") || query.includes("about") || query.includes("bio") || query.includes("year") || query.includes("available")) {
      return "Prakash has 2+ years of experience as a Full Stack Developer from India. He has completed 15+ projects, 500+ Git commits, 200+ LeetCode problems solved, and is actively open for full-time developer roles!";
    }

    return "I'm here to help you learn about Prakash! Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
  };

  const getBotResponse = async (userMsg) => {
    const query = userMsg.toLowerCase();
    if (
      query.includes("message") ||
      query.includes("talk to") ||
      query.includes("reach") ||
      query.includes("hire") ||
      query.includes("contact") ||
      query.includes("connect") ||
      query.includes("get in touch")
    ) {
      return `[CONTACT_FLOW]\nSure! I'd love to connect you with Prakash. Please fill in the details below and I'll send your message directly to him!`;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.reply) return data.reply;
      }
    } catch {
      // Backend fetch failed or timed out - seamlessly use client AI engine
    }

    return getClientFallbackResponse(userMsg);
  };

  const handleSend = async (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg = { id: Date.now(), role: 'user', text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const botText = await getBotResponse(msg);

    if (botText.includes('[CONTACT_FLOW]')) {
      const cleanText = botText.replace('[CONTACT_FLOW]', '').trim();
      const botMsg = { id: Date.now() + 1, role: 'bot', text: cleanText };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
      setShowContactForm(true);
      setContactSent(false);
    } else {
      const botMsg = { id: Date.now() + 1, role: 'bot', text: botText };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }
  };

  const handleContactSubmit = async ({ name, email, message }) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/ai/send-message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();

      setShowContactForm(false);
      setContactSent(true);

      if (res.ok && data.success) {
        const botMsg = { id: Date.now() + 2, role: 'bot', text: `Thanks ${name}! Your message has been sent to Prakash. He'll get back to you soon at ${email}. Is there anything else you'd like to know about him?` };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        const mailtoUrl = `mailto:prakashdasdev1@gmail.com?subject=${encodeURIComponent('Portfolio Message from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        const botMsg = {
          id: Date.now() + 2,
          role: 'bot',
          text: "Oops, server couldn't send your message right now. You can click below to send it directly to Prakash via email:",
          mailtoUrl,
        };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch {
      setShowContactForm(false);
      const mailtoUrl = `mailto:prakashdasdev1@gmail.com?subject=${encodeURIComponent('Portfolio Message from ' + name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
      const botMsg = {
        id: Date.now() + 2,
        role: 'bot',
        text: "Couldn't send your message right now. Click below to send your message directly to Prakash via email:",
        mailtoUrl,
      };
      setMessages((prev) => [...prev, botMsg]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] lg:hidden"
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className={`fixed top-0 left-0 h-screen w-[92vw] sm:w-[380px] lg:w-[400px] z-[999] flex flex-col border-r shadow-2xl ${
              isLight
                ? 'bg-[#fff7ed] border-orange-200'
                : 'bg-[#09080e] border-purple-900/40'
            }`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-5 py-4 border-b ${
              isLight ? 'border-orange-200' : 'border-purple-900/40'
            }`}>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-[#09080e]" />
                </div>
                <div>
                  <h3 className={`text-sm font-bold tracking-wide ${isLight ? 'text-stone-900' : 'text-white'}`}>
                    AI ASSISTANT
                  </h3>
                  <p className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isLight
                    ? 'hover:bg-orange-100 text-stone-500'
                    : 'hover:bg-purple-900/30 text-gray-400'
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4 scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {msg.role === 'bot' ? botAvatar : userAvatar}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed font-medium whitespace-pre-line ${
                      msg.role === 'user'
                        ? isLight
                          ? 'bg-orange-500 text-white rounded-br-md'
                          : 'bg-purple-600 text-white rounded-br-md'
                        : isLight
                          ? 'bg-orange-100 text-stone-800 rounded-bl-md'
                          : 'bg-[#140f29] text-gray-200 rounded-bl-md border border-purple-900/30'
                    }`}
                  >
                    {msg.text}
                    {msg.mailtoUrl && (
                      <div className="mt-2.5">
                        <a
                          href={msg.mailtoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                            isLight
                              ? 'bg-orange-500 hover:bg-orange-600 text-white'
                              : 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                          }`}
                        >
                          <Mail size={13} />
                          <span>Send via Email Client</span>
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {showContactForm && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  {botAvatar}
                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl rounded-bl-md ${
                    isLight
                      ? 'bg-orange-100 border border-orange-200'
                      : 'bg-[#140f29] border border-purple-900/30'
                  }`}>
                    <ContactForm theme={theme} onSubmit={handleContactSubmit} onCancel={() => setShowContactForm(false)} />
                  </div>
                </motion.div>
              )}

              {isTyping && (
                <div className="flex gap-2.5">
                  {botAvatar}
                  <div className={`px-2 py-1.5 rounded-2xl rounded-bl-md ${
                    isLight ? 'bg-orange-100' : 'bg-[#140f29] border border-purple-900/30'
                  }`}>
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {/* Quick Prompts (only show if no user messages yet) */}
              {messages.length === 1 && (
                <div className="flex flex-col gap-2 mt-1">
                  <p className={`text-[10px] font-bold tracking-widest uppercase px-1 ${
                    isLight ? 'text-stone-400' : 'text-gray-500'
                  }`}>
                    Quick Questions
                  </p>
                  {quickPrompts.map((prompt, i) => {
                    const Icon = prompt.icon;
                    return (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        onClick={() => handleSend(prompt.msg)}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          isLight
                            ? 'bg-white border-orange-200 text-stone-700 hover:border-orange-400 hover:shadow-md'
                            : 'bg-[#140f29] border-purple-900/30 text-gray-300 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                        }`}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          isLight ? 'bg-orange-100 text-orange-600' : 'bg-purple-900/40 text-purple-400'
                        }`}>
                          <Icon size={14} />
                        </div>
                        <span className="text-xs font-semibold">{prompt.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className={`px-4 py-3 border-t ${isLight ? 'border-orange-200' : 'border-purple-900/40'}`}>
              <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border transition-all ${
                isLight
                  ? 'bg-white border-orange-200 focus-within:border-orange-400'
                  : 'bg-[#140f29] border-purple-900/30 focus-within:border-purple-500/50'
              }`}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className={`flex-1 bg-transparent outline-none text-xs font-medium placeholder:text-gray-500 ${
                    isLight ? 'text-stone-800' : 'text-white'
                  }`}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className={`p-2 rounded-lg transition-all cursor-pointer ${
                    input.trim() && !isTyping
                      ? isLight
                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md'
                        : 'bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                      : isLight
                        ? 'bg-stone-100 text-stone-300'
                        : 'bg-purple-950/40 text-gray-600'
                  }`}
                >
                  <Send size={14} />
                </button>
              </div>
              <p className={`text-[9px] text-center mt-2 font-medium ${isLight ? 'text-stone-400' : 'text-gray-500'}`}>
                Powered by AI · Portfolio Assistant
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
