import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LandingPage } from "./landing/LandingPage";
import { ChatApp } from "./ChatApp";

type PageView = "landing" | "chat";

export default function App() {
  const [page, setPage] = useState<PageView>(() => {
    if (typeof window !== "undefined" && window.location.hash === "#chat") {
      return "chat";
    }
    return "landing";
  });

  useEffect(() => {
    if (page === "chat") {
      window.location.hash = "chat";
      document.title = "MYRAA AI — Chat";
    } else {
      window.location.hash = "";
      document.title = "MYRAA AI — Your Intelligent AI Assistant";
    }
  }, [page]);

  const handleLaunchChat = () => {
    setPage("chat");
    window.scrollTo({ top: 0 });
  };

  const handleBackToLanding = () => {
    setPage("landing");
    window.scrollTo({ top: 0 });
  };

  return (
    <AnimatePresence mode="wait">
      {page === "landing" ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LandingPage onLaunchChat={handleLaunchChat} />
        </motion.div>
      ) : (
        <motion.div
          key="chat"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-screen"
        >
          <ChatApp onBack={handleBackToLanding} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
