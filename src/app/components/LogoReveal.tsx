"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoReveal({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "var(--color-bg)" }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ overflow: "hidden" }}>
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.3,
                }}
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(64px, 10vw, 120px)",
                  color: "var(--color-gold)",
                }}
              >
                Zetix
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1.4,
              }}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: 13,
                letterSpacing: "0.5em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                marginTop: 16,
              }}
            >
              Jewelry
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
