"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedPiece() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-5 py-24 md:px-16 md:py-32">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex min-h-[420px]">
          {/* Фото — 70% */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="w-[70%] relative overflow-hidden bg-surface"
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

          {/* Текст — 30% */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-[30%] flex flex-col justify-between py-12 px-10 lg:px-14"
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

            {/* Характеристики */}
            <div>
              {[
                { label: "Проба", value: "585° · Жёлтое золото" },
                { label: "Камень", value: "Бриллиант 0.3 кт · VS" },
                { label: "Обработка", value: "Ручная гравировка" },
              ].map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-baseline gap-5 border-t border-border/30 py-3"
                >
                  <span
                    className="min-w-[70px] text-[9px] font-[400] uppercase tracking-[0.12em] text-gold/50"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {spec.label}
                  </span>
                  <span
                    className="text-[12px] font-[300] text-text-muted"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {spec.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-border/30" />
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
