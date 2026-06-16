"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FeaturedPiece() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-10 md:px-16 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden bg-surface md:col-span-3 md:aspect-auto"
          data-cursor-view
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[600ms] ease-out hover:scale-105"
            style={{
              backgroundImage:
                "url('/images/featured-ring.jpg')",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start justify-center px-8 py-16 md:col-span-2 md:px-12 lg:px-16"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-gold/30" />
            <span
              className="text-[11px] font-[400] uppercase tracking-[0.3em] text-gold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Выбор мастера
            </span>
            <div className="h-[1px] w-8 bg-gold/30" />
          </div>

          <h2
            className="mb-6 text-[40px] leading-[1.1] font-[400] md:text-[56px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Кольцо
            <br />
            «Вечер»
          </h2>

          <p
            className="mb-8 text-[15px] font-[300] leading-relaxed text-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Жёлтое золото 585°
            <br />
            Бриллиант 0.3 карата
            <br />
            Ручная гравировка
          </p>

          <div className="mb-8 h-[1px] w-full bg-border-gold/40" />

          <a
            href="#contact"
            className="group flex items-center gap-4 text-[13px] font-[300] text-text-muted transition-colors duration-300 hover:text-gold"
            style={{ fontFamily: "var(--font-body)" }}
            data-cursor-pointer
          >
            <span>Узнать стоимость</span>
            <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
