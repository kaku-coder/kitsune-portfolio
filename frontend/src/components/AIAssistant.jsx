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
} from 'lucide-react';

const quickPrompts = [
  { icon: Code2, label: "What's your tech stack?", msg: "What technologies and tools do you work with?" },
  { icon: FolderKanban, label: "Show me your projects", msg: "Tell me about your best projects" },
  { icon: Rocket, label: "How can I contact you?", msg: "How can I get in touch with you?" },
  { icon: Brain, label: "What do you specialize in?", msg: "What are your main areas of expertise?" },
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
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const getBotResponse = (userMsg) => {
    const lower = userMsg.toLowerCase();
    if (lower.includes('tech') || lower.includes('stack') || lower.includes('skill')) {
      return "Prakash works with the MERN stack (MongoDB, Express.js, React, Node.js), along with TypeScript, Tailwind CSS, GSAP, Framer Motion, and Three.js. On the backend side, he uses REST APIs, GraphQL, JWT auth, and Socket.io for real-time features. He also works with Docker, GitHub Actions, and cloud deployments.";
    }
    if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) {
      return "Prakash has built several projects including an E-Commerce platform with Stripe integration, an AI Arena with OpenAI/Gemini integration, a real-time Dashboard, and more. Each project showcases full-stack capabilities from database design to deployment.";
    }
    if (lower.includes('contact') || lower.includes('reach') || lower.includes('hire') || lower.includes('email')) {
      return "You can reach Prakash through the Contact section of this portfolio, or connect with him on GitHub and LinkedIn. He's always open to discussing new opportunities and collaborations!";
    }
    if (lower.includes('special') || lower.includes('expert') || lower.includes('focus') || lower.includes('good')) {
      return "Prakash specializes in full-stack web development with a focus on building modern, scalable applications. His strengths include React frontend development, Node.js backend APIs, AI/LLM integrations, and creating immersive user experiences with animations.";
    }
    if (lower.includes('experience') || lower.includes('year') || lower.includes('how long')) {
      return "Prakash has 2+ years of hands-on development experience, having built 15+ projects across different domains. He's continuously learning and exploring new technologies in AI engineering, DevOps, and 3D web experiences.";
    }
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
      return "Hey! Welcome to Prakash's portfolio. Feel free to ask me anything about his skills, projects, or experience!";
    }
    if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('llm')) {
      return "Prakash has experience working with OpenAI, Google Gemini, LangChain, Pinecone for vector databases, RAG pipelines, and Hugging Face models. He's focused on building practical AI-powered applications.";
    }
    return "That's a great question! Feel free to explore the different sections of the portfolio to learn more about Prakash. You can check out the Skills page for his tech stack, the Projects page for his work, or the About page for his background story.";
  };

  const handleSend = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    const userMsg = { id: Date.now(), role: 'user', text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { id: Date.now() + 1, role: 'bot', text: getBotResponse(msg) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 800);
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
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed font-medium ${
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
                  </div>
                </motion.div>
              ))}

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
