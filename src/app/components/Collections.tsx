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
          className="mb-20 flex flex-col items-center"
        >
          <div className="mb-8 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Наши
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
          <h2
            className="text-[42px] font-[400] italic text-text md:text-[52px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Коллекции
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collections.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
              }}
              className="group relative cursor-pointer overflow-hidden gold-glow"
              onClick={() => setActive(col)}
              role="button"
              tabIndex={0}
            >
              {/* Фото */}
              <div className="aspect-[3/4] overflow-hidden bg-surface">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${col.image}')`, willChange: "transform" }}
                />
              </div>

              {/* Градиент снизу */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10, 9, 6, 0.95) 0%, rgba(10, 9, 6, 0.5) 35%, transparent 100%)",
                }}
              />

              {/* Золотая линия снизу */}
              <div
                className="absolute bottom-0 left-0 z-[3] h-[1px] w-0 bg-gold transition-all duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full"
              />

              {/* Текст */}
              <h3
                className="absolute bottom-10 left-8 z-[2] text-[38px] font-[400] italic text-text transition-colors duration-[500ms] group-hover:text-gold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.name}
              </h3>
              <span
                className="absolute bottom-10 right-8 z-[2] text-[10px] font-[400] uppercase tracking-[0.15em] text-gold opacity-0 transition-all duration-[500ms] group-hover:opacity-100"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Смотреть →
              </span>
              <span
                className="absolute bottom-[80px] left-8 z-[2] text-[10px] font-[400] uppercase tracking-[0.15em] text-gold opacity-0 transition-all duration-[500ms] group-hover:opacity-100"
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
            className="fixed inset-0 z-[1000]"
            style={{ background: "#0a0906" }}
          >
            <div className="grid h-screen" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {/* Кнопка закрыть */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-10 right-10 z-[1001] text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-gold"
                style={{ fontFamily: "var(--font-body)", background: "none", border: "none" }}
              >
                ✕ закрыть
              </button>

              {/* Левая — фото */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }}
                className="relative flex items-center justify-center"
                style={{ padding: 80, borderRight: "1px solid #1a1a1a" }}
              >
                <img
                  src={active.image}
                  alt={active.name}
                  loading="lazy"
                  className="max-h-[70vh] w-full object-contain"
                  style={{ filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))" }}
                />
              </motion.div>

              {/* Правая — информация */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }}
                className="flex flex-col justify-center"
                style={{ padding: "80px 80px 80px 60px" }}
              >
                {/* Лейбл */}
                <p
                  className="mb-8 text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Коллекция
                </p>

                {/* Название */}
                <h2
                  className="mb-1 text-[64px] leading-[1] font-[400] italic"
                  style={{ fontFamily: "var(--font-display)", color: "#fff" }}
                >
                  {active.name}
                </h2>
                <p
                  className="mb-4 text-[14px] font-[400] text-gold/60"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {active.count}
                </p>

                {/* Золотой разделитель */}
                <div className="mb-10 h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />

                {/* Описание */}
                <p
                  className="mb-12 max-w-[400px] text-[16px] font-[300] leading-[1.9] text-text-muted"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  {active.description}
                </p>

                {/* Список изделий */}
                <div className="flex flex-col gap-4">
                  {active.items.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-baseline gap-5 border-b pb-4"
                      style={{ borderColor: "#1a1a1a" }}
                    >
                      <span
                        className="min-w-5 text-[10px] font-[400] uppercase tracking-[0.2em] text-gold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[15px] font-[300] text-text"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
