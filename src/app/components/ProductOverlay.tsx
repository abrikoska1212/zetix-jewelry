"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ProductData {
  name: string;
  subtitle: string;
  material: string;
  stone: string;
  craft: string;
  image: string;
  collection: string;
}

interface Props {
  item: ProductData | null;
  onClose: () => void;
}

const ease = [0.76, 0, 0.24, 1] as const;

export default function ProductOverlay({ item, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] grid bg-bg"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Кнопка закрыть */}
          <button
            onClick={onClose}
            className="absolute top-10 right-10 z-[1001] text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-gold"
            style={{ fontFamily: "var(--font-body)", background: "none", border: "none", cursor: "none" }}
            data-cursor-pointer
          >
            ✕ закрыть
          </button>

          {/* Фото — выезжает слева */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center border-r border-border"
            style={{ padding: 80 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-h-[70vh] w-full object-contain"
              style={{ filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))" }}
            />
          </motion.div>

          {/* Текст — выезжает справа */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="flex flex-col justify-center gap-6"
            style={{ padding: 80 }}
          >
            <span
              className="text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.collection}
            </span>

            <h2
              className="text-[40px] leading-[1.1] font-[400] md:text-[64px]"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", margin: 0 }}
            >
              {item.name}
            </h2>

            <p
              className="text-[20px] font-[400] italic text-text-muted"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.subtitle}
            </p>

            <div
              className="my-8 flex flex-col gap-3 border-t border-b py-8"
              style={{ borderColor: "var(--color-border)" }}
            >
              {[item.material, item.stone, item.craft].map((detail) => (
                <div
                  key={detail}
                  className="border-l-[1px] pl-4 text-[14px] font-[300] text-text-muted"
                  style={{
                    fontFamily: "var(--font-body)",
                    borderLeftColor: "var(--color-border-gold)",
                  }}
                >
                  {detail}
                </div>
              ))}
            </div>

            <button
              className="inline-flex w-fit items-center gap-3 border-none bg-transparent pb-1 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-[400ms] hover:gap-5 hover:text-gold-light"
              style={{
                fontFamily: "var(--font-body)",
                borderBottom: "1px solid var(--color-gold)",
                cursor: "none",
              }}
              data-cursor-pointer
            >
              Узнать стоимость
              <span>→</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
