import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Brain, Zap, Globe, Lock, MessageCircle, Send, Github, ExternalLink, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────── */
const aboutStats = [
  { value: "Gemini", label: "AI Engine", suffix: "" },
  { value: "100+", label: "Languages", suffix: "" },
  { value: "<1s", label: "Response Time", suffix: "" },
  { value: "24/7", label: "Available", suffix: "" },
];

const aboutPillars = [
  { icon: Brain, title: "Memory-Driven", desc: "MYRAA builds a persistent understanding of you across conversations, recalling preferences and context without being told twice." },
  { icon: Globe, title: "Multimodal", desc: "Process voice, text, screen content, and images simultaneously — a truly unified intelligence interface." },
  { icon: Zap, title: "Real-Time Streaming", desc: "Responses stream token by token via WebSocket, eliminating wait times and delivering a natural conversational flow." },
  { icon: Lock, title: "Privacy First", desc: "Secure session architecture means your conversations remain private, with granular control over what MYRAA remembers." },
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-6"
            >
              ABOUT MYRAA AI
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight tracking-tight"
            >
              Intelligence,{" "}
              <span className="gradient-text">Redefined</span>{" "}
              for the Web
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/50 text-base sm:text-lg leading-relaxed mb-6"
            >
              MYRAA AI is a next-generation AI assistant built on modern web technologies 
              and powered by Google Gemini's advanced language and multimodal models. 
              It is designed to feel less like a tool and more like a collaborator.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/40 text-sm sm:text-base leading-relaxed mb-10"
            >
              Through voice-native interaction, real-time streaming, persistent memory, 
              and emotional awareness, MYRAA understands you holistically — adapting its 
              communication style to your needs, not the other way around.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {aboutStats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="font-display font-bold text-xl sm:text-2xl gradient-text mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-white/40 text-xs tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 * i + 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(124,58,237,0.4)]">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-1">{pillar.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   GUIDE SECTION
───────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Open MYRAA AI",
    desc: "Click 'Start Chat' to launch the AI interface instantly in your browser — no downloads, no installs.",
    detail: "Works on any modern browser on desktop, tablet, or mobile."
  },
  {
    number: "02",
    title: "Ask Anything",
    desc: "Type your question or speak directly to MYRAA. Use natural language — she understands context, nuance, and intent.",
    detail: "Supports voice input, text, image uploads, and screen sharing."
  },
  {
    number: "03",
    title: "Receive Intelligent Responses",
    desc: "Watch answers stream in real-time, rendered with markdown, code highlighting, and beautiful formatting.",
    detail: "Powered by Gemini's most capable models for accuracy and depth."
  },
  {
    number: "04",
    title: "Continue the Conversation",
    desc: "MYRAA remembers context across your session and beyond. Build on previous answers and go deeper.",
    detail: "Persistent memory means every interaction makes her smarter about you."
  },
];

export function GuideSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="guide" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-violet-900/12 rounded-full blur-[160px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            GETTING STARTED
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight"
          >
            Simple to <span className="gradient-text">Start</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-lg max-w-2xl mx-auto"
          >
            From zero to intelligent conversation in four steps — no setup required.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col glass-card-hover">
                {/* Step number */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center shadow-[0_4px_20px_rgba(124,58,237,0.4)] relative z-10">
                    <span className="font-mono font-bold text-white text-sm">{step.number}</span>
                  </div>
                  <div className="absolute inset-0 w-12 h-12 rounded-xl bg-violet-500/20 blur-lg" />
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-3 tracking-tight">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-3 flex-1">{step.desc}</p>
                <p className="text-violet-400/70 text-xs leading-relaxed font-mono border-t border-white/5 pt-3 mt-auto">
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────── */
export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSent(true);
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-900/12 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            CONTACT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl text-white mb-4 tracking-tight"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/45 text-base"
          >
            Questions, feedback, or ideas? We'd love to hear from you.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-10"
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center mx-auto mb-5 shadow-[0_0_30px_rgba(124,58,237,0.5)]">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-2">Message Received!</h3>
              <p className="text-white/45 text-sm">We'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-violet-400 text-sm font-semibold hover:text-violet-300 transition cursor-pointer"
              >
                Send another message →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-white/50 tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 tracking-widest uppercase mb-2">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all duration-200 resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(124,58,237,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold tracking-wide shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300 cursor-pointer"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}


/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
export function Footer({ onLaunchChat }: { onLaunchChat: () => void }) {
  return (
    <footer className="relative border-t border-white/5 py-14 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-purple-800 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.4)]">
                <Sparkles size={17} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                <span className="gradient-text">MYRAA</span>
                <span className="text-white/70 font-light ml-1">AI</span>
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              A premium AI assistant powered by Gemini — intelligent, voice-native, 
              and always evolving alongside you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white/70 text-xs tracking-widest uppercase mb-4">Navigation</h4>
            <div className="space-y-2.5">
              {["About", "Features", "Guide", "Contact"].map((l) => (
                <button
                  key={l}
                  onClick={() => document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/40 text-sm hover:text-violet-300 transition-colors cursor-pointer"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Legal & CTA */}
          <div>
            <h4 className="font-semibold text-white/70 text-xs tracking-widest uppercase mb-4">Legal</h4>
            <div className="space-y-2.5 mb-6">
              {["Privacy Policy", "Terms of Service"].map((l) => (
                <a key={l} href="#" className="block text-white/40 text-sm hover:text-violet-300 transition-colors">
                  {l}
                </a>
              ))}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/40 text-sm hover:text-violet-300 transition-colors"
              >
                <Github size={13} />
                GitHub
                <ExternalLink size={10} />
              </a>
            </div>
            <motion.button
              onClick={onLaunchChat}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="text-sm px-5 py-2.5 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300 font-semibold hover:bg-violet-600/30 transition-all cursor-pointer"
            >
              Launch MYRAA AI →
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-mono">
            © 2026 MYRAA AI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-mono">
            Built with Gemini AI · React · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
