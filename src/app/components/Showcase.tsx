"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ProductOverlay from "./ProductOverlay";

interface Product {
  id: string;
  name: string;
  type: string;
  subtitle: string;
  material: string;
  stone: string;
  craft: string;
  image: string;
  collection: string;
}

const items: Product[] = [
  {
    id: "01",
    name: "«Ночь»",
    type: "Кольцо",
    subtitle: "Ночная тишина золота",
    material: "Золото",
    stone: "Чёрный бриллиант 0.5 кт",
    craft: "Ручная гравировка",
    image: "/images/ring.jpg",
    collection: "NOIR",
  },
  {
    id: "02",
    name: "«Река»",
    type: "Браслет",
    subtitle: "Течение серебра",
    material: "Серебро",
    stone: "Без камней",
    craft: "Полировка вручную",
    image: "/images/brace.jpg",
    collection: "LUMIÈRE",
  },
  {
    id: "03",
    name: "«Звезда»",
    type: "Серьги",
    subtitle: "Свет далёких звёзд",
    material: "Золото",
    stone: "Бриллианты 0.8 кт",
    craft: "Инкрустация",
    image: "/images/earrings.jpg",
    collection: "ÉTERNEL",
  },
  {
    id: "04",
    name: "«Луна»",
    type: "Кулон",
    subtitle: "Лунный свет на шее",
    material: "Серебро",
    stone: "Лунный камень",
    craft: "Ручная огранка",
    image: "/images/pendant.jpg",
    collection: "NOIR",
  },
];

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <section ref={ref} className="px-10 md:px-16 py-24 md:py-32">
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
            Витрина
          </span>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelected(item)}
            >
              {/* Фото + бейдж */}
              <div className="relative mb-5 aspect-square overflow-hidden bg-surface">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[600ms] ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                {/* Вертикальный бейдж материала */}
                <div
                  className="absolute left-0 top-1/2 flex items-center gap-2 -translate-y-1/2"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  <div className="w-px h-10 bg-gold" />
                  <span
                    className="text-[9px] font-[400] uppercase tracking-[0.2em] text-gold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.material}
                  </span>
                </div>

                {/* Золотая рамка при hover */}
                <div className="pointer-events-none absolute inset-0 z-[2] border border-transparent transition-colors duration-[400ms] group-hover:border-border-gold" />
              </div>

              {/* Информация */}
              <div>
                <p
                  className="mb-1 text-[10px] font-[400] uppercase tracking-[0.25em] text-text-muted"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.type}
                </p>
                <h3
                  className="mb-3 text-[18px] font-[400] italic text-text transition-colors duration-300 group-hover:text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
                <span
                  className="inline-block border-b border-gold/30 pb-0.5 text-[10px] font-[400] uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Узнать стоимость →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Модалка товара */}
      <AnimatePresence>
        {selected && (
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
                onClick={() => setSelected(null)}
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
                  src={selected.image}
                  alt={selected.name}
                  className="max-w-[80%] object-contain"
                  style={{ filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))" }}
                />
                <p
                  className="absolute bottom-10 left-10 text-[9px] font-[300] uppercase tracking-[0.3em] text-text-muted/40"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Изделие № {selected.id} / 50
                </p>
              </motion.div>

              {/* Правая — информация */}
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] as const, delay: 0.1 }}
                className="flex flex-col justify-center"
                style={{ padding: 80 }}
              >
                {/* Коллекция */}
                <p
                  className="mb-6 text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Коллекция {selected.collection}
                </p>

                {/* Разделитель */}
                <div className="mb-8 h-[1px] w-10 bg-gold" />

                {/* Название */}
                <h2
                  className="mb-2 text-[56px] leading-[1.1] font-[300]"
                  style={{ fontFamily: "var(--font-display)", color: "#fff" }}
                >
                  {selected.type}
                </h2>
                <p
                  className="mb-12 text-[20px] font-[400] italic text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selected.name}
                </p>

                {/* Характеристики с нумерацией */}
                <div className="mb-12 flex flex-col gap-5">
                  {[selected.material + " " + selected.stone, selected.craft, selected.subtitle].map((spec, i) => (
                    <div
                      key={i}
                      className="flex items-baseline gap-5 border-b pb-5"
                      style={{ borderColor: "#1a1a1a" }}
                    >
                      <span
                        className="min-w-5 text-[10px] font-[400] uppercase tracking-[0.2em] text-gold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="text-[15px] font-[300] tracking-[0.05em] text-[#ccc]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Кнопка */}
                <a
                  className="flex items-center justify-between border-t border-b py-5 text-[11px] font-[400] uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:text-gold"
                  style={{ fontFamily: "var(--font-body)", borderColor: "#333" }}
                  href="#"
                >
                  <span>Узнать стоимость</span>
                  <span className="text-[18px] transition-transform duration-300 hover:translate-x-1.5">→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
