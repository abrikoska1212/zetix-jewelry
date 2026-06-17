"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  type: string;
  subtitle: string;
  material: string;
  stone: string;
  craft: string;
  story: string;
  image: string;
  collection: string;
}

const items: Product[] = [
  {
    id: "01",
    name: "«Ночь»",
    type: "Кольцо",
    subtitle: "Тишина которая говорит громче слов",
    material: "Жёлтое золото 585°",
    stone: "Чёрный бриллиант 0.5 кт",
    craft: "Ручная гравировка в ателье",
    story: "Кольцо создано для тех кто ценит глубину тишины. Чёрный бриллиант в центре — как звезда в бездонном небе. Каждая гравировка уникальна, как отпечаток пальца.",
    image: "/images/ring.jpg",
    collection: "NOIR",
  },
  {
    id: "02",
    name: "«Река»",
    type: "Браслет",
    subtitle: "Серебро которое течёт как вода",
    material: "Серебро 925°",
    stone: "Закрытая инкрустация",
    craft: "Полировка зеркальной кистью",
    story: "Форма браслета вдохновлена течением реки. Серебро обработано так, чтобы свет двигался по нему как по воде. Закрытая инкрустация скрывает камни внутри — их видно только при определённом угле.",
    image: "/images/brace.jpg",
    collection: "LUMIÈRE",
  },
  {
    id: "03",
    name: "«Звезда»",
    type: "Серьги",
    subtitle: "Свет который не гаснет",
    material: "Белое золото 585°",
    stone: "Бриллианты 0.8 кт, VS1",
    craft: "Бесшовная инкрустация",
    story: "Восемь бриллиантов в каждой серьге расположены так, чтобы ловить свет из любого направления. Бесшовная техника делает оправу невидимой — камни словно парят.",
    image: "/images/earrings.jpg",
    collection: "ÉTERNEL",
  },
  {
    id: "04",
    name: "«Луна»",
    type: "Кулон",
    subtitle: "Мягкий свет для тёмных вечеров",
    material: "Серебро 925°",
    stone: "Натуральный лунный камень",
    craft: "Ручная огранка и полировка",
    story: "Лунный камень меняет оттенок в зависимости от освещения — от перлового до голубого. Ручная огранка подчёркивает его природный шатер. Кулон на тонкой цепи из серебра.",
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
      <section ref={ref} className="px-5 py-24 md:px-16 md:py-44">
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
              Коллекция
            </span>
            <div className="h-[1px] w-12 bg-gold/30" />
          </div>
          <h2
            className="text-[42px] font-[400] italic text-text md:text-[52px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Витрина
          </h2>
        </motion.div>

        <div className="showcase-grid grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-8">
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
              <div className="relative mb-6 aspect-square overflow-hidden bg-surface">
                <div
                  className="bg-cover bg-center transition-transform duration-[700ms] ease-out group-hover:scale-105 w-full h-full"
                  style={{ backgroundImage: `url('${item.image}')`, willChange: "transform" }}
                />

                {/* Вертикальный бейдж материала — desktop only */}
                <div
                  className="material-badge-vertical absolute left-0 top-1/2 hidden items-center gap-2 -translate-y-1/2 md:flex"
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
                <div className="pointer-events-none absolute inset-0 z-[2] border border-transparent transition-colors duration-[500ms] group-hover:border-border-gold" />

                {/* Золотое свечение при hover */}
                <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-[600ms] group-hover:opacity-100"
                  style={{ boxShadow: "inset 0 0 60px rgba(201, 168, 76, 0.06)" }}
                />
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
                  className="text-[20px] font-[400] italic text-text transition-colors duration-500 group-hover:text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.name}
                </h3>
                {/* Материал — только на мобиле */}
                <span
                  className="material-text-bottom mt-1 hidden text-[9px] font-[400] uppercase tracking-[0.2em] text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.material}
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
            className="fixed inset-0 z-[1000] overflow-y-auto"
            style={{ background: "#0a0906" }}
          >
            <div className="modal-inner min-h-screen md:grid md:h-screen md:grid-cols-2">
              {/* Кнопка закрыть */}
              <button
                onClick={() => setSelected(null)}
                className="modal-close absolute top-10 right-10 z-[1001] text-[11px] font-[400] uppercase tracking-[0.15em] text-text-muted transition-colors duration-300 hover:text-gold"
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
                className="modal-left relative flex items-center justify-center"
                style={{ padding: 80, borderRight: "1px solid #1a1a1a" }}
              >
                <img
                  src={selected.image}
                  alt={selected.name}
                  loading="lazy"
                  className="max-w-[80%] object-contain"
                  style={{ filter: "drop-shadow(0 0 80px rgba(201, 168, 76, 0.12))" }}
                />
                <p
                  className="modal-edition absolute bottom-10 left-10 text-[9px] font-[300] uppercase tracking-[0.3em] text-text-muted/40"
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
                className="modal-right flex flex-col justify-center"
                style={{ padding: "80px 80px 80px 60px" }}
              >
                {/* Коллекция */}
                <p
                  className="mb-8 text-[10px] font-[400] uppercase tracking-[0.4em] text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Коллекция {selected.collection}
                </p>

                {/* Название */}
                <h2
                  className="mb-1 text-[64px] leading-[1] font-[300]"
                  style={{ fontFamily: "var(--font-display)", color: "#fff" }}
                >
                  {selected.type}
                </h2>
                <p
                  className="mb-10 text-[24px] font-[400] italic text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selected.name}
                </p>

                {/* Золотой разделитель */}
                <div className="mb-10 h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />

                {/* Поэтическое описание */}
                <p
                  className="mb-12 max-w-[400px] text-[16px] font-[300] leading-[1.9] text-text-muted"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  {selected.story}
                </p>

                {/* Характеристики — элегантный список */}
                <div className="mb-12 flex flex-col gap-4">
                  {[
                    { label: "Материал", value: selected.material },
                    { label: "Камни", value: selected.stone },
                    { label: "Обработка", value: selected.craft },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-baseline gap-6">
                      <span
                        className="min-w-[90px] text-[10px] font-[400] uppercase tracking-[0.15em] text-gold/50"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {spec.label}
                      </span>
                      <span
                        className="text-[14px] font-[300] text-text"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {spec.value}
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
