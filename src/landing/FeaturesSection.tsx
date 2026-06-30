import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  MessageSquare, Code2, PenTool, Languages, BookOpen, 
  Lightbulb, Image, Zap, Shield, Clock, Smartphone, Search
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Gemini AI Chat",
    desc: "Real-time, voice-native conversations powered by Google's most capable AI model. Emotionally aware and context-rich.",
    gradient: "from-violet-600 to-purple-700",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    icon: PenTool,
    title: "AI Writing",
    desc: "Craft essays, emails, stories, and professional content with nuanced language understanding.",
    gradient: "from-purple-600 to-fuchsia-700",
    glow: "rgba(147,51,234,0.4)",
  },
  {
    icon: Code2,
    title: "Coding Assistant",
    desc: "Debug, explain, review, and write code in any language. Understands your entire codebase context.",
    gradient: "from-fuchsia-600 to-violet-700",
    glow: "rgba(168,85,247,0.4)",
  },
  {
    icon: BookOpen,
    title: "AI Summarization",
    desc: "Condense lengthy documents, articles, or conversations into clear, actionable insights instantly.",
    gradient: "from-violet-700 to-indigo-700",
    glow: "rgba(109,40,217,0.4)",
  },
  {
    icon: Languages,
    title: "AI Translation",
    desc: "Translate between 100+ languages with cultural nuance, idiom awareness, and tonal precision.",
    gradient: "from-indigo-600 to-violet-700",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    icon: Lightbulb,
    title: "AI Brainstorming",
    desc: "Unlock creative potential with intelligent ideation sessions. Generate, evaluate, and refine ideas.",
    gradient: "from-purple-600 to-violet-600",
    glow: "rgba(139,92,246,0.4)",
  },
  {
    icon: Search,
    title: "AI Explanation",
    desc: "Simplify complex topics with clear analogies, step-by-step breakdowns, and adaptive detail levels.",
    gradient: "from-violet-600 to-purple-800",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    icon: Image,
    title: "Image Understanding",
    desc: "Analyze, describe, and reason about images with multimodal Gemini vision capabilities.",
    gradient: "from-fuchsia-600 to-purple-700",
    glow: "rgba(192,38,211,0.4)",
  },
  {
    icon: Zap,
    title: "Fast Responses",
    desc: "Sub-second latency with streaming outputs. No waiting — answers flow as they are generated.",
    gradient: "from-violet-500 to-purple-700",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    icon: Shield,
    title: "Secure Conversations",
    desc: "Your conversations stay private. Encrypted sessions with no data retained between interactions.",
    gradient: "from-purple-700 to-violet-800",
    glow: "rgba(109,40,217,0.4)",
  },
  {
    icon: Clock,
    title: "Persistent Memory",
    desc: "MYRAA remembers context across sessions through intelligent memory management and recall.",
    gradient: "from-indigo-600 to-purple-700",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect on mobile, tablet, and desktop. A consistent premium experience on every device.",
    gradient: "from-violet-600 to-indigo-700",
    glow: "rgba(124,58,237,0.4)",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        style={{ boxShadow: `0 8px 24px ${feature.glow}` }}
      >
        <Icon size={22} className="text-white" />
      </div>
      <h3 className="font-display font-semibold text-base text-white mb-2 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed">
        {feature.desc}
      </p>
    </motion.div>
  );
}

export function FeaturesSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const [headVisible, setHeadVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadVisible(true); },
      { threshold: 0.2 }
    );
    if (headRef.current) observer.observe(headRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-6"
          >
            CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={headVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-5 tracking-tight"
          >
            Everything You{" "}
            <span className="gradient-text">Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive AI toolkit designed for the modern web — from casual questions 
            to complex professional workflows.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
