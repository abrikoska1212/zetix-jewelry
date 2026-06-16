"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoReveal({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(64px, 10vw, 120px)",
                color: "var(--color-gold)",
                clipPath: "inset(0 100% 0 0)",
                animation: "writeText 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards",
                animationDelay: "0.3s",
              }}
            >
              Zetix
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.5em",
                color: "var(--color-gold)",
                opacity: 0,
                animation: "fadeIn 0.8s ease forwards",
                animationDelay: "1.4s",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Jewelry
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
