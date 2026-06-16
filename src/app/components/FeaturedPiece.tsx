"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedPiece() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-10 md:px-16 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] overflow-hidden bg-surface md:col-span-3 md:aspect-auto"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[800ms] ease-out hover:scale-105"
            style={{
              backgroundImage: "url('/images/featured-ring.jpg')",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col justify-center px-10 py-16 md:col-span-2 md:px-12 lg:px-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gold/30" />
            <span
              className="text-[10px] font-[400] uppercase tracking-[0.35em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Выбор мастера
            </span>
          </div>

          <h2
            className="mb-6 text-[44px] leading-[1.05] font-[400] md:text-[56px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Кольцо
            <br />
            «Вечер»
          </h2>

          <div className="mb-8 h-[1px] w-16 bg-gradient-to-r from-gold to-transparent" />

          <p
            className="mb-8 max-w-[360px] text-[15px] font-[300] leading-[2] text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Жёлтое золото 585° пробы. Бриллиант
            0.3 карата класса VS. Гравировка
            выполнена вручную в нашем ателье.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { label: "Проба", value: "585° · Жёлтое золото" },
              { label: "Камень", value: "Бриллиант 0.3 кт · VS" },
              { label: "Обработка", value: "Ручная гравировка" },
            ].map((spec, i) => (
              <div key={i} className="flex items-baseline gap-6">
                <span
                  className="min-w-[70px] text-[10px] font-[400] uppercase tracking-[0.15em] text-gold/50"
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
