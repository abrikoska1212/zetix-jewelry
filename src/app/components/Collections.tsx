"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Collection {
  name: string;
  count: string;
  image: string;
  description: string;
  items: string[];
}

const collections: Collection[] = [
  {
    name: "NOIR",
    count: "12 украшений",
    image: "/images/gold-rings.jpg",
    description: "Тёмная элегантность. Украшения для тех кто ценит глубину и тишину золота.",
    items: ["Кольцо «Ночь»", "Подвеска «Тень»", "Серьги «Полночь»", "Браслет «Уголь»"],
  },
  {
    name: "LUMIÈRE",
    count: "8 украшений",
    image: "/images/diamond-ring.jpg",
    description: "Свет в каждом камне. Бриллианты которые говорят без слов.",
    items: ["Кольцо «Рассвет»", "Серьги «Луч»", "Кулон «Заря»", "Браслет «Искра»"],
  },
  {
    name: "ÉTERNEL",
    count: "15 украшений",
    image: "/images/black-set.jpg",
    description: "Вечность в каждом штрихе. Классика которая не устареет никогда.",
    items: ["Кольцо «Вечер»", "Серьги «Звезда»", "Кулон «Луна»", "Подвеска «Комета»"],
  },
];

export default function Collections() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Collection | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section id="collections" ref={ref} className="px-10 md:px-16 pt-0 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span
            className="mb-16 block text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
            style={{ fontFamily: "var(--font-body)", opacity: 0.7 }}
          >
            Коллекции
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => setActive(col)}
              role="button"
              tabIndex={0}
              data-cursor-pointer
            >
              {/* Фото */}
              <div className="aspect-[3/4] overflow-hidden bg-surface">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[700ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${col.image}')` }}
                />
              </div>

              {/* Градиент снизу */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10, 9, 6, 0.95) 0%, rgba(10, 9, 6, 0.6) 40%, transparent 100%)",
                }}
              />

              {/* Золотая линия снизу */}
              <div
                className="absolute bottom-0 left-0 z-[3] h-[1px] w-0 bg-gold transition-all duration-[500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:w-full"
              />

              {/* Текст */}
              <h3
                className="absolute bottom-8 left-8 z-[2] text-[36px] font-[400] italic text-text transition-colors duration-[400ms] group-hover:text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.name}
              </h3>
              <span
                className="absolute bottom-8 right-8 z-[2] text-[11px] font-[400] uppercase tracking-[0.15em] text-gold opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Смотреть →
              </span>
              <span
                className="absolute bottom-[72px] left-8 z-[2] text-[11px] font-[400] uppercase tracking-[0.15em] text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {col.count}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Оверлей коллекции */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1000] grid bg-bg"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-10 right-10 z-[1001] text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-gold"
              style={{ fontFamily: "var(--font-body)", background: "none", border: "none" }}
              data-cursor-pointer
            >
              ✕ закрыть
            </button>

            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="flex items-center justify-center border-r border-border"
              style={{ padding: 80 }}
            >
              <img
                src={active.image}
                alt={active.name}
                className="max-h-[70vh] w-full object-contain"
                style={{ filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))" }}
              />
            </motion.div>

            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="flex flex-col justify-center gap-6"
              style={{ padding: 80 }}
            >
              <span
                className="text-[11px] font-[400] uppercase tracking-[0.2em] text-gold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Коллекция
              </span>

              <h2
                className="text-[56px] leading-[1.1] font-[400] italic"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text)", margin: 0 }}
              >
                {active.name}
              </h2>

              <p
                className="max-w-[400px] text-[15px] font-[300] leading-relaxed text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {active.description}
              </p>

              <div
                className="my-4 flex flex-col gap-3 border-t border-b py-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                {active.items.map((item) => (
                  <div
                    key={item}
                    className="border-l-[1px] pl-4 text-[14px] font-[300] text-text-muted"
                    style={{
                      fontFamily: "var(--font-body)",
                      borderLeftColor: "var(--color-border-gold)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                className="inline-flex w-fit items-center gap-3 border-none bg-transparent pb-1 text-[11px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-[400ms] hover:gap-5 hover:text-gold-light"
                style={{
                  fontFamily: "var(--font-body)",
                  borderBottom: "1px solid var(--color-gold)",
                }}
              >
                Смотреть коллекцию
                <span>→</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
