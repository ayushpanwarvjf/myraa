import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { Zap, ChevronDown, Sparkles } from "lucide-react";

interface HeroProps {
  onLaunchChat: () => void;
}

const TYPED_WORDS = [
  "Your Intelligent AI Assistant.",
  "Powered by Gemini AI.",
  "Always Ready to Help.",
  "Built for the Future.",
];

function useTypewriter(words: string[], speed = 60, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    if (!deleting && charIdx < currentWord.length) {
      const t = setTimeout(() => {
        setText(currentWord.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else if (!deleting && charIdx === currentWord.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    } else if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setText(currentWord.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2.5);
      return () => clearTimeout(t);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((w) => (w + 1) % words.length);
    }
  }, [text, charIdx, deleting, wordIdx, words, speed, pause]);

  return text;
}

// Floating particle
function Particle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-violet-400/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.5],
        y: [0, -40, 0],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection({ onLaunchChat }: HeroProps) {
  const typedText = useTypewriter(TYPED_WORDS);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useSpring(0, { stiffness: 80, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 80, damping: 30 });

  const orbX = useTransform(mouseX, [-1, 1], [-25, 25]);
  const orbY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const orbX2 = useTransform(mouseX, [-1, 1], [20, -20]);
  const orbY2 = useTransform(mouseY, [-1, 1], [15, -15]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const particles = [
    { delay: 0, x: "10%", y: "20%", size: 4 },
    { delay: 0.5, x: "80%", y: "15%", size: 3 },
    { delay: 1.2, x: "65%", y: "70%", size: 5 },
    { delay: 0.8, x: "25%", y: "75%", size: 3 },
    { delay: 1.8, x: "90%", y: "55%", size: 4 },
    { delay: 2.1, x: "5%", y: "60%", size: 2 },
    { delay: 0.3, x: "50%", y: "85%", size: 3 },
    { delay: 1.5, x: "35%", y: "10%", size: 4 },
    { delay: 2.5, x: "75%", y: "40%", size: 2 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs with parallax */}
      <motion.div
        style={{ x: orbX, y: orbY }}
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-violet-700/20 blur-[140px] animate-float" />
      </motion.div>
      <motion.div
        style={{ x: orbX2, y: orbY2 }}
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-purple-800/15 blur-[120px] animate-float-reverse" />
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-900/8 blur-[200px] pointer-events-none" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <Sparkles size={12} />
          Gemini AI Powered
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-[0.95] tracking-tight mb-6"
        >
          <span className="gradient-text-white">MYRAA</span>
          <span className="block gradient-text">AI</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mb-8"
        />

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <p className="font-display text-xl sm:text-2xl text-white/70 font-light tracking-wide">
            {typedText}
            <span className="animate-blink text-violet-400 ml-0.5">|</span>
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-white/45 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Experience the future of AI conversation. Voice-native, emotionally aware, 
          and equipped with real-time intelligence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={onLaunchChat}
            whileHover={{ scale: 1.04, boxShadow: "0 0 50px rgba(124,58,237,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold text-base tracking-wide shadow-[0_0_30px_rgba(124,58,237,0.35)] transition-all duration-300 cursor-pointer animate-glow-pulse"
          >
            <Zap size={18} />
            Start Chat
          </motion.button>

          <motion.button
            onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-white/15 bg-white/5 text-white/80 font-semibold text-base tracking-wide hover:bg-white/10 hover:border-white/25 transition-all duration-300 cursor-pointer"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Hero Orb Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 relative flex items-center justify-center"
        >
          {/* Outer rings */}
          <div className="absolute w-[340px] h-[340px] rounded-full border border-violet-500/10 orbit-ring-3" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-violet-500/15 orbit-ring-2" />
          <div className="absolute w-[190px] h-[190px] rounded-full border border-violet-500/25 orbit-ring-1" />

          {/* Orbiting dot */}
          <div className="absolute w-[260px] h-[260px] orbit-ring-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          </div>

          {/* Central orb */}
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-violet-700 via-purple-800 to-violet-900 shadow-[0_0_60px_rgba(124,58,237,0.5),0_0_120px_rgba(124,58,237,0.2)] flex items-center justify-center overflow-hidden">
            {/* Scan line */}
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent animate-orb-scan" />
            {/* Grid pattern inside orb */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px]" />
            {/* Center glow */}
            <div className="w-6 h-6 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]">
              <div className="absolute inset-0 rounded-full bg-violet-300/50 animate-ping" />
            </div>
          </div>

          {/* State label row */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-1 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse mr-1" />
            <span className="text-[10px] font-mono font-medium text-white/50 tracking-[0.2em] uppercase">IDLE</span>
            <div className="w-px h-3 bg-white/10 mx-2" />
            <span className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">LISTENING</span>
            <div className="w-px h-3 bg-white/10 mx-2" />
            <span className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">SPEAKING</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs font-mono text-white/25 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  );
}
