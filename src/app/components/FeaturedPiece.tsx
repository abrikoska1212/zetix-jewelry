"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedPiece() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-5 py-24 md:px-16 md:py-32">
      {/* Desktop */}
      <div className="hidden md:block relative">
        {/* Фон — полупрозрачное фото на всю ширину */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: "url('/images/featured-ring.jpg')" }}
        />

        <div className="relative grid grid-cols-12 gap-0 min-h-[520px]">
          {/* Левая часть — фото */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="col-span-5 relative overflow-hidden bg-surface"
          >
            <div
              className="bg-cover bg-center transition-transform duration-[800ms] ease-out hover:scale-105 w-full h-full absolute inset-0"
              style={{
                backgroundImage: "url('/images/featured-ring.jpg')",
                willChange: "transform",
              }}
            />
            <div className="absolute top-8 left-8 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-gold/50" />
              <span
                className="text-[9px] font-[400] uppercase tracking-[0.3em] text-gold/70"
                style={{ fontFamily: "var(--font-body)" }}
              >
                № 01 / 50
              </span>
            </div>
          </motion.div>

          {/* Правая часть — текст */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="col-span-7 flex flex-col justify-between py-14 px-14 lg:px-20"
          >
            {/* Верх: лейбл + заголовок */}
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-gold/30" />
                <span
                  className="text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Выбор мастера
                </span>
              </div>

              <h2
                className="mb-6 text-[72px] leading-[0.95] font-[400]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Кольцо
                <br />
                «Вечер»
              </h2>

              <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />

              <p
                className="max-w-[440px] text-[16px] font-[300] leading-[2] text-text-muted"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Жёлтое золото 585° пробы. Бриллиант
                0.3 карата класса VS. Гравировка
                выполнена вручную в нашем ателье.
              </p>
            </div>

            {/* Низ: характеристики + цитата */}
            <div className="flex items-end justify-between gap-10">
              <div className="flex flex-col gap-0">
                {[
                  { label: "Проба", value: "585° · Жёлтое золото" },
                  { label: "Камень", value: "Бриллиант 0.3 кт · VS" },
                  { label: "Обработка", value: "Ручная гравировка" },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline gap-8 border-t border-border/30 py-3"
                  >
                    <span
                      className="min-w-[100px] text-[10px] font-[400] uppercase tracking-[0.15em] text-gold/50"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-[13px] font-[300] text-text-muted"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
                <div className="border-t border-border/30" />
              </div>

              {/* Поэтическая цитата справа внизу */}
              <p
                className="max-w-[240px] text-[14px] font-[300] italic leading-[1.9] text-text-muted/50 text-right"
                style={{ fontFamily: "var(--font-display)" }}
              >
                «Кольцо создано для тех,
                <br />
                кто ценит тишину
                <br />
                золота»
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile — vertical stack */}
      <div className="flex flex-col md:hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative overflow-hidden bg-surface"
          style={{ aspectRatio: "1 / 1" }}
        >
          <div
            className="bg-cover bg-center w-full h-full"
            style={{ backgroundImage: "url('/images/featured-ring.jpg')" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center py-8 text-center"
        >
          <div className="label-line mb-6 h-[1px] w-6 bg-gold/30" />
          <span
            className="mb-6 text-[9px] font-[400] uppercase tracking-[0.3em] text-gold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Выбор мастера
          </span>

          <h2
            className="mb-6 text-[36px] leading-[1.05] font-[400]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Кольцо
            <br />
            «Вечер»
          </h2>

          <div className="mb-6 h-[1px] w-12 bg-gradient-to-r from-gold to-transparent" />

          <p
            className="mb-8 max-w-[300px] text-[14px] font-[300] leading-[1.9] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Жёлтое золото 585° пробы. Бриллиант
            0.3 карата класса VS. Гравировка
            выполнена вручную в нашем ателье.
          </p>

          <div className="flex flex-col gap-3">
            {[
              { label: "Проба", value: "585° · Жёлтое золото" },
              { label: "Камень", value: "Бриллиант 0.3 кт · VS" },
              { label: "Обработка", value: "Ручная гравировка" },
            ].map((spec) => (
              <div key={spec.label} className="flex items-baseline gap-4">
                <span
                  className="min-w-[60px] text-[9px] font-[400] uppercase tracking-[0.12em] text-gold/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {spec.label}
                </span>
                <span
                  className="text-[13px] font-[300] text-text-muted"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
